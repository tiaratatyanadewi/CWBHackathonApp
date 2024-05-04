/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/background.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GABOOT 1.0",
    description:
      "An autonomous wall following robot.",
    url: "https://drive.google.com/file/d/1P2m9JR1FL7Oduyk75qqGbwaOJppUKnk0/view",
  },
  {
    title: "SPARTA",
    description:
      "A forward-swept flying wing UAV - Racing plane.",
    url: "https://www.instagram.com/p/CwAGJw_JcUm/?igsh=MTJpaDk5cXEzNjd1aw",
  },
  {
    title: "Fuzzy PID Control Quadrotor",
    description:
      "Created Fuzzy PID Control for Quadrotor in ROS Noetic.",
    url: "https://youtu.be/WrX8n6NUzcY?feature=shared",
  },
  {
    title: "Lung Cancer Detection",
    description:
      "Created Lung Cancer Detection from CT Scan Image Datasets using Deep Learning.",
    url: "https://youtu.be/9n8YSaA8VnY?feature=shared",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
