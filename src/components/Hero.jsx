function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-7 justify-center items-center font-mono">
        <div className="md:ml-15 mt-4 md:mt-0">
          <h1 className="font-light text-2xl md:text-4xl md:font-semibold">
            Hi,{" "}
            <p>
              I am <span className="text-blue-500">Aaviskar</span> <br /> Full
              Stack Developer
            </p>
          </h1>

          <button
            className="bg-blue-500 border rounded-md w-20 h-9 text-white cursor-pointer hover:bg-blue-700 transition duration-300"
            onClick={() => {
              alert("Hah! gaeee");
            }}
          >
            Contact
          </button>
        </div>

        <img src="luffys.jpg" alt="luffy" className="rounded w-full md:w-1/2" />
      </div>
    </>
  );
}

export default Hero;
