"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const titleAnimation = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "100 bottom",
  //         end: "center bottom",
  //         toggleActions: "play none none reverse",
  //       },
  //     });

  //     titleAnimation.to(
  //       ".animated-word",
  //       {
  //         opacity: 1,
  //         transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
  //         ease: "power2.inOut",
  //         stagger: 0.02,
  //       },
  //       0,
  //     );
  //   }, containerRef);

  //   return () => ctx.revert(); // Clean up on unmount
  // }, []);

  return (
    <div
      className={cn(
        "special-font flex flex-col gap-1 text-7xl leading-[.8] text-white uppercase md:text-[6rem]",
      )}
    >
      {children}
    </div>
  );
}
