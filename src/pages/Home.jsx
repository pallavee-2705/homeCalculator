import React, { useState } from 'react';
import { home_bg, truck, sun, hotairballoon } from '../assets';
import Cloud from '../components/Cloud';
import '../styles/truckAnimation.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isTruckMoving, setIsTruckMoving] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative">
      {/* clouds */}
      <div className="absolute top-10 left-24 w-36 h-20 -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[120px] right-[24px] w-24 h-12 -z-[20]">
        <Cloud />
      </div>
      <div className="absolute top-[320px] left-20 w-24 h-12">
        <Cloud />
      </div>
      <img src={sun} alt="sun" className="absolute -top-20 right-20 -z-[20]"/>
      <img src={hotairballoon} alt="hotairballoon" className="absolute top-[260px] right-20"/>
      <div className="flex justify-center mt-24">
        {/* main heading div */}
        <div className="w-1/2 flex flex-col justify-center items-center gap-6">
          <h1 className="text-xl">בוא נבדוק מה היא</h1>
          <h2 className="text-3xl font-bold">עלות ההובלה שלך</h2>
          <p>
            מתכננים לעבור דירה? מעולה! אבל לפני שתתחילו לארוז, בוא נבדוק כמה זה באמת תעלה לכם ההובלה. עם המחשבון
            הקליל (אבל מדויק!) שלנו, תוכל להגיע מהר מאוד להערכת עלות ההובלה. בוא נתחיל!
          </p>
          <button
            className="relative overflow-hidden flex items-center text-white gap-4"
            onMouseEnter={() => setIsTruckMoving(false)}
            onMouseLeave={() => setIsTruckMoving(true)}
            onClick={() => navigate('/baseline')}
          >
            <p>hello</p>
            <img src={truck} alt="Truck" className={`truck ${isTruckMoving ? 'animate-truck' : ''}`} />
            <p>hello</p>
          </button>
        </div>
      </div>
      <img src={home_bg} alt="home_bg" className="w-screen mt-10 -z-[30]" />
    </div>
  );
};

export default Home;