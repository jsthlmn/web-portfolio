import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Logo.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Logo.png'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
  
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="JustHilman Profile Picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>Just <br /> Hilman</h1>
        <h2>Data Engineer</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern web apps for commercial bussiness.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero