"use client";

import { getHouseDescription } from "@/services/getHouses";
import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard";
import { HouseDescriptionType } from "./types";
import { MoonLoader } from "react-spinners";

const Houses = () => {
  const [housesData, setHousesData] = useState<HouseDescriptionType[]>();
  const [loading, setLoading] = useState(true);

  const getHouseData = async () => {
    try {
      const data = await getHouseDescription();
      setHousesData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHouseData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 pt-20">
      <MoonLoader color="#36D7B7" loading={loading} speedMultiplier={3} />
      {!loading && housesData?.length
        ? housesData?.map((item) => <HouseCard key={item.id} {...item} />)
        : null}
    </div>
  );
};

export default Houses;
