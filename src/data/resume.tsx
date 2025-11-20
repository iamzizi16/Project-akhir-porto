import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Rifky Febrian Iskandar",
  initials: "RF",
  url: "https://rifky-portfolio.vercel.app",
  location: "Ciamis",
  locationLink: "https://www.google.com/maps/place/Ciamis",
  description:
    "Information & Network Systems Student with a focus on Web Development and System Administration. build practical digital projects and enjoy learning new technologies..",
  summary:
    "Hey! I’m Rifky, a student in SIJA (Information Systems, Networks, and Applications). Honestly, I’m not that into coding — I prefer planting and taking care of plants. It’s just more relaxing and fun for me. I also like joining organizations, meeting new people, and working on cool stuff together. Oh, and I can speak a bit of Japanese, just the basic stuff though 😅.",
  
  avatarUrl: "/fabian.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Docker",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "febrianrifky590@gmail.com",
    tel: "+62 823-1020-2411",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamzizi16",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rifkyfbrn07/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/RifkyFe40920714",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/rifkyfbrn07/",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "febrianrifky590@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "FOSJABAR j5 & j6",
      href: "https://sites.google.com/view/fosjabar/",
      badges: [],
      location: "Remote",
      title: "Member",
      logoUrl: "/fosjabar.png",
      start: "September 2023",
      end: "November 2025",
      description:
        "Contributed as an active member in the West Java Student Forum (FOSJABAR), helping organize regional student activities and school collaboration events. Assisted in documentation, coordination, and publication tasks during several programs and meetings. Developed teamwork, leadership, and communication skills through direct involvement in the organization.",
    },
    {
      company: "OSIS SMK Ti Bazma",
      badges: [],
      href: "https://smktibazma.sch.id/",
      location: "Remote",
      title: "Division Head",
      logoUrl: "/osis.png",
      start: "Spetember 2023",
      end: "Februari 2025",
      description:
        "Served as the head of a division in the student council (OSIS), responsible for planning, organizing, and managing school events. Led a small team to execute activities such as student gatherings, competitions, and social programs. Improved leadership, communication, and event-planning skills while maintaining coordination with teachers and fellow committee members.",
    },
    {
      company: "Nvidia",
      href: "https://nvidia.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/nvidia.png",
      start: "January 2020",
      end: "April 2020",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "Splunk",
      href: "https://splunk.com",
      badges: [],
      location: "San Jose, CA",
      title: "Software Engineer",
      logoUrl: "/splunk.svg",
      start: "January 2019",
      end: "April 2019",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    {
      company: "Lime",
      href: "https://li.me/",
      badges: [],
      location: "San Francisco, CA",
      title: "Software Engineer",
      logoUrl: "/lime.svg",
      start: "January 2018",
      end: "April 2018",
      description:
        "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    },
    {
      company: "Mitre Media",
      href: "https://mitremedia.com/",
      badges: [],
      location: "Toronto, ON",
      title: "Software Engineer",
      logoUrl: "/mitremedia.png",
      start: "May 2017",
      end: "August 2017",
      description:
        "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    },
  ],
  education: [
    {
      school: "SMPN 5 Ciamis",
      href: "https://id.wikipedia.org/wiki/SMP_Negeri_5_Ciamis",
      degree: "Junior High School",
      logoUrl: "/Logo_SMPN_5_Ciamis.png",
      start: "2020",
      end: "2021",
    },
    {
      school: "MTsN 15 Ciamis",
      href: "https://www.mtsn15ciamis.sch.id/",
      degree: "Islamic Junior High School — Sports Class",
      logoUrl: "/mts.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "SMK TI BAZMA",
      href: "https://smktibazma.sch.id/",
      degree: "Software & Networking (SIJA)",
      logoUrl: "/bazma.png",
      start: "2023",
      end: "Now",
    },
  ],
  projects: [
    {
      title: "Portofolio",
      href: "https://github.com/iamzizi16/Project-akhir-porto",
      dates: "Nov 2025",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iamzizi16/Project-akhir-porto",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portofolio.png",
      video:
        "",
    },
    {
      title: "Web-esport",
      href: "https://github.com/iamzizi16/Web-esporthttps://magicui.design",
      dates: "August 2024",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "HTML",
        "CSS",
        "javaScript",
        
        
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iamzizi16/Web-esport",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Webmpl.png",
      video: "",
    },
    {
      title: "mini-ecom",
      href: "http://github.com/iamzizi16/mini-ecom",
      dates: "September 2025",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "http://github.com/iamzizi16/mini-ecom",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mini-ecom.png",
      video: "",
    },
    {
      title: "Weather app",
      href: "https://github.com/iamzizi16/cuaca",
      dates: "August 2025",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/iamzizi16/cuaca",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/weather.png",
      video:
        "",
    },
  ],
  
    }as const;
