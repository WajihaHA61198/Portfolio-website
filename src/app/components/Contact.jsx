"use client";

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // You can integrate with Formspree, Nodemailer API route, etc.

    // const formData = new FormData(e.target);
    // formData.append("access_key", "2a1cc3c1-916c-445d-85ee-2faca5dcac6e");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "2a1cc3c1-916c-445d-85ee-2faca5dcac6e");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();
    setResult(data.success ? "Form submitted successfully!" : "Error");
    setIsSuccess(Boolean(data.success));
    // console.log("Response:", data, "status wajiha", setIsSuccess(Boolean(data.success)));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative isolate overflow-hidden py-10"
    >
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Connect with me
        </p>
        <h2 className="mt-2 text-4xl font-semibold text-gray-900 dark:text-gray-300">
          Get in touch
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
          I’d love to hear from you! If you have any questions, comments or
          feedback, please use the form below.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300"
            required
          />

          <button
            type="submit"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-black dark:bg-pink-500 cursor-pointer px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
          >
            Submit now →
          </button>
          <p
            className={`mt-4 ${
              isSuccess === null
                ? ""
                : isSuccess
                ? "text-green-800"
                : "text-red-600"
            } `}
          >
            {/* {isSuccess === null ? "" : isSuccess ? "thanks" : "none"} */}
            {result}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
