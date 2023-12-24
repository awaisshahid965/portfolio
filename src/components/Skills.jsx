import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Tailwind from "../assets/tailwind.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NextJS from "../assets/next-js.svg";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import Svelte from "../assets/svelte-icon.svg";
import GitHub from "../assets/github.png";
import Mongo from "../assets/mongo.png";

let skills = [
  {
    img: HTML,
    text: "HTML",
  },
  {
    img: CSS,
    text: "CSS",
  },
  {
    img: JavaScript,
    text: "JavaScript",
  },
  {
    img: Tailwind,
    text: "Tailwind",
  },
  {
    img: ReactImg,
    text: "ReactJS",
  },
  {
    img: Svelte,
    text: "Svelte",
  },
  {
    img: NextJS,
    text: "NextJS",
  },
  {
    img: Node,
    text: "NodeJS",
  },
  {
    img: Mongo,
    text: "MongoDB",
  },
  {
    img: FireBase,
    text: "Firebase",
  },
  {
    img: GitHub,
    text: "GitHub",
  },
];

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return (
    <div ref={tilt} {...rest}>
      {props.children}
    </div>
  );
}

function Skill({ img, text }) {
  const options = {
    scale: 1,
    speed: 2000,
    max: 20,
  };

  return (
    <>
      <Tilt className="box" options={options}>
        <div
          className="pt-6 shadow-md skill-box"
          style={{
            cursor: "pointer ",
          }}
        >
          <img className="w-20 h-20 mx-auto" src={img} alt="HTML icon" />
          <p className="my-4 text-white">{text}</p>
        </div>
      </Tilt>
    </>
  );
}

const Skills = () => {
  return (
    <section name="skills" className="w-full px-4 pb-24">
      <div className="max-w-[1200px] mx-auto w-full">
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-orange-700 ">
            Skills
          </h2>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill) => (
            <Skill {...skill} key={skill.text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
