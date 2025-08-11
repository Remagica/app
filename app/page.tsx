'use client';
import Galaxy from '@/components/ui/galaxy';

export default function Home() {
  return (
    <main className="relative h-screen w-full bg-black select-none">
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={500}
      />
      <section className="font-grotesk pointer-events-none absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center select-none">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0px_0px_8px_rgba(255,255,255,0.4)] md:text-7xl">
          Remagica
        </h1>
        <p className="text-center text-xl font-medium text-white md:text-2xl">Coming soon.</p>
      </section>
    </main>
  );
}
