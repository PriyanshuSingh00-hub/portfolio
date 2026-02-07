import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Planet } from "../components/Planet";
import { AnimatedTextLines } from "../components/AnimatedTextLine";

const Hero = () => {
  const contextRef = useRef(null);
  const headerRef = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 853 });

  const aboutText = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`;

  // GSAP animation (your original idea)
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(contextRef.current, {
      y: "50vh",
      duration: 1,
      ease: "circ.out",
    });

    tl.from(
      headerRef.current,
      {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "circ.out",
      },
      "<+0.2"
    );
  });

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen overflow-hidden"
    >
      {/* ===== TEXT CONTENT ===== */}
      <div ref={contextRef} className="relative z-10">
        <div
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div
            ref={headerRef}
            className="flex flex-col justify-center gap-12 pt-16 sm:gap-16"
          >
            {/* Top label */}
            <p className="text-sm font-light tracking-[0.5rem] uppercase px-10 text-black">
              404 No Bugs Found
            </p>

            {/* Name (touching the line) */}
            <div className="relative px-10">
              <h1 className="text-black uppercase banner-text-responsive">
                Priyanshu
              </h1>
              <div className="absolute inset-x-0 bottom-0 border-t-2" />
            </div>

            {/* Description */}
            <div className="px-10 text-black">
              <div className="py-12 sm:py-16 text-end">
                <AnimatedTextLines
                  text={aboutText}
                  className="font-light uppercase value-text-responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PLANET BACKGROUND ===== */}
      <figure className="absolute inset-0 -z-10">
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} />
          </Float>

          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form="circle"
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form="circle"
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form="circle"
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form="circle"
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;