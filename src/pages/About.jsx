import { useEffect, useState } from "react";

const About = (props) => {
  const [about, setAbout] = useState(null);
  
  const getAboutData = async () => {
    const res = await fetch(`${props.url}about`)
    const data = await res.json();
    setAbout(data)
  }

  useEffect(() => {getAboutData()}, []);

  const loaded = () => (
    <div>
      <h2>{about.name}</h2>
      <img src={about.headshot} alt="headshot" />
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
      
    </div>
  )
  return about ? loaded() : <h1>Loading...</h1>
}

export default About;