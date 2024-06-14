const Navbar = () => {
  return <header className="w-full bg-slate-50 border-2 border-slate-700 text-black flex items-center justify-between px-20 py-4">
    <div>
      <h3 className="text-xl "> Sachin Gavali </h3>
    </div>
    <div className="flex items-center gap-4 ">
      <button className="px-8 py-2 bg-slate-900 text-white rounded-lg border-2 border-transparent focus:border-blue-400 hidden md:flex">Login</button>
      <button className="px-8 py-2 bg-slate-900 text-white rounded-lg border-2 border-transparent focus:border-blue-400 hidden md:flex">Light</button>
    </div>
  </header>;
};

export default Navbar;
