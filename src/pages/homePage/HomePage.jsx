import "./HomePage.css";
import React from "react";
import SideBar from "./components/SideBar";
import TimeLine from "./components/timeLine/TimeLine";

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage_nav">
        <SideBar />
      </div>
      <div className="homepage_timeline">
        <TimeLine />
      </div>
    </div>
  );
}

export default HomePage;