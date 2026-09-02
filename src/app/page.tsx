"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Shield,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { DATA } from "@/data/resume";

interface ExperienceItem {
  type: "work" | "education";
  title: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
  href?: string;
  location: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export default function Page() {
  const allExperiences: ExperienceItem[] = [
    ...DATA.work.map((item) => ({
      type: "work" as const,
      title: item.company,
      role: item.title,
      period: `${item.start} — ${item.end ?? "Present"}`,
      description: item.description,
      logoUrl: item.logoUrl,
      href: item.href,
      location: item.location,
    })),
    ...DATA.education.map((item) => ({
      type: "education" as const,
      title: item.school,
      role: item.degree,
      period: `${item.start} — ${item.end}`,
      description:
        "Comprehensive technical education focusing on full-stack software development, Linux server administration, computer networking, and cybersecurity practices.",
      logoUrl: item.logoUrl,
      href: item.href,
      location: "Bogor, Indonesia",
    })),
  ];

  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      description: "Building responsive, modern, and accessible user interfaces.",
      skills: [
        { name: "Next.js", level: "Advanced" },
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Proficient" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "HTML5 / CSS3", level: "Expert" },
        { name: "JavaScript (ES6+)", level: "Advanced" },
      ],
    },
    {
      name: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-blue-600" />,
      description: "Designing scalable server architectures, routing, and RESTful APIs.",
      skills: [
        { name: "Laravel (PHP)", level: "Advanced" },
        { name: "PHP", level: "Advanced" },
        { name: "RESTful APIs", level: "Advanced" },
        { name: "Authentication (Sanctum/JWT)", level: "Proficient" },
        { name: "MQTT Protocol", level: "Working Knowledge" },
      ],
    },
    {
      name: "Database Systems",
      icon: <Database className="w-5 h-5 text-blue-600" />,
      description: "Relational database schema modeling, queries, and migrations.",
      skills: [
        { name: "MySQL", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
        { name: "Database Design", level: "Advanced" },
      ],
    },
    {
      name: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-blue-600" />,
      description: "Version control, API debugging, and development workflow.",
      skills: [
        { name: "Git & GitHub", level: "Advanced" },
        { name: "Postman", level: "Advanced" },
        { name: "Linux / Ubuntu", level: "Proficient" },
        { name: "VS Code", level: "Expert" },
        { name: "Vercel Deployment", level: "Proficient" },
      ],
    },
    {
      name: "Networking & Security",
      icon: <Shield className="w-5 h-5 text-blue-600" />,
      description: "Network fundamentals, system hardening, and CTF challenges.",
      skills: [
        { name: "Computer Networking", level: "Proficient" },
        { name: "Cyber Security Fundamentals", level: "Proficient" },
        { name: "CTF (Capture The Flag)", level: "Practitioner" },
        { name: "Linux CLI", level: "Advanced" },
      ],
    },
  ];

  const featuredProject = DATA.projects[0];
  const secondaryProjects = DATA.projects.slice(1);

  const formatProjectDescription = (description: string) =>
    description
      .replace(/\s*\n\s*/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Delicate background pattern */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-subtle-grid opacity-60" />
      <div className="fixed top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-1/3 left-10 w-[450px] h-[450px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 01 — HERO SECTION */}
      <section
        id="hero"
        className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Typography & CTAs */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col items-start"
            >
              {/* Eyebrow Status Badge */}
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Available for Internship & Freelance</span>
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={fadeInUp} className="space-y-3 mb-6">
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] font-semibold text-blue-600">
                  Frontend / Full-Stack Developer
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold tracking-tight text-slate-900 leading-[1.08]">
                  Hi, I&apos;m Rifky.
                  <br />
                  <span className="text-slate-900">
                    I build digital experiences that{" "}
                    <span className="text-blue-600">feel simple.</span>
                  </span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8"
              >
                Saya adalah developer yang fokus membangun web application modern menggunakan{" "}
                <span className="text-slate-900 font-semibold">Next.js</span>,{" "}
                <span className="text-slate-900 font-semibold">Laravel</span>, dan teknologi web modern lainnya untuk menghadirkan antarmuka yang bersih, cepat, dan intuitif.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-all shadow-sm hover:shadow group w-full sm:w-auto"
                >
                  <span>View Selected Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-sm w-full sm:w-auto"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-medium text-sm transition-all w-full sm:w-auto"
                >
                  <span>Download CV</span>
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-5 pt-4 border-t border-slate-100 w-full"
              >
                <span className="text-xs font-medium text-slate-600 uppercase tracking-wider">
                  Connect:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={DATA.contact.social.GitHub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={DATA.contact.social.LinkedIn.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={DATA.contact.social.Instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full text-slate-500 hover:text-pink-600 hover:bg-pink-50 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Editorial Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[340px] sm:max-w-[380px]"
              >
                <motion.div
                  animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-gradient-to-br from-blue-200/70 via-cyan-200/50 to-violet-200/70 blur-2xl -z-10"
                />

                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="relative rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)] aspect-[4/5] group"
                >
                  <motion.div
                    animate={{ scale: [1, 1.08, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src="/guabanget.jpg"
                      alt={DATA.name}
                      fill
                      priority
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent flex items-end p-5"
                  />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
                    <div>
                      <p className="text-sm font-semibold tracking-tight">
                        {DATA.name}
                      </p>
                      <p className="text-xs text-slate-200 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-blue-400" />
                        {DATA.location}, ID
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-medium border border-white/20">
                      SIJA Specialist
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 02 — ABOUT SECTION */}
      <section
        id="about"
        className="py-24 md:py-32 border-t border-slate-100 bg-slate-50/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              01 / ABOUT
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              A little about me.
            </h2>
          </motion.div>

          {/* 2-Column Editorial Grid */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left: Large Editorial Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="border-l-2 border-blue-600 pl-6">
                <blockquote className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-snug">
                  &ldquo;Computer science isn&apos;t just what I study — it&apos;s how I like to solve real-world problems.&rdquo;
                </blockquote>
              </div>

              {/* Metadata Pills */}
              <div className="flex flex-col gap-3 pt-4">
                <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Location</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Based in Indonesia (Ciamis & Bogor)
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                    <Terminal className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Status & Education</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Student Developer at SMK TI BAZMA (SIJA)
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 font-medium">Availability</p>
                    <p className="text-sm font-semibold text-slate-900">
                      Open for Internship, Junior Roles & Freelance
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Short Biography & Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-6 space-y-6 text-slate-600 leading-relaxed text-base"
            >
              <p>
                Saya mendalami jurusan <span className="font-semibold text-slate-900">Sistem Informatika, Jaringan, dan Aplikasi (SIJA)</span> dengan ketertarikan mendalam pada pengembangan web full-stack, arsitektur backend yang rapi, dan keamanan sistem.
              </p>
              <p>
                Fokus utama saya adalah membangun aplikasi web modern menggunakan <span className="font-semibold text-slate-900">Next.js</span> dan <span className="font-semibold text-slate-900">Laravel</span>, mulai dari perancangan skema database relasional di MySQL, pembuatan RESTful API, hingga integrasi protokol komunikasi seperti MQTT untuk perangkat IoT.
              </p>
              <p>
                Selain coding web, saya memiliki dasar yang kuat dalam administrasi sistem Linux, konsep dasar computer networking, serta aktif melatih kemampuan problem-solving melalui kompetisi Capture The Flag (CTF).
              </p>

              {/* Core Pillars / Badges */}
              <div className="pt-4">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Core Focus Areas
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Full-Stack Web Engineering",
                    "RESTful API Development",
                    "Database Modeling",
                    "Linux Administration",
                    "Cyber Security Fundamentals",
                    "Clean UI Architecture",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 03 — EXPERIENCE / JOURNEY SECTION */}
      <section id="experience" className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              02 / JOURNEY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Experience & Education
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl text-base">
              A chronological overview of leadership, regional organizations, and technical education.
            </p>
          </motion.div>

          {/* Minimalist Vertical Timeline */}
          <div className="relative pl-6 md:pl-10 border-l border-blue-200/80 space-y-10">
            {allExperiences.map((exp, idx) => (
              <motion.div
                key={`${exp.title}-${exp.period}-${idx}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600 group-hover:bg-blue-600 group-hover:scale-125 transition-all duration-300" />

                {/* Timeline Content */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.02)] group-hover:border-blue-300 group-hover:shadow-[0_4px_20px_rgba(37,99,235,0.06)] group-hover:translate-x-1.5 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      {exp.logoUrl ? (
                        <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex-shrink-0">
                          <Image
                            src={exp.logoUrl}
                            alt={exp.title}
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {exp.title ? exp.title.charAt(0) : "•"}
                        </div>
                      )}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900">
                          {exp.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-blue-600">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold tracking-tight w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mt-3">
                    {exp.description}
                  </p>

                  {exp.href && exp.href !== "#" && (
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-600">
                        {exp.location}
                      </span>
                      <a
                        href={exp.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700"
                      >
                        <span>Learn more</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — SKILLS / TECH STACK SECTION */}
      <section
        id="skills"
        className="py-24 md:py-32 border-t border-slate-100 bg-slate-50/50"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              03 / CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Skills & Technologies
            </h2>
            <p className="text-slate-600 mt-3 max-w-xl text-base">
              A structured overview of the programming languages, frameworks, databases, and security tools I leverage.
            </p>
          </motion.div>

          {/* Minimalist Bento / Categorized Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md transition-all duration-300 flex flex-col justify-between ${
                  idx === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100">
                      {category.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {category.name}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/70 text-xs font-medium text-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — SELECTED PROJECTS SECTION */}
      <section id="projects" className="py-24 md:py-32 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">
              04 / SELECTED WORK
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
              Selected Work
            </h2>
            <p className="text-slate-600 mt-3 max-w-2xl text-base">
              A few things I&apos;ve built while learning, experimenting, and solving real problems with clean architecture.
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* FEATURED PROJECT 01 (Large Showcase) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative rounded-3xl bg-slate-50/70 border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 p-6 md:p-10"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Project Media Mockup */}
                <div className="lg:col-span-7">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-300">
                    <div className="h-7 bg-slate-800/90 px-4 flex items-center gap-1.5 border-b border-slate-700/60">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[10px] text-slate-300 font-mono ml-2 truncate">
                        {featuredProject.title === "BMPS Bogor" ? "bmps-bogor-zeta.vercel.app" : featuredProject.title}
                      </span>
                    </div>

                    <div className="relative w-full h-[calc(100%-28px)]">
                      <Image
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 600px"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                        01 / FEATURED PROJECT
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-semibold">
                        {featuredProject.title === "BMPS Bogor" ? "Public Platform" : "IoT & Full-Stack"}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {featuredProject.title}
                    </h3>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4 whitespace-pre-line">
                      {formatProjectDescription(featuredProject.description)}
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  {featuredProject.technologies.length > 0 && (
                    <div>
                      <p className="text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                        Technologies
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex items-center gap-3 pt-2 flex-wrap">
                    {featuredProject.links.map((link) => (
                      <a
                        key={link.type}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white font-medium text-xs hover:bg-blue-600 transition-colors shadow-xs group/btn"
                      >
                        {link.type === "Live Website" ? (
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        ) : (
                          <Github className="w-3.5 h-3.5" />
                        )}
                        <span>{link.type}</span>
                        <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* SECONDARY PROJECTS GRID (Alternating Editorial Cards) */}
            <div className="grid md:grid-cols-3 gap-8">
              {secondaryProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                >
                  {/* Card Thumbnail */}
                  <div className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden border-b border-slate-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 shadow-xs border border-white/40">
                      0{idx + 2}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                        <span className="font-medium">{project.dates}</span>
                        <span className="font-semibold text-blue-600">Project</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed mt-3">
                        {formatProjectDescription(project.description)}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded bg-slate-100 text-[11px] font-medium text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {project.links[0] && (
                        <a
                          href={project.links[0].href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                          aria-label="View Project"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 06 — CONTACT SECTION */}
      <section
        id="contact"
        className="py-28 md:py-36 border-t border-slate-100 bg-slate-50/70 relative overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              05 / GET IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="text-blue-600">meaningful together.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
              I&apos;m open to internship opportunities, freelance projects, collaborations, and interesting technical discussions.
            </p>

            {/* Main Primary CTA */}
            <div className="pt-4 flex justify-center">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white font-semibold text-base hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:scale-[1.02] group"
              >
                <Mail className="w-5 h-5" />
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div className="pt-12 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
              <a
                href={`mailto:${DATA.contact.email}`}
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Mail className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">Email Me</p>
                <p className="text-xs font-semibold text-slate-900 truncate mt-0.5">
                  {DATA.contact.email}
                </p>
              </a>

              <a
                href={DATA.contact.social.LinkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                  <Linkedin className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">LinkedIn</p>
                <p className="text-xs font-semibold text-slate-900 truncate mt-0.5">
                  rifkyfbrn07
                </p>
              </a>

              <a
                href={DATA.contact.social.GitHub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:bg-blue-50/30 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center mb-2">
                  <Github className="w-4 h-4" />
                </div>
                <p className="text-xs text-slate-600 font-medium">GitHub</p>
                <p className="text-xs font-semibold text-slate-900 truncate mt-0.5">
                  rifkyfbrn07
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Branding */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                {DATA.initials}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {DATA.name}
                </p>
                <p className="text-xs text-slate-600">
                  Frontend / Full-Stack Developer
                </p>
              </div>
            </div>

            {/* Quick Navigation */}
            <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">
                Experience
              </a>
              <a href="#skills" className="hover:text-blue-600 transition-colors">
                Skills
              </a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">
                Projects
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">
                Contact
              </a>
            </nav>

            {/* Back to top & Copyright */}
            <div className="flex items-center gap-4 text-xs text-slate-600">
              <span>© 2026 Rifky Febrian</span>
              <a
                href="#hero"
                className="hover:text-blue-600 font-semibold transition-colors flex items-center gap-1"
              >
                <span>Back to top</span>
                <span>↑</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
