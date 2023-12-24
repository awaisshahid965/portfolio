import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen flex justify-center px-4 mt-24 pt-24 bg-[#161616]"
    >
      <form
        method="POST"
        action={process.env.REACT_APP_GETFORM_URI}
        className="flex flex-col max-w-[600px] w-full text-neutral-800"
      >
        <div className="pb-8 text-gray-300">
          <h2 className="text-4xl font-bold inline-block border-b-4 border-orange-700 w-max mx-auto">
            Contact
          </h2>
          <p className="py-4">
            Submit the form below or shoot me an email -
            {process.env.REACT_APP_USER_EMAIL}
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-orange-700 hover:border-orange-700 px-4 py-3 my-8 mx-auto flex items-center duration-300">
          Let's Collaborate
        </button>
      </form>
    </section>
  );
};

export default Contact;
