// src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  name: string;
  subtitle: string;
  description: string;
  avatarSrc?: string; // e.g. "/hero-art.png"
};

export default function Hero({ name, subtitle, description, avatarSrc = "/hero-art.png" }: Props) {
  return (
    <section className="px-6 md:px-16 lg:px-28 py-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* LEFT: text */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900">
            {name}
          </h1>

          <p className="mt-3 text-lg text-slate-700 max-w-xl">
            <span className="font-medium text-sky-700">{subtitle}</span>
            <br />
            <span className="mt-2 block text-slate-600">{description}</span>
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/cv.pdf" download className="inline-block">
              <button className="bg-slate-900 text-white px-5 py-2 rounded-md shadow-md hover:shadow-lg transition">
                Download CV
              </button>
            </a>

            <Link href="#projects" className="inline-block">
              <button className="border border-slate-900 text-slate-900 px-5 py-2 rounded-md bg-white hover:bg-slate-50 transition">
                See My Work
              </button>
            </Link>
          </div>

          {/* small badges / why choose me */}
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-800">Web Dev</span>
            <span className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-800">Networking</span>
            <span className="text-xs px-3 py-1 rounded-md bg-slate-100 text-slate-800">System Admin</span>
          </div>
        </motion.div>

        {/* RIGHT: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] sm:w-[360px] md:w-[420px] lg:w-[520px] rounded-2xl shadow-2xl ring-1 ring-slate-200 overflow-hidden bg-gradient-to-tr from-pink-50 via-purple-50 to-indigo-50">
            <Image
              src={avatarSrc}
              alt="Hero art"
              width={1200}
              height={1200}
              className="object-cover w-full h-full"
              priority
            />
            {/* subtle overlay */}
            <div className="absolute -bottom-4 left-6 right-6 p-3 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-slate-200" />
                <div>
                  <div className="text-sm font-medium text-slate-700">@rifky</div>
                  <div className="text-xs text-green-500">Online</div>
                </div>
              </div>
              <button className="text-sm bg-slate-900 text-white px-3 py-1 rounded-md">Contact Me</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
