import Navbar from "./Components/Navbar";
import Nilesh from "./Components/Home";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/education";
import Contact from "./Components/Contact";
import 'es6-object-assign/auto';
import Project from "./Components/Project";
import Check from "./Components/Check";

// import Background from "./Components/Background";
export default function Home() {
  return (
    <>
    <main className="relative h-full w-full">
    <div  className="h-20 z-10 bg-white sticky top-0"><Navbar/></div>
    <div  className="shadow-md lg:h-[90vh] lg:flex lg:items-center h-fit "><Nilesh/></div>
    <div  className="shadow-md "><About/></div>
    <div  className="shadow-md "><Skill/></div>
    <div  className="shadow-md "><Education/></div>
    <div  className="shadow-md"><Project/></div>
    <div  className="shadow-md"><Contact/></div>
    </main>
    </>
      );

}
