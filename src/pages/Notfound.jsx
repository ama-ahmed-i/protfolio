import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <main  className="flex h-screen justify-center items-center">
      <div className="text-center  font-serif">
        <p className="text-6xl text-black font-bold animate-pulse"> 404</p>
        <h1 className="text-4xl text-red-700 font-bold mb-8"> Page Not Found</h1>
        <Link to={"/"} className="text-white bg-green-900 hover:bg-green-800 py-4 px-12 rounded-full focus:ring-1 focus:ring-green-800 focus:ring-offset-1 "
        >Go Home</Link>
      </div>
    </main>
  );
};

export default Notfound;
