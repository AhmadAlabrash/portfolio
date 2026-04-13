import React from 'react';
import './projects.css';

import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// Example dev project images
import IMG7 from '../../assets/portfolio6.jpg';
import IMG8 from '../../assets/portfolio6.jpg';

const portfolioData = [
  {
    id: 1,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/devops-jenkins-docker-sonarqube/main/diagram/diagram-image.png',
    title: 'DevOps Jenkins Docker SonarQube',
    github: 'https://github.com/AhmadAlabrash/devops-jenkins-docker-sonarqube',
    demo_diagram: 'https://devops-jenkins-nodejs.bytasker.com',
    demo:'https://www.youtube.com/watch?v=Kie-Fp-9n0I&feature=youtu.be'
  },
  {
    id: 2,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/jenkins-ci-cd-pipeline-python/main/diagram/project-diagram.png',
    title: 'Jenkins CI/CD Pipeline (Python)',
    github: 'https://github.com/AhmadAlabrash/jenkins-ci-cd-pipeline-python',
    demo_diagram: 'https://python-ci-cd-pipeline.bytasker.com',
    demo:'https://www.youtube.com/watch?v=qthVZ1sh0Dc&feature=youtu.be'
  },
  {
    id: 3,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/jenkins-ci-cd-pipeline-java/main/diagram/my-java-app.png',
    title: 'Jenkins CI/CD Pipeline (Java)',
    github: 'https://github.com/AhmadAlabrash/jenkins-ci-cd-pipeline-java',
    demo_diagram: 'https://ci-cd-pipeline-java.bytasker.com',
    demo:'https://www.youtube.com/watch?v=2J3K4R2oX84&feature=youtu.be'
  },
  {
    id: 4,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/flask-trivy-actions/main/diagram/full-project-diagram.png',
    title: 'Flask Trivy Github Actions',
    github: 'https://github.com/AhmadAlabrash/flask-trivy-actions',
    demo_diagram: 'https://flask-trivy-actions.bytasker.com',
    demo:'https://www.youtube.com/watch?v=7pHcaz9TBJQ&feature=youtu.be'
  },
  {
    id: 5,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/terraform-ansible-infrastructure/main/diagram/project-diagram.png',
    title: 'Terraform Ansible Infrastructure',
    github: 'https://github.com/AhmadAlabrash/terraform-ansible-infrastructure',
    demo_diagram: 'https://terraform-ansible-infrastructure.bytasker.com',
    demo:'https://www.youtube.com/watch?v=1zdeygyw6pY'
  },
  {
    id: 6,
    category: 'devops',
    image: 'https://raw.githubusercontent.com/AhmadAlabrash/monitoring-prometheus-grafana/main/diagram/diagram-of-the-project.png',
    title: 'Prometheus & Grafana',
    github: 'https://github.com/AhmadAlabrash/monitoring-prometheus-grafana',
    demo_diagram: 'https://monitoring-prometheus-grafana.bytasker.com',
    demo:'https://www.youtube.com/watch?v=kubCmxxWDUE&feature=youtu.be',
  },
 {
  id: 7,
  category: 'development',
  image: IMG6,
  title: 'Invoice Generator Web App',
  github: 'https://github.com/AhmadAlabrash/invoice-generator',
  demo: 'https://invoice-generator.bytasker.com'
},
{
  id: 8,
  category: 'development',
  image: 'https://raw.githubusercontent.com/AhmadAlabrash/AI-Business-Hub/main/docs/homepage-image.png',
  title: 'AI Business Hub Platform',
  github: 'https://github.com/AhmadAlabrash/AI-Business-Hub',
  demo: 'https://AI-Business-Hub.bytasker.com'
},
{
  id: 9,
  category: 'development',
  image: 'https://raw.githubusercontent.com/AhmadAlabrash/alpha-blog/refs/heads/main/docs/homepage-image.png',
  title: 'Alpha Blog Application',
  github: 'https://github.com/AhmadAlabrash/alpha-blog',
  demo: 'https://alpha-blog.bytasker.com'
},
{
  id: 10,
  category: 'development',
  image: 'https://raw.githubusercontent.com/AhmadAlabrash/nextjob/main/docs/homepage-image.png',
  title: 'NextJob Job Platform',
  github: 'https://github.com/AhmadAlabrash/nextjob',
  demo: 'https://nextjob.bytasker.com'
},
{
  id: 11,
  category: 'development',
  image: 'https://raw.githubusercontent.com/AhmadAlabrash/FloxAI/main/docs/floxai_project.png',
  title: 'FloxAI AI Application',
  github: 'https://github.com/AhmadAlabrash/FloxAI',
  demo_diagram : 'https://FloxAI.bytasker.com',
  demo:'https://www.youtube.com/watch?v=3LOTmh1DfK0&feature=youtu.be'
}

];

function Portfolio() {
  const devopsProjects = portfolioData.filter(
    (project) => project.category === 'devops'
  );

  const developmentProjects = portfolioData.filter(
    (project) => project.category === 'development'
  );

  const renderProjects = (projects) =>
    projects.map(({ id, image, title, github, demo , category , video }) => (
      <article key={id} className="portfolio_item">
        <div className="portfolio_item-img">
          <img src={image} alt={title} />
        </div>
        <h3>{title}</h3>
        <div className="portfolio_item-cta">
          <a href={github} target="_blank" rel="noreferrer" className="btn">
            Github
          </a>
         <a href={demo} target="_blank" rel="noreferrer" className="btn btn-primary">
  {category === 'devops' ? 'Demo Video' : 'Live Demo'}
</a>
      

        </div>
      </article>
    ));

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio_section">
        <h3 className="portfolio_section-title">DevOps & Cloud Projects</h3>
        <div className="container portfolio_container">
          {renderProjects(devopsProjects)}
        </div>
      </div>

      <div className="portfolio_section">
        <h3 className="portfolio_section-title">Software Engineering Projects</h3>
        <div className="container portfolio_container">
          {renderProjects(developmentProjects)}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;