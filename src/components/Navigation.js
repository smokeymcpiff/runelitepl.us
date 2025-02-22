import React, { Component } from 'react'
import { Link } from 'gatsby'
import logos from '../images/logos.png'



export default class Navigation extends Component {

  state = {
    scrolled: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navOnScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.navOnScroll)
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true })
    } else {
      this.setState({ scrolled: false })
    }
  }

  render() {
    const { scrolled } = this.state
    const { menuLinks } = this.props

    return (
      <nav className={scrolled ? 'nav scroll' : 'nav scroll'}>
        <div className="nav-container">
          <div className="brand">
            <Link to="/">
              <img src={logos} className="favicon" alt="RuneLite Plus" />
              <span className="text">RuneLitePlus</span>
            </Link>
          </div>
          <div className="links">
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link} activeClassName="active">
                {link.name}
              </Link>
            ))}
            <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/Q7wFtCe">
            Discord
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/runelite-extended">
            Github
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/join/RuneLitePlus" ><img src="/img/like.png" class="patreon" alt="RuneLite Plus"></img>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}
