import React from "react";
import "./portfolio.css";
import IMG1 from "../../asserts/project1.jpg";
import IMG2 from "../../asserts/project2.jpg";
import IMG3 from "../../asserts/project3.jpg";
import IMG4 from "../../asserts/project4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 2,
    image: IMG2,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 3,
    image: IMG3,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
  {
    id: 4,
    image: IMG4,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://dribble.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
