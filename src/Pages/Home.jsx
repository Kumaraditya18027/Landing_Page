import Card from "../Components/Card"
import Features from "../Components/Features"
import HeroSection from "../Components/HeroSection"
import Services from "../Components/Services"
import { Testimonial } from "../Components/Testimonial"
import Contact from "./ContactUs"


function Home() {
  return (
    <div className="">

          <HeroSection/>
         <Features/>
          {/* About Section */}
          <div className=" flex flex-wrap gap-10 m-32 ">
<div className=" ">
  <img src="about.jpg" alt="" />
</div>
<div className="w-1/2 p-7">
  <h1 className="mx-auto justify-center items-center   font-bold text-4xl">About <span className="text-cyan-400">Us</span> </h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <h2 className="font-semibold">Why choose us?</h2>
  <li>
  Lorem ipsum dolor sit amet,
  </li> <li> consectetur adipiscing elit,
  </li> <li> sed do eiusmod tempor incididunt
  </li> <li>  ut labore et dolore magna aliqua.
  </li> <li>  Ut enim ad minim veniam, quis nost
 </li> <li> rud exercitation ullamco laboris nisi 
  </li>
</div>
          </div>
          <div className=" bg-slate-100 p-5">
         <Card/>
         </div>
         <Services/>
         <div className=" text-center   m-10">
          <div className=" flex mx-auto justify-center items-center ">
          <h1 className="text-5xl font-bold">  <span  className="text-5xl text-cyan-500"> Our  </span>Testomonials</h1>
          </div>
         <div className="flex  justify-center item-center gap-10 m-10 flex-warp">
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
        
          </div>
         </div>
         <Contact/>
        </div>
  )
}

export default Home