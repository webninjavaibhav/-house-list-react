import React from "react";
import { HouseDescriptionType } from "../types";
import { isValidCssColor } from "@/utils";

const HouseDescriptionCard = (props: HouseDescriptionType) => {
  const { animal, name, founder, houseColours } = props;
  const colors = houseColours?.split("and").map((color) => color.trim()) || [];
  const [gradientStart, gradientEnd] = colors;
  const isValidColors = colors.every(isValidCssColor);

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`,
  };

  return (
    <div className="flex flex-col gap-2 bg-white text-black w-[350px] rounded-md p-4 border shadow-md globalFont">
      <div className="flex justify-between">
        <strong className="text-lg">{name}</strong>
        <p className="text-sm">{animal}</p>
      </div>
      {isValidColors ? (
        <div className={`w-full h-4 rounded-md`} style={gradientStyle}></div>
      ) : (
        <div className="bg-gradient-to-r from-white via-gray-400 to-black w-full h-4 rounded-md"></div>
      )}
      <div className="flex gap-1">
        <p className="text-sm">Founder:</p>
        <strong className="text-sm">{founder}</strong>
      </div>
    </div>
  );
};

export default HouseDescriptionCard;
