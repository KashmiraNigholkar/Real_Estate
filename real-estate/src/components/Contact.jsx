import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "9b22c3eb-f6b7-44ec-9231-c633e8a5773f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        toast.error(data.message);
        setResult("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}

      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact <span className="underline underline-offset-4 decoration-1 font-light">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 text-left">
            <label className="block mb-1">Your Name</label>
            <input
              type="text"
              name="Name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div className="w-full md:w-1/2 px-2 mb-4 text-left">
            <label className="block mb-1">Your Email</label>
            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        <div className="mb-6 text-left">
          <label className="block mb-1">Message</label>
          <textarea
            name="Message"
            placeholder="Message"
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          disabled={!!result}
          className="bg-blue-600 text-white py-2 px-12 mb-10 rounded hover:bg-blue-700 transition-all"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
