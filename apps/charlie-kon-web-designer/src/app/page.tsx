import { SplineSceneBasic } from "@/components/ui/demo";
import { Card } from "@/components/ui/card";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { GallerySection } from "@/components/ui/gallery-section";
import { PricingSection } from "@/components/ui/pricing-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10">
          <p className="text-sm text-neutral-400">Reed Web Studio</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-bold tracking-tight">
            Make a website like this.
          </h1>
          <p className="mt-2 text-xs text-neutral-500">
            Deployed from <code className="text-neutral-400">apps/charlie-kon-web-designer</code>.
          </p>
          <p className="mt-4 max-w-2xl text-neutral-300">
            Interactive 3D hero section powered by Spline + shadcn/ui + Tailwind.
            Send more 21stdev components and I’ll slot them in.
          </p>
        </div>

        <SplineSceneBasic />

        <section className="mt-14" id="what-you-get">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            What you get
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Same ideas from the old gallery site — mobile-first, high-trust, custom-built,
            fast launch — but aimed at hiring me to build your site.
          </p>

          <div className="mt-6">
            <FeaturesSectionWithHoverEffects />
          </div>
        </section>

        <GallerySection />

        <PricingSection />

        <section className="mt-14" id="contact">
          <Card className="border-white/10 bg-white/5 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Ready to start?
            </h2>
            <p className="mt-3 text-neutral-300">
              Text or email me with what you do, the vibe you want, and your timeline.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
                href="tel:8583055764"
              >
                Call / Text: (858) 305-5764
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
                href="mailto:charlespkon@gmail.com"
              >
                Email: charlespkon@gmail.com
              </a>
            </div>
          </Card>
        </section>
      </main>
    </div>
  );
}
