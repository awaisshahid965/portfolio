import React from "react";

function Work() {
  return (
    <section name="work" className="w-full px-4 bg-[#161616] pb-24">
      <div className="max-w-[1000px] mx-auto w-full mb-8 mt-24">
        <div className="pb-2 mb-8">
          <h2 className="text-4xl font-bold inline border-b-4 text-gray-300 border-orange-700">
            Work Experience
          </h2>
        </div>

        <div className="work-content-container">
          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className="border-l-4 border-orange-700 pl-2 mb-1 block">
                Senior Software Engineer
              </span>
              <span className="block text-sm pl-3">
                ( OCloud Solutions | May 2022 - Present, Pakistan )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Architected and developed scalable web applications using TypeScript, Node.js, and PostgreSQL, improving performance by 30%.
              </li>
              <li>
                Designed and implemented RESTful and GraphQL APIs, enhancing data retrieval efficiency by 25%.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate user-facing elements with server-side logic using React and Node.js.
              </li>
              <li>
                Led the migration of a monolithic application to a microservices architecture within an AWS ecosystem, reducing deployment time by 40%.
              </li>
              <li>
                Worked closely with product managers to create design documents and estimates, ensuring on-time and within-budget delivery.
              </li>
              <li>
                Contributed to the implementation of vector databases and LLM APIs, enabling advanced data processing capabilities.
              </li>
              <li>
                Utilized Agile methodologies to manage project timelines, sprints, and deliverables, consistently meeting client expectations.
              </li>
            </ul>
          </article>

          <article className="work-content ml-6 mb-8">
            <h3 className="work-heading text-2xl font-bold text-gray-300 mb-3">
              <span className="border-l-4 border-orange-700 pl-2 mb-1 block">
                Software Engineer / Full Stack Developer
              </span>
              <span className="block text-sm pl-3">
                ( Onsets | February 2020 - April 2022, Pakistan )
              </span>
            </h3>

            <ul className="text-1xl list-disc ml-6 max-w-3xl">
              <li>
                Developed dynamic, responsive front-end applications using React, TypeScript, HTML, and CSS, achieving a 20% increase in user engagement.
              </li>
              <li>
                Integrated RESTful APIs and GraphQL endpoints, ensuring seamless data flow between front-end and back-end systems.
              </li>
              <li>
                Collaborated with designers and backend developers to optimize application performance and user experience.
              </li>
              <li>
                Implemented automated testing for UI components, reducing the bug rate by 15%.
              </li>
              <li>
                Managed version control using Git and conducted code reviews to maintain code quality standards.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Work;
