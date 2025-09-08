// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggle && navList) {
    toggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });
}

// Alternância de tema (persistência simples)
const themeToggle = document.getElementById('themeToggle');
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'light') document.documentElement.classList.add('light');

function syncThemeIcon() {
    const isLight = document.documentElement.classList.contains('light');
    if (themeToggle) {
        const moonIcon = themeToggle.querySelector('.moon-icon');
        const sunIcon = themeToggle.querySelector('.sun-icon');
        if (moonIcon && sunIcon) {
            moonIcon.style.display = isLight ? 'none' : 'inline-block';
            sunIcon.style.display = isLight ? 'inline-block' : 'none';
        }
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light');
        const isLight = document.documentElement.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        syncThemeIcon();
    });
}

syncThemeIcon();

// Ano do rodapé
document.getElementById('year').textContent = String(new Date().getFullYear());

// Abas SPA (tabs ARIA)
const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function showPanel(panelId) {
    panels.forEach(panel => {
        panel.hidden = panel.id !== panelId;
    });
    tabs.forEach(tab => {
        const selected = tab.getAttribute('aria-controls') === panelId;
        tab.setAttribute('aria-selected', String(selected));
    });
    // Mostrar Hero apenas na home
    const shouldHideHero = panelId !== 'home';
    document.documentElement.classList.toggle('hide-hero', shouldHideHero);
}

function initialPanelFromHash() {
    const hash = window.location.hash.replace('#', '');
    const candidate = panels.find(p => p.id === hash);
    return candidate ? candidate.id : 'home';
}

// Clique nas abas
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        const panelId = tab.getAttribute('aria-controls');
        if (!panelId) return;
        history.replaceState(null, '', `#${panelId}`);
        showPanel(panelId);
        // fecha menu mobile se aberto
        if (navList && navList.classList.contains('open')) {
            navList.classList.remove('open');
            if (toggle) toggle.setAttribute('aria-expanded', 'false');
        }
    });

    tab.addEventListener('keydown', (e) => {
        const idx = tabs.indexOf(tab);
        if (e.key === 'ArrowRight') {
            const next = tabs[(idx + 1) % tabs.length];
            next.focus();
        } else if (e.key === 'ArrowLeft') {
            const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
            prev.focus();
        } else if (e.key === 'Enter' || e.key === ' ') {
            tab.click();
        }
    });
});

// Logo clicável para voltar ao home
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', (e) => {
        e.preventDefault();
        history.replaceState(null, '', '#home');
        showPanel('home');
        // Desmarca todas as abas
        tabs.forEach(tab => tab.setAttribute('aria-selected', 'false'));
    });
}

// Inicializa pela hash, se houver
showPanel(initialPanelFromHash());
window.addEventListener('hashchange', () => showPanel(initialPanelFromHash()));