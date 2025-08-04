import { Leva } from 'leva';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Heart from '../components/Heart.jsx';
import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import AnimeGirl from '../components/AnimeGirl.jsx';

import Button from '../components/Button.jsx';
import { calculateSizes } from '../constants/index.js';
import CanvasLoader from '../components/CanvasLoader.jsx';
import HeroCamera from '../components/HeroCamera.jsx';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);
  const animeRef = useRef();

  return (
    <>
      <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Daniel <span className="waving-hand">👋</span>
          </p>
        </div>
        <div className="hero_tag text-gray_gradient">
          <div className="text-row">
            <span className="paw-emoji text-white">🐾</span>
            <span className="typing-text text-gray-400">Frontend Developer</span>
          </div>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Canvas className="w-full h-full">
            <PerspectiveCamera makeDefault position={[0, 0, 12]} />
            <Suspense fallback={<CanvasLoader />}>
              <AnimeGirl targetRef={animeRef} scale={sizes.AnimeGirl} position={sizes.animeGirlPosition} />
              <HeroCamera targetRef={animeRef} />
              <ambientLight intensity={0.2} />
              <directionalLight position={[1, 1, 1]} intensity={0.3} color={0xebf0f0} />
              <group>
                <Heart scale={[2, 2, 2]} position={sizes.HeartPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube scale={0.6} position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
            </Suspense>
          </Canvas>
        </div>

        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
          <a href="#about" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </a>
        </div>
        <Leva collapsed={true} />
      </section>
    </>
  );
};

export default Hero;
