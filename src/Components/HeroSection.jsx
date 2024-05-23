function HeroSection() {
    return (
      
      <div className="  flex items-center">
        <div style={{ backgroundImage: `url('/src/assets/bg.png')` }} className="w-full   bg-cover h-screen">
        

<div className="absolute   top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
         <div className="w-1/2 h-full flex  mx-auto  flex-col items-center justify-center">
        <h1 className="text-white m-5 font-bold font-inter text-6xl">We will help you leverage your authentic self</h1>
          <h3 className="text-cyan-100 font-sans  text-2xl font-light ">Master the core concept and technique of influence to win over the people you work with and beyond.</h3>
          <button className="  bg-cyan-600 font-serif text-white font-bold m-5 p-5 rounded-xl">JOIN OUR BOOT CAMP</button>
        </div>
        <div className="w-1/2 justify-center items-start text-left px-6">
        </div>
        </div>
      </div>
    );
  }

export default HeroSection