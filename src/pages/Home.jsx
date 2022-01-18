import React from "react";
import Discounted from "../component/Discounted";
import Explore from "../component/Explore";
import Featured from "../component/Featured";
import Highlights from "../component/HighLights";
import Landing from "../component/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
      <Explore />
    </>
  );
};

export default Home;
