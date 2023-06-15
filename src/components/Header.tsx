import { header, img, link } from './Header.css'

export function Header () {
  return (
    <nav className={header}>
      <a href='/'>
        <img className={img} src='/logo.svg' alt='Logo' />
      </a>
      <a className={link} href='/'>Hacker News</a>
    </nav>
  )
}
