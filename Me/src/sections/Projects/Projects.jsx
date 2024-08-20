import styles from './ProjectsStyles.module.css';
import Astra from '../../assets/Astra_Blog.jpg';
import bird from '../../assets/Floppy.jpg';
import Roport from '../../assets/Myport.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Astra}
          link="https://github.com/I-RohitChaudhary/Astra-Blog-website.git"
          h3="Astra"
          p="Blogging App"
        />
        <ProjectCard
          src={bird}
          link="https://github.com/I-RohitChaudhary/Floppy-Bird-Game.git"
          h3="Floppy Birds"
          p="Gaming App"
        />
        <ProjectCard
          src={Roport}
          link="https://github.com/I-RohitChaudhary/RohitDev-portfolio.git"
          h3="RohitDev"
          p="Personal Portfolio"
        />
  
      </div>
    </section>
  );
}

export default Projects;
