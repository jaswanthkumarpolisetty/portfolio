import {HERO_CONTENT} from "../constants/index.js";
import Profilepic from "../assets/kevinRushProfile.jpg"
const Hero = () => {
    return (
        <div className="boarder-b border-neutral-900 pb-4 lg:mb-start">
            <div className="flex flex-wrap">
                <div className=" w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-6xl text-center font-thin tracking-tight lg:mt-16 lg:text-start lg:text-7xl">Jaswanth Polisetty</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center">
                        <img src={Profilepic}  alt="Profilepic"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;