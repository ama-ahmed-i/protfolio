import { FaMapMarked } from "react-icons/fa";

import PropTypes from "prop-types";

const Card = ({ skillsIcons, skillsLevel, skillsBgHoverRing, skillsName }) => {
  return (
    <div
      className="w-[80%] h-[150px] md:w-[300px] sm:h-[130px] gap-8 flex  flex-col items-center py-5
         rounded-xl hover:-translate-y-2 transition-all eses-in-oute delay-100 bg-slate-800
        duration-300 ease-in-out shadow-xl group"
    >
      <div className="flex w-full justify-around">
        <FaMapMarked className="text-green-800 group-hover:text-green-700 transition-all mr-6 animate-pulse" />
        <h2 className="flex flex-col items-center w-4 h-4 gap-x-2 -ml-14  text-white ">
          <span>{skillsIcons}</span>
          {skillsName}
        </h2>
      </div>
      <div
        className={`${skillsBgHoverRing} p-2 px-4 rounded-full border-[1px] border-green-800
   text-green-900  `}
      >
        {skillsLevel}
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  skillsIcons: PropTypes.any,
  skillsLevel: PropTypes.string,
  skillsBgHoverRing: PropTypes.string,
  skillsName: PropTypes.string,
};
