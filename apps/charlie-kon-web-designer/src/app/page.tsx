import { SplineSceneBasic } from "@/components/ui/demo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm text-neutral-400">Charlie Kon — Web Designer</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Make a website like this.
          </h1>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Interactive 3D hero section powered by Spline + shadcn/ui + Tailwind.
            Send me the rest of the 21stdev components you want and I’ll slot them in.
          </p>
        </div>

        <SplineSceneBasic />
      </main>
    </div>
  );
}
