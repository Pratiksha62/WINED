import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Where Time 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
               {" "} 
               Becomes Taste
             </span> 
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Small-batch wines shaped by exceptional vineyards
        </p>
        <div className="flex justigy-center my-10">
         <a 
         href="#" 
        className="py-3 px-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">Explore Wines!
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
            Our Story
        </a>
        </div>
    </div>
  );
};

export default HeroSection
