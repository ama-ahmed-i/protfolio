

const Footer = () => {
  const copyright = new Date().getFullYear();
  return (
<main className="bg-gray-800 text-white flex  h-28 md:h-20 items-center justify-center -shadow-md shadow-slate-400">
  <div className="text-center">
    <h1>Ammar Ahmed</h1>
    <small className="text-gray-400"> &copy; All right reserved, {copyright}</small>
  </div>
  

</main>
  )
}

export default Footer
