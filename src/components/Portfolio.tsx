import React from "react";
import portfolioData from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

interface Project {
  imgUrl: string;
  title: string;
  stack: string[];
  link: string;
  description: string;
}

const Portfolio: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.map((project: Project) => (
          <PortfolioItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
            description={project.description}          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
