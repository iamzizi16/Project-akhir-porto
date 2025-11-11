"use client";

import GooeyNav from "@/components/ui/GooeyNav";
import BlurFade from "@/components/magicui/blur-fade";
import TiltedCard from "@/components/TiltedCard";

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Project", href: "/project" },
];

const BLUR_FADE_DELAY = 0.05;

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen space-y-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white">
      {/* ✦ Navbar ✦ */}
      <div
        style={{
          height: "60px",
          position: "relative",
          zIndex: 50,
        }}
      >
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={1}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
      </div>

      {/* ✦ Hero Section ✦ */}
      <section className="relative w-full max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Foto Profil */}
        <div className="flex justify-center md:justify-end">
          <TiltedCard
            imageSrc="/rifky.jpg"
            altText="Rifky Febrian"
            captionText="Rifky Febrian - Web Developer"
            containerHeight="320px"
            containerWidth="320px"
            imageHeight="320px"
            imageWidth="320px"
            rotateAmplitude={10}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={true}
            overlayContent={
              <p className="text-center text-white text-lg font-semibold">
                Rifky Febrian - Developer
              </p>
            }
          />
        </div>

        {/* Deskripsi Diri */}
        <div className="space-y-6 text-center md:text-left">
          <BlurFade delay={BLUR_FADE_DELAY * 1}>
            <h1 className="text-5xl font-bold tracking-tight">
              About <span className="text-[#2563eb]">Me</span>
            </h1>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <p className="text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
              Halo, saya <span className="font-semibold text-[#2563eb]">Rifky Febrian</span>.  
              Saya seorang pengembang web yang suka menggabungkan teknologi dan kreativitas.  
              Fokus saya adalah membuat tampilan yang menarik namun tetap memiliki performa yang optimal.
            </p>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed">
              Saya percaya setiap kode punya jiwa — kalau ditulis dengan cinta, hasilnya bisa berbicara
              lebih dari sekadar tampilan. Itulah kenapa saya selalu mencoba menyeimbangkan antara
              desain, interaksi, dan logika di setiap proyek.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* ✦ Filosofi ✦ */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-3xl font-bold text-center mb-10">
            My <span className="text-[#2563eb]">Philosophy</span>
          </h2>
        </BlurFade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Clean Design",
              desc: "Kesederhanaan bukan berarti kosong, tapi memfokuskan perhatian pada hal yang penting.",
            },
            {
              title: "Functional Art",
              desc: "Saya percaya kode juga bisa jadi bentuk seni, ketika dibuat dengan rasa dan makna.",
            },
            {
              title: "Consistency",
              desc: "Setiap detail kecil punya dampak besar — dari warna, animasi, sampai interaksi pengguna.",
            },
          ].map((item, i) => (
            <BlurFade key={item.title} delay={BLUR_FADE_DELAY * (5 + i)}>
              <div className="p-6 border rounded-2xl dark:border-gray-800 bg-gray-50 dark:bg-[#111] hover:scale-[1.02] transition-all">
                <h3 className="text-xl font-semibold mb-2 text-[#2563eb]">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ✦ Closing ✦ */}
      <section className="text-center pb-20">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <h2 className="text-2xl font-bold mb-4">
            Let's <span className="text-[#2563eb]">Create</span> Together
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Saya selalu terbuka untuk kolaborasi dan ide baru.  
            Hubungi saya untuk berdiskusi, berbagi visi, atau sekadar ngobrol santai.
          </p>
        </BlurFade>
      </section>
    </main>
  );
}
