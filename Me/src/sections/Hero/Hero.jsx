import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Rohit Chaudhary"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rohit
          <br />
          Chaudhary
        </h1>
        <h2>BTech Student</h2>
        <span className={styles.socialIcons}>
          <a href="https://x.com/Chaudharyr57652" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/I-RohitChaudhary" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a href="https://linkedin.com/in/chaudharyohit" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
        Passionate B.Tech student specializing in AI & Data Science, with hands-on experience in crafting innovative web and game solutions.
        </p>
        <a href={CV} download >
          <button className={styles.resumeButton } >Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
