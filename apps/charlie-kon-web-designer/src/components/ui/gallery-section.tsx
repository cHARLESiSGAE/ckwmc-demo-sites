import * as React from "react";
import { Card } from "@/components/ui/card";

type GalleryItem = {
  title: string;
  subtitle: string;
  tags: string[];
  href: string;
  image: string;
  priceLabel: string;
  badge?: string;
};

const items: GalleryItem[] = [
  {
    title: "Signature Luxury",
    subtitle: "High-end, editorial presentation",
    tags: ["Luxury", "Editorial", "High-trust"],
    href: "/demo/luxury-template/",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
    badge: "Popular",
  },
  {
    title: "Coastal Modern",
    subtitle: "Bright, airy, calm",
    tags: ["Coastal", "Modern", "Bright"],
    href: "/demo/coastal-modern/",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Minimal Prestige",
    subtitle: "Whitespace + premium typography",
    tags: ["Minimal", "Premium", "Clean"],
    href: "/demo/minimal-prestige/",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Brokerage Pro",
    subtitle: "Team-ready credibility sections",
    tags: ["Team", "Brokerage", "Credibility"],
    href: "/demo/brokerage-pro/",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Neighborhood Expert",
    subtitle: "Local guides + market pages",
    tags: ["Local", "Guides", "SEO-ready"],
    href: "/demo/neighborhood-expert/",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Urban Edge",
    subtitle: "Bold grid for city markets",
    tags: ["Urban", "Bold", "Modern"],
    href: "/demo/urban-edge/",
    image:
      "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Editorial Living",
    subtitle: "Magazine-style lifestyle",
    tags: ["Editorial", "Lifestyle", "Story"],
    href: "/demo/editorial-living/",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Lead Conversion",
    subtitle: "CTA-first, fast inquiry flow",
    tags: ["Conversion", "CTA", "Fast"],
    href: "/demo/lead-conversion/",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Classic Showcase",
    subtitle: "Timeless, familiar, polished",
    tags: ["Classic", "Trust", "Simple"],
    href: "/demo/classic-showcase/",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$249–$500",
  },
  {
    title: "Interactive 3D (Robot Site)",
    subtitle: "Spline / 3D / motion-heavy hero",
    tags: ["3D", "Spline", "High-impact"],
    href: "#top",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1600&q=80",
    priceLabel: "$500+",
    badge: "Premium",
  },
];

export function GallerySection() {
  return (
    <section className="mt-14" id="gallery">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Example sites
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-300">
            Pick a direction you like. Most of these are <span className="text-neutral-100 font-medium">$249–$500</span>.
            The 3D/robot-style builds are <span className="text-neutral-100 font-medium">$500+</span>.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card
            key={item.title}
            className="overflow-hidden border-white/10 bg-white/5 text-white"
          >
            <div className="relative">
              <img
                className="h-52 w-full object-cover"
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {item.title}
                    </div>
                    <div className="text-white/80 text-xs">{item.subtitle}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {item.badge ? (
                      <span className="text-xs font-semibold text-blue-100 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    ) : null}
                    <span className="text-xs font-semibold text-emerald-100 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full">
                      {item.priceLabel}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="flex flex-wrap gap-2 text-xs">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex gap-3">
                <a
                  href={item.href}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-neutral-200"
                >
                  Preview
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white hover:bg-white/5"
                >
                  Use this style
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
