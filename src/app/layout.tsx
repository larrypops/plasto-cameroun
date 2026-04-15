import type { Metadata } from "next";
import type { ReactNode } from "react";
import Layout from "@/src/components/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "PLASTO CAMEROUN",
  description:
    "Réservoirs d'eau de 1000L à 10000L au Cameroun. Qualité, durabilité et livraison rapide."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
