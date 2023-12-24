import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen px-4 bg-[#161616] mb-24">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h2 className="text-4xl font-bold inline border-b-4 border-orange-700 mb-12 self-center">
          About
        </h2>
        <article className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="text-left text-4xl font-bold p-4 px-8 text-white flex m-auto">
            <p>Hi. I'm {process.env.REACT_APP_USER_FIRST_NAME}, nice to meet you. Please take a look around.</p>
          </div>
          <div className="bg-white py-10 px-8 text-gray-900 text-left flex m-auto">
            <p>
              I am passionate about building excellent websites & web
              applications according to clients requirements. Which are ranging
              from individuals and small-businesses all the way to large
              enterprise corporations. What would you do if you had a expert web
              developer available at your fingertips?
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default About;
