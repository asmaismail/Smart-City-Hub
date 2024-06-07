import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiHome } from "react-icons/ci";
import { AiOutlineBars } from "react-icons/ai";
import House from '../../Components/House'

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex">
      <div className="border-end h-screen" style={{ width: "256px" }}>
        <div className="mt-[24px] ml-[24px] text-[20px] font-bold">
          Smart City Hub
        </div>
        <div className="list-group list-group-flush">
          <div className="text-[17px] font-bold mt-[24px] p-[0px 16px] ml-[24px]">
            Control Panel
          </div>
          <span className="cursor-pointer d-flex w-auto  mx-2 bg-gray-700 rounded-sm flex-row gap-x-4 list-group-item mt-2  list-group-item-action bg-light ">
            <div>
              <CiHome className="font-bold" size={25} />
            </div>
            <div>
              <a href="#" className="font-bold decoration-transparent text-black">
                Home Lights
              </a>
            </div>
          </span>
          <span className="d-flex flex-row gap-x-4 mt-[16px] cursor-pointer bg-white hover:bg-gray-500 list-group-item list-group-item-action bg-light ">
            <div>
              <AiOutlineBars size={30} />
            </div>
            <div>
              <a href="#" className="font-bold  decoration-transparent text-black">
                Account Settings
              </a>
            </div>
          </span>
        </div>
      </div>
      <House/>
    </div>
  );
};

export default Sidebar;
