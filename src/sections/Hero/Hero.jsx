import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Logo.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedInIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/Logo.png'

function Hero() {
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="JustHilman Profile Picture" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" />
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
        <p>
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