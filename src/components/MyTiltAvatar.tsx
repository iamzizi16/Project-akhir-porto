"use client";

import Tilt from "react-parallax-tilt";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Link from "next/link";

export default function MyTiltAvatar() {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.18}
      scale={1.04}
      transitionSpeed={1800}
      tiltMaxAngleX={12}
      tiltMaxAngleY={12}
      className="cursor-pointer"
    >
      <div className="relative w-[250px] sm:w-[290px] lg:w-[340px] h-[400px] sm:h-[470px] lg:h-[560px]">

        {/* MAIN PORTRAIT */}
        <div className="absolute inset-0 rounded-[20px] overflow-hidden border border-white/15 shadow-xl bg-black/40 backdrop-blur-sm">
          <Avatar className="w-full h-full">
            <AvatarImage
              alt={DATA.name}
              src={DATA.avatarUrl || "/rifky.jpg"}
              className="object-cover w-full h-full"
            />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>

          {/* GLOSSY */}
          <div className="absolute left-0 top-0 w-full h-full pointer-events-none mix-blend-screen opacity-35">
            <div className="absolute -left-14 -top-16 w-[180%] h-[50%] rotate-[22deg] bg-white/35 blur-[50px]" />
          </div>
        </div>

        {/* ROUND ICON */}
        <div className="absolute -top-9 -left-9">
          <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-[3px] border-white/40 shadow-[0_0_25px_rgba(0,170,255,0.55)] backdrop-blur-md">
            <Image
              src="/rifky.jpg"
              alt="avatar small"
              width={200}
              height={200}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* SIGNATURE NAME */}
        <div className="absolute left-6 bottom-16">
          <h3 className="font-[PermanentMarker] text-3xl sm:text-4xl text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.85)]">
            {DATA.name.split(" ")[0]}
          </h3>
        </div>

        {/* GLOW BLUE CONTACT BUTTON */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-4">
          <Link
            href="mailto:febrianrifky590@gmail.com"
            className="px-5 py-2 rounded-xl text-sm sm:text-base font-semibold text-white
            bg-[#0e3aff]/80 shadow-[0_0_12px_#3aaeff]
            hover:bg-[#3aaeff] hover:shadow-[0_0_20px_#3aaeff] transition-all duration-300"
          >
            Contact Me
          </Link>
        </div>

      </div>
    </Tilt>
  );
}
