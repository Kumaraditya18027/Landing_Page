import { BriefcaseBusiness, CloudDownload } from "lucide-react"
import { CarIcon} from "lucide-react"

function Services() {
  return (
    <div className="mt-10 p-5 mx-auto justify-center">
      <h1 className="font-bold text-5xl text-center underline decoration-solid underline-offset-4 text-black">
        Our <span className="text-cyan-500">Services</span>
      </h1>
      <div className="justify-center mx-auto gap-20 w-full p-6 flex flex-row flex-wrap">
        <div className="w-40 h-48 m-5 flex flex-col items-center">
          <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
            <CarIcon style={{ width: "100px", height: "100px", color: "white" }} />
          </div>
          <h2 className="text-xl text-center font-bold text-black mt-3">Car Services</h2>
        </div>

        <div className="w-40 h-48 m-5 flex flex-col items-center">
          <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
            <BriefcaseBusiness style={{ width: "100px", height: "100px", color: "white" }} />
          </div>
          <h2 className="text-xl text-center font-bold text-black mt-3">Finance</h2>
        </div>

        <div className="w-40 h-48 m-5 flex flex-col items-center">
          <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
            <CarIcon style={{ width: "100px", height: "100px", color: "white" }} />
          </div>
          <h2 className="text-xl text-center font-bold text-black mt-3">Rental Car</h2>
        </div>

        <div className="w-40 h-48 m-5 flex flex-col items-center">
          <div className="rounded-full p-7 shadow-md shadow-blue-600 bg-blue-500 bg-gradient-to-r to-blue-300 flex items-center justify-center">
            <CloudDownload style={{ width: "100px", height: "100px", color: "white" }} />
          </div>
          <h2 className="text-xl text-center font-bold text-black mt-3">Cloud Services</h2>
        </div>
      </div>
      </div>
  );
}

export default Services