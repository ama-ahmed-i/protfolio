import Card from "../components/Card";

import { FaHtml5} from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  const skillss = [
    {
      names: "HTML",
      icons: <FaHtml5  className="text-red-600 text-xl "/>,
      styless: "bg-green-200 group-hover:bg-green-300",
      levelStady: "Advanced",
    },
    {
      names: "CSS",
      icons: <FaCss3Alt className="text-blue-500 text-xl"/>,
      styless: "bg-yellow-200 group-hover:bg-yellow-300 transition-all eses-in-oute delay-100",
      levelStady: "Intermediate",
    },
    {
      names: "JavaScript",
      icons: <IoLogoJavascript className="text-red-600" />
      ,
      styless: "bg-red-200 group-hover:bg-red-300 ",
      levelStady: "beginner",
    },
    {
      names: "Taillwindcss",
      icons: <RiTailwindCssFill className="text-sky-500 text-2xl"/>,
      styless: "bg-yellow-200 group-hover:bg-yellow-300 ",
      levelStady: "Intermediate",
    },
    {
      names: "React.Js",
      icons: <FaReact className="text-sky-600 text-2xl animate-spin"/>,
      styless: "bg-red-200 group-hover:bg-red-300 ",
      levelStady: "beginner",
    },
    {
      names: "Git&github",
      icons: <FaGithub className="text-2xl"/>,
      styless: "bg-yellow-200 group-hover:bg-yellow-300 ",
      levelStady: "Intermediate",
    },
    
    

  ];

  const skillsList = skillss.map((skill) => {
    return (
      <>
        <Card
          key={skill.names}
          skillsIcons={skill.icons}
          skillsName={skill.names}
          skillsLevel={skill.levelStady}
          skillsBgHoverRing={skill.styless}
        />
      </>
    );
  });
  return (
    <main id="skills" className="w-full mx-auto flex flex-col justify-center items-center h-auto md:h-screen py-10 bg-white">
      <h1 className="text-3xl font-bold text-slate-800 my-8">Skills</h1>
      <div className="flex flex-wrap w-full md:max-w-6xl justify-center mx-auto gap-6">
        
        {skillsList}
      </div>
      
    </main>
  );
};

export default Skills;
