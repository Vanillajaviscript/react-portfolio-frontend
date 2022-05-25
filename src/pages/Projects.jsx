import { useEffect, useState } from "react";

const Projects = (props) => {
const [projects, setProjects] = useState(null);

const getProjectData = async () => {
  const res = await fetch(`${props.url}projects`);
  const data = await res.json();
  setProjects(data);  
}

useEffect(() => {getProjectData()}, []);

const loaded = () => {
  return projects.map((project) => (
  <div>
    <h2>{project.name}</h2>
    <img src={project.image} alt="project image" />
    <a href={project.live}><button>Project</button></a>
    <a href={project.git}><button>Github</button></a>
  </div>
  ))
}
  return projects ? loaded() : <h1>Loading...</h1>
};

export default Projects;