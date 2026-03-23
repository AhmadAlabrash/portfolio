import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";


import Css from '../../assets/css3.svg';
import Xpressjs from '../../assets/expressjs.svg';
import Figma from '../../assets/figma.svg';
import Javascript from '../../assets/javascript.svg';
import Mongodb from '../../assets/mongodb.svg';
import Nodejs from '../../assets/nodejs.svg';
import ReactJS from '../../assets/react.svg';
import Tailwind from '../../assets/tailwindcss.svg';
import Nextjs from '../../assets/nextjs.svg';
import Aws from '../../assets/aws.svg';
import Jenkins from '../../assets/jenkins.svg';
import Ansible from '../../assets/ansible.svg';


const SkillsData = [
  // Frontend
  {
    id: 1,
    image: Javascript,
    title: 'JavaScript',
    disc: 'Core Language',
  },
  {
    id: 1,
    image: ReactJS,
    title: 'React.js',
    disc: 'Frontend Library',
  },
  {
    id: 1,
    image: Nextjs, // make sure you import this
    title: 'Next.js',
    disc: 'Fullstack Framework',
  },


  // Backend
  {
    id: 1,
    image: Nodejs,
    title: 'Node.js',
    disc: 'Backend Runtime',
  },
  {
    id: 1,
    image: Mongodb,
    title: 'MongoDB',
    disc: 'NoSQL Database',
  },

  // DevOps
  {
    id: 1,
    image: Aws, // import this
    title: 'AWS',
    disc: 'Cloud Infrastructure',
  },
  {
    id: 1,
    image: Jenkins, // import this
    title: 'Jenkins',
    disc: 'CI/CD Automation',
  },
  {
    id: 1,
    image: Ansible, // import this
    title: 'Ansible',
    disc: 'Configuration Management',
  },


];






function Skills() {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Expreience</h2>


      <div className="container container_skills">
      {SkillsData.map(({ id, image, title, disc }) => (
        <article className="card_skill">
            <div className="icon">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <h4>{title}</h4>
              <p className="text-light">{disc}</p>
            </div>
        </article>
      ))}
      </div>
    </section>
  );
}
export default Skills