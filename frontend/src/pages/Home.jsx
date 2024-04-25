import handFood from "../assets/handFood.png";
import mainHero from "../assets/mainCat.jpg";

export default function Home() {
  return (
    <div className="container bg-offWhite relative overflow-hidden sectionHeight  ">
      <div className="w-32 absolute left-4">
        <img src={handFood} alt="/" />
      </div>
      <div className="absolute w-20 h-80 left-32 mt-6 text-nowrap md:mt-8 z-10 uppercase font-display  text-4xl sm:text-5xl md:text-6xl px-4">
        <div className="text-primary-blue">High</div>
        <div className="text-primary-blue">Quality</div>
        <div>Real</div>
        <div>Meat</div>
      </div>
      <div className="w-[80%] absolute -right-20  sm:-right-20  md:-right-16 rounded-l-full  overflow-hidden mt-4">
        <img
          src={mainHero}
          alt="/"
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    </div>
  );
}
