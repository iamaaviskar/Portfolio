function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-tl from-blue-500 to-white text-white font-mono"
    >
      <img
        src="/luffys.jpg"
        alt="Luffy placeholder"
        className="w-108 h-108 rounded-full object-cover shadow-lg border-4 border-white"
      />
      <div className="mb-6 text-center px-6 md:px-20 ">
        <h1 className="text-5xl md:text-6xl font-bold mt-2">Hello!</h1>
        <p className="mt-6 text-lg md:text-2xl font-medium max-w-150">
          I am Aaviskar Adhikari, currently pursuing a BSc.IT at ISMT College,
          Chitwan. I'm also learning Full Stack Development.
        </p>
      </div>
    </section>
  );
}

export default About;
