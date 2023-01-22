import React from "react";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div className="w-72 p-4 gap-2 flex flex-col justify-center items-center 
    rounded-xl border-2 relative shadow-lg hover:scale-105 transition duration-300 hover:shadow-xl">
      <img src={meal.strMealThumb} className="w-72 rounded-xl" alt=""/>
      <h3>{meal.strMeal.substring(0,25)}</h3>
      <Link to={`/detail/${meal.idMeal}`}>
        <button type="button" className="text-white bg-orange-500 hover:bg-orange-700 focus:outline-none 
          focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">
          View
        </button>
      </Link>
    </div>
  );
};

export default Card;
