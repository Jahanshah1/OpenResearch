import React from 'react';


const Navbar = () => {
  return (
    <div>
     <nav className="bg-[#222629] py-3 px-3">
  <div className="container mx-auto flex items-center justify-between">
    <div className="text-lg font-bold font-poppins text-white border p-2">Open Research</div>
    <div className="flex items-center">

      <a href="/" className="px-3 py-2 rounded-md font-semibold text-white hover:bg-[#6B6E70]" style={{marginRight:'5px', marginTop:'2px'}}>Home</a>
      <a href="/Application" className="px-3 py-2 rounded-md font-semibold text-white hover:bg-[#6B6E70]">Application</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar;
