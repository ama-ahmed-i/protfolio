import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <main
      id="contact"
      className="w-full bg-gray-900 opacity-100 h-auto flex flex-col justify-center items-center border-t-[1px] border-gray-300  py-14 gap-y-5"
    >
      <h1 className="text-white text-4xl mt-10">Contact Me</h1>
      <div className="flex flex-col-reverse w-full sm:w-[100%] md:w-[90%] lg:w-[65%] md:flex md:flex-row  shadow-sm shadow-slate-400 rounded-lg">
      <div className=" h-[50vh] md:h-[72vh] w-full pt-8 md:pt-0 border-r-[1px] border-gray-500 gap-y-5 flex flex-col justify-center items-center md:items-left">

          <p className="text-white flex gap-4 text-lg items-center mx-au ml-10"><FaFacebook size={45} className="text-blue-700 hover:text-blue-600"/> Facebook</p>
          <p className="text-white flex gap-4 text-lg items-center mx-au ml-10"><FaWhatsapp size={45}  className=" text-green-700 hover:text-green-600"/> Whatsapp</p>
          <p className="text-white flex gap-4 text-lg items-center mx-au ml-10"><FaGithub size={45}  className=" text-white hover:text-gray-400"/> git Github </p>

        </div>
        
        <div className="border-l-[1px] w-full border-gray-500 h-[72vh] shadow-2xl flex justify-center items-center">
          <form className="flex flex-col  w-[100%]   p-10 gap-4 ">
            <input
              type="text"
              placeholder="type your full name"
              className="p-2 px-4 border-[1px] rounded-md transition-all duration-500
               border-gray-500 outline-none focus:ring-1 
               focus:ring-offset-1 focus:ring-gray-500"
            />
            {/*  */}
            <input
              type="text"
              placeholder="type your  email"
              className="p-2 px-4 border-[1px] rounded-md transition-all duration-500
               border-gray-500 outline-none focus:ring-1 
               focus:ring-offset-1 focus:ring-gray-500"
            />
                        <input
              type="text"
              placeholder="type your  phone number"
              className="p-2 px-4 border-[1px] rounded-md transition-all duration-500
               border-gray-500 outline-none focus:ring-1 
               focus:ring-offset-1 focus:ring-gray-500"
            />

            <textarea 
            aria-placeholder="type your massage"
            className="p-2 px-4 border-[1px] h-24 
            rounded-md transition-all duration-500
             border-gray-500 outline-none focus:ring-1 focus:ring-offset-1 focus:ring-gray-500"
            ></textarea>

                 <button 
                 className="bg-green-800 p-2 rounded-md
                 text-white text-xl
                  hover:bg-green-600 transition-all duration-500
                  ">Send</button>
          </form>
        </div>


      </div>
    </main>
  );
};

export default Contact;
