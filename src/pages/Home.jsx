import React, { Suspense, useEffect, useRef, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import HomeInfo from "../components/HomeInfo";
import Loader from "../components/Loader";
import Bird from "../models/Bird";
import Island from "../models/Island";
import Plane from "../models/Plane";
import Sky from "../models/Sky";
import resume from "../assets/resume/Mohit_Resume.pdf";
import download from "../assets/icons/download.svg";

const Home = () => {
  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenPosition, screenScale, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenPosition, screenScale];
  };

  const [islandPosition, islandScale, islandRotation] =
    adjustIslandForScreenSize();

  const [planePosition, planeScale] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"#000000"}
            intensity={0.5}
          />
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            rotation={islandRotation}
            position={islandPosition}
            scale={islandScale}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundon : soundoff}
          className="w-10 h-10 cursor-pointer object-contain"
          alt="sound"
          onClick={() => setIsPlayingMusic((prev) => !prev)}
        />
      </div>
      <div className="absolute bottom-2 right-2">
        <a
          href={resume}
          className="w-10 h-10 cursor-pointer object-contain"
          alt="sound"
          download={true}
        >
          <img
            src={download}
            alt="Resume"
            className="w-9 h-9 rounded-full cursor-pointer object-contain"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
