import type { Metadata } from "next";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-8f1e9200.vercel.app"),
  title: {
    default: "Phycomania ? Solutions Naturelles ? base d'Algues",
    template: "%s ? Phycomania"
  },
  description:
    "Phycomania con?oit des solutions naturelles ? base de microalgues pour le bien-?tre, la nutrition et la plan?te.",
  keywords: [
    "Phycomania",
    "algues",
    "microalgues",
    "spiruline",
    "bien-?tre",
    "nutrition",
    "durable"
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://agentic-8f1e9200.vercel.app",
    siteName: "Phycomania",
    title: "Phycomania ? Solutions Naturelles ? base d'Algues",
    description:
      "Des produits innovants ? base de microalgues pour un futur plus sain.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phycomania ? Solutions Naturelles ? base d'Algues",
    description:
      "Des produits innovants ? base de microalgues pour un futur plus sain.",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={font.className}>{children}</body>
    </html>
  );
}
