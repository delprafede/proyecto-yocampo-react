
import { Outlet } from "react-router-dom";

import NavBar from "./Navbar";




function Layout() {
  return (
    <main>
   
      <NavBar />
      
      <Outlet />

     
    </main>
  )
}

export default Layout
