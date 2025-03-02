import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Easy GPU | Dépannage et Montage PC Gamer en Loire-Atlantique",
  description: "Expert en dépannage informatique, montage PC gamer et personnalisation sur mesure à Derval (44590). Contactez Easy GPU pour tous vos projets informatiques.",
  keywords: "montage PC gamer, dépannage informatique, personnalisation PC, Derval, Loire-Atlantique, PC sur mesure, assistance informatique, composants gaming",
  authors: [{ name: "Easy GPU" }],
  creator: "Easy GPU",
  publisher: "Easy GPU",
  robots: "index, follow",
  openGraph: {
    title: "Easy GPU | Expert en Montage PC Gamer et Dépannage Informatique",
    description: "Votre partenaire pour le dépannage et le montage de PC gamer sur mesure à Derval (44590). Services professionnels et personnalisés.",
    url: "https://easygpu.fr",
    siteName: "Easy GPU",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Easy GPU",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy GPU | Dépannage et Montage PC Gamer",
    description: "Services professionnels de dépannage informatique et montage PC gamer sur mesure à Derval.",
    images: ["/logo.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0077b6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
