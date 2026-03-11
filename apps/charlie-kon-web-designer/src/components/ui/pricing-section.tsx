import * as React from "react";
import { Card } from "@/components/ui/card";

export function PricingSection() {
  return (
    <section className="mt-14" id="pricing">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold tracking-widest text-neutral-400">
            PRICING
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
            Clear ranges. Quick quotes.
          </h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Most example sites in the gallery land in the <span className="text-neutral-100 font-medium">$249–$500</span> range.
            If you want the high-end interactive 3D/robot experience, that’s typically <span className="text-neutral-100 font-medium">$500+</span>.
          </p>
        </div>

        <div className="lg:col-span-7">
          <Card className="border-white/10 bg-white/5 p-6 text-white">
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm font-semibold">
                  Gallery builds <span className="text-white/60 font-normal">$249–$500</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Pick a style direction, swap in your copy + images, and launch a clean
                  site that converts.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm font-semibold">
                  Premium interactive <span className="text-white/60 font-normal">$500+</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Motion/3D sections, extra polish, and more custom build time.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5 sm:col-span-2">
                <div className="text-sm font-semibold">
                  Optional updates & support <span className="text-white/60 font-normal">$20–$100/mo</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Hosting help, tweaks, new sections/landing pages, and ongoing improvements.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-neutral-200"
              >
                Ask for a quote
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/5"
              >
                Browse examples
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
