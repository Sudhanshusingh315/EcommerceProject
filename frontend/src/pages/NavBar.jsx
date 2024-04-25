import hulu from "../assets/huluLogo.svg";
import barCode from "../assets/isbn.png";
import dustBin from "../assets/dustbin.svg";
import recycleBin from "../assets/recycleimage.svg";
export default function NavBar() {
  return (
    <>
      <div className="container  md:my-4 grid-row-2 grid grid-cols-3 md:grid-cols-5  md:gap-x-2">
        <div className="gird col-span-3  md:col-span-2 rounded-xl overflow-hidden md:row-span-3">
          <img src={hulu} alt="/" className="w-[100%] h-[100%] object-cover " />
        </div>
        <div className="bg-offWhite col-span-5 md:col-span-3 md:h-[100%] border-black border-t-2 border-l-2 border-r-2 rounded-tr-lg rounded-tl-lg  px-2">
          <div className="flex justify-between h-[100%]">
            <div className="flex-auto flex justify-between md:justify-center md:items-center font-bold uppercase font-display text-4xl py-4 md:text-5xl text-nowrap">
              snack for cat
            </div>
            <div className="flex items-center gap-2 justify-evenly">
              <div className=" w-8 h-8 md:w-14 md:h-14 ">
                <img
                  src={recycleBin}
                  alt="/"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="md:w-14 md:h-14 w-8 h-8">
                <img
                  src={dustBin}
                  alt="/"
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="md:w-14 md:h-14 w-8 h-8">
                <img
                  src={barCode}
                  alt="."
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black row-span-2 col-span-3 uppercase  flex justify-center md:items-center rounded-bl-lg rounded-br-lg">
          <ul className="flex bg-black w-full text-white justify-around md:justify-center items-center md:gap-2 font-semibold font-display text-xl md:text-2xl font-condensed">
            <li className="hover:bg-offWhite hover:text-black px-2 py-4  hover:underline  hover:decoration-slate-950 ease-in-out duration-300 cursor-pointer">
              Home
            </li>
            <li>.</li>
            <li className="hover:bg-offWhite hover:text-black px-2 py-4 hover:underline  hover:decoration-slate-950 ease-in-out duration-300 cursor-pointer">
              About
            </li>
            <li>.</li>
            <li className="hover:bg-offWhite hover:text-black px-2 py-4 hover:underline  hover:decoration-slate-950 ease-in-out duration-300 cursor-pointer">
              Service
            </li>
            <li>.</li>
            <li className="hover:bg-offWhite hover:text-black px-2 py-4 hover:underline  hover:decoration-slate-950 ease-in-out duration-300 cursor-pointer">
              Product
            </li>
            <li>.</li>
            <li className="hover:bg-offWhite hover:text-black px-2 py-4 hover:underline  hover:decoration-slate-950 ease-in-out duration-300 cursor-pointer">
              Shop
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
