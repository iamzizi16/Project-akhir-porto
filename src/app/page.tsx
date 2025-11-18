"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import ProfileCard from "@/components/MyTiltAvatar";
import GooeyNav from '@/components/ui/GooeyNav'
import SplashCursor from '@/components/SplashCursor'
import RotatingText from '@/components/RotatingText'

const BLUR_FADE_DELAY = 0.04;
const items = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Project", href: "/project" },
];

export default function Page() {
  return (
  
    <main className="flex flex-col min-h-[100dvh] space-y-10">
    <div style={{
  height: '60px',
  position: 'relative',
  
  zIndex: 50,
}}>
<SplashCursor />
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
      <section
  id="hero"
  className="relative w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
>
  <div className="flex-1 space-y-6 text-center md:text-left relative overflow-hidden">
  {/* ✦ Background animasi highlight ✦ */}
  

  {/* ✦ Nama Rifky Febrian ✦ */}
  <h1
    className="relative z-10 text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight 
    text-transparent bg-clip-text
    bg-[length:300%_300%]
    animate-gradientSpin
    dark:drop-shadow-[0_0_20px_rgba(100,180,255,0.4)]
    drop-shadow-[0_0_6px_rgba(0,0,0,0.15)]"
    style={{
      backgroundImage:
        "linear-gradient(270deg, #007bff, #00e0ff, #b66dff, #ff7de9, #007bff)",
    }}
  >
    Hi, I'm{" "}
    <span className="text-transparent bg-clip-text animate-gradientSpin font-extrabold">
      {DATA.name.split(" ")[0]}
    </span>{" "}
    👋
  </h1>

  {/* ✦ Deskripsi ✦ */}
  <p className="text-muted-foreground text-lg max-w-md mx-auto md:mx-0 relative z-10">
    {DATA.description}
  </p>

  {/* ✦ Tombol Aksi ✦ */}
  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 relative z-10">
    <a
      href="/cv.pdf"
      download
      className="px-6 py-3 rounded-full font-semibold bg-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.6)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)] hover:scale-[1.05] transition-all duration-300"
    >
      Download CV
    </a>
    <a
      href="#projects"
      className="px-6 py-3 rounded-full font-semibold border border-[#2563eb] text-[#2563eb] dark:text-[#93c5fd] hover:bg-[#2563eb] hover:text-white transition-all duration-300"
    >
      See My Work
    </a>
  </div>

  {/* ✦ Animasi Gradient ✦ */}
  <style jsx>{`
    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-4px);
      }
    }
    @keyframes gradientSpin {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    .animate-gradientSpin {
      animation: gradientSpin 6s ease-in-out infinite;
    }
  `}</style>
</div>

   
  
<ProfileCard
  name="Rifky Febrian"
  title="Software Engineer"
  handle="Fabian"
  status="Online"
  contactText="Contact Me"
  avatarUrl="./fabian.png"
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={false}
  onContactClick={() => window.location.href = "mailto:rifky@example.com"}
/>

<RotatingText
texts={['KREATIF', 'INOVATIF', 'KEREN', 'PROFESIONAL']}
  mainClassName="px-4 sm:px-6 md:px-8 bg-[#6933FF] text-white font-extrabold uppercase overflow-hidden py-1 sm:py-2 md:py-2 justify-center rounded-xl shadow-[0_0_20px_rgba(105,51,255,0.6)] tracking-wide"
  staggerFrom="last"
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>

</section>


      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}