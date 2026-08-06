import { personal } from '../data/content'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text mono">
          © {year} {personal.name.toLowerCase()}
        </p>
      </div>
    </footer>
  )
}
