import { Users, Download, Globe } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";


function Features() {
    return (
         
        <div className=" bg-slate-100  p-10 mx-auto justify-center">
        <h1 className="font-bold text-5xl text-center mt-24  underline decoration-solid underline-offset-4  m-10  text-black">
            Our <span className="text-cyan-400">Features</span>
          </h1>
          <div className="justify-center mx-auto gap-20 w-full p-6 flex flex-row flex-wrap">
            <div className="w-40 h-48 m-5 flex flex-col items-center">
              <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
                <Users style={{ width: "100px", height: "100px", color: "white" }} />
              </div>
              <h2 className="text-xl text-center font-bold  mt-3">Group Sessions</h2>
            </div>
    
            <div className="w-40 h-48 m-5 flex flex-col items-center">
              <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
                <Download style={{ width: "100px", height: "100px", color: "white" }} />
              </div>
              <h2 className="text-xl text-center font-bold  mt-3">Download Content</h2>
            </div>
    
            <div className="w-40 h-48 m-5 flex flex-col items-center">
              <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
                <FontAwesomeIcon icon={faHeadset} style={{ width: "90px", height: "90px", color: "white" }} />
              </div>
              <h2 className="text-xl text-center font-bold  mt-3">24x7 Support</h2>
            </div>
    
            <div className="w-40 h-48 m-5 flex flex-col items-center">
              <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
                <Globe style={{ width: "100px", height: "100px", color: "white" }} />
              </div>
              <h2 className="text-xl text-center font-bold  mt-3">Global Availability</h2>
            </div>
          </div>
        </div>
       
      );
    }
    
    export default Features;