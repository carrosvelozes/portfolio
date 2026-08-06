export const personal = {
  name: 'Leonardo Moraes',
  role: 'Software Engineer',
  location: 'Campinas, SP',
  email: 'leonardosfmoraes@gmail.com',
  github: 'https://github.com/carrosvelozes',
  bio: 'Desenvolvedor de software formado pelo IFSP. Trabalho com web, APIs e código aberto. Interesse em front-end, back-end e arquitetura de sistemas.',
  stack: ['React', 'Node.js', 'Python', 'TypeScript', 'FastAPI'],
}

export const about = {
  paragraphs: [
    'Tenho 23 anos, sou de Campinas/SP. Formado em Análise e Desenvolvimento de Sistemas pelo IFSP – Campus Campinas, onde também concluí o técnico em Informática.',
    'Estágio em infraestrutura de T.I. na Prefeitura de Campinas (2024) — suporte, redes e manutenção. Atualmente focado em desenvolvimento de software.',
    'Inglês avançado. Disponível para front-end, back-end ou QA.',
  ],
}

export const education = [
  {
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'IFSP Campinas',
    period: '2022 — 2025',
  },
  {
    title: 'Técnico em Informática',
    institution: 'IFSP Campinas',
    period: '2019 — 2021',
  },
]

export const experience = [
  {
    title: 'Estagiário — Auxiliar de T.I.',
    company: 'Prefeitura de Campinas',
    period: '2024',
    description: 'Suporte, redes, hardware e manutenção.',
  },
]

export const skills = {
  frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'TypeScript'],
  backend: ['Node.js', 'Python', 'FastAPI'],
  database: ['SQL', 'PostgreSQL'],
  devops: ['Git', 'Linux', 'Windows'],
  tools: ['VS Code', 'Postman'],
}

export const projects = [
  {
    id: 'pdf-analyzer',
    name: 'PDF Analyzer',
    year: '2025',
    description:
      'Web app com IA para analisar PDFs e responder perguntas sobre o conteúdo. Projeto de TCC.',
    image:
      'https://camo.githubusercontent.com/c76d82215697f2ebaa988e4a25695eb48ffcb7beedbb3f6943d88278ac6f4a07/68747470733a2f2f692e696d6775722e636f6d2f416e30323670662e706e67',
    stack: ['Python', 'FastAPI', 'IA'],
    github: 'https://github.com/carrosvelozes/PDF-Analyzer',
    demo: null,
  },
  {
    id: 'frufrutas',
    name: 'Frufrutas',
    year: '2024',
    description:
      'Projeto web para a matéria Desenvolvimento Web do curso de ADS.',
    image:
      'https://camo.githubusercontent.com/3cbc26173c2f5fdb0cc04bb91c3d64a0eac3c7e37ea5636a0839b3051898d821/68747470733a2f2f692e696d6775722e636f6d2f566556727642482e706e67',
    stack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/carrosvelozes/Frufrutas',
    demo: null,
  },
  {
    id: 'contai',
    name: 'Contai',
    year: '2025',
    description:
      'Controle financeiro pessoal com Next.js. Receitas, despesas e dashboard.',
    image: null,
    stack: ['Next.js', 'React', 'TypeScript'],
    github: null,
    demo: null,
    status: 'WIP',
  },
]

export const navLinks = [
  { label: 'projects', href: '#projects' },
  { label: 'about', href: '#about' },
  { label: 'stack', href: '#skills' },
  { label: 'contact', href: '#contact' },
]
