import My from "../assets/myimage.jpeg";

const Hero = () => {
  return (
    <main id="hero" className="flex flex-col-reverse h-auto md:h-screen w-full md:w-[90%] lg:w-[65%] 
     md:flex-row justify-center items-center mt-10 md-0 py-8 px-4 md:py-12 md:px-10 gap-8 md:gap-10">
      <div className="w-full md:w-[50%] lg:w-[65%] flex flex-col gap-5 text-center md:text-left">
        <h1 className="text-4xl font-bold">Hi&apos;m Ammar </h1>
        <p className="px-3">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          magni? Non laboriosam cum repudiandae molestias at quam ullam eius
          fuga praesentium perferendis ipsum, quae saepe dolorum excepturi
          magnam vel consequuntur? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugiat distinctio ad ex consequatur laudantium
          eveniet quidem reprehenderit, praesentium quia. Quod quaerat
          laudantium et nostrum expedita voluptates beatae libero cumque
          recusandae.
        </p>
        <button className="bg-green-800 text-white p-2 px-4 rounded-full w-full md:w-[50%]
         hover:bg-green-950 focus:ring-2 ring-green-950 ring-offset-2 transition-all ease-in-out delay-150 focus:translate-y-[1px]">
          Hero me
        </button>
      </div>
      <div className="w-[50%] flex justify-center">
        <img
          className="w-[180px] h-[180px] md:w-[300px] md:h-[300px] lg:w-[300px] lg:h-[300px] rounded-full object-cover object-top"
          src={My}
          alt="logo"
        />
      </div>
    </main>
  );
};

export default Hero;
