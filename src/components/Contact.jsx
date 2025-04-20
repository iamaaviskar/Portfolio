import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-white px-4 font-mono"
    >
      <form className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md sm:mt-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Me
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-sm mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your name"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 text-sm mb-1">Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
        </div>

        <button
          type="submit"
          onClick={(e) => {
            alert("Message sent!");
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold transition duration-300"
        >
          Send Message
        </button>
      </form>

      <div className="flex space-x-6 text-2xl text-blue-600 mt-10 sm:mt-3 sm:mb-3">
        <a
          href="https://github.com/iamaaviskar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-800 transition" />
        </a>
        <a
          href="https://www.instagram.com/aaviskaradhikari/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="hover:text-pink-500 transition" />
        </a>
        <a
          href="https://x.com/raksivaa_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-400 transition" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
