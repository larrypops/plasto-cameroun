"use client";

import { motion } from "motion/react";
import { CheckCircle2, Droplets, ShieldCheck, Truck, Users, Phone } from "lucide-react";
import Link from "next/link";
import { CONTACT_INFO } from "../constants";
import WhatsAppLogo from "../components/WhatsAppLogo";

export default function Home() {
  const capacities = [
    "1000 litres",
    "1500 litres",
    "2000 litres",
    "3000 litres",
    "5000 litres",
    "10000 litres"
  ];

  const advantages = [
    {
      title: "Haute Qualité",
      description: "Réservoirs d'eau conçus avec les meilleurs matériaux.",
      icon: <ShieldCheck className="text-primary" size={32} />
    },
    {
      title: "Durabilité",
      description: "Excellente résistance et longue durée de vie adaptée au climat du Cameroun.",
      icon: <Droplets className="text-primary" size={32} />
    },
    {
      title: "Livraison Partout",
      description: "Nous livrons vos réservoirs partout au Cameroun.",
      icon: <Truck className="text-primary" size={32} />
    },
    {
      title: "Vente en Gros & Détail",
      description: "Des solutions pour particuliers et entreprises.",
      icon: <Users className="text-primary" size={32} />
    }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-background.jpg"
            alt="Réservoirs d'eau Plasto Cameroun"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-paper via-paper/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold tracking-wider uppercase mb-6"
            >
              Plasto Cameroun
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-slate-900"
            >
              Réservoirs d’eau de haute qualité au Cameroun
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 mb-10 leading-relaxed"
            >
              PLASTO CAMEROUN vous propose des réservoirs d’eau résistants, durables et adaptés aux
              besoins des particuliers, entreprises, commerces, chantiers et exploitations
              agricoles, avec livraison partout au Cameroun.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
              >
                <WhatsAppLogo className="w-6 h-6" />
                Commander sur WhatsApp
              </a>
              <Link
                href="/produits"
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center"
              >
                Voir nos réservoirs
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/produit-04.jpg"
                alt="Solution de stockage d'eau"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 hidden md:block w-64 bg-primary p-8 rounded-3xl text-white shadow-xl">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-sm font-medium opacity-90 uppercase tracking-wider">
                  Qualité Certifiée
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Une solution fiable pour le stockage d’eau
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Au Cameroun, disposer d’une réserve d’eau fiable est essentiel pour les maisons,
                  les commerces, les entreprises et les sites professionnels.
                </p>
                <p>
                  PLASTO CAMEROUN met à votre disposition des réservoirs d’eau conçus pour offrir
                  une excellente résistance, une longue durée de vie et une capacité adaptée à
                  chaque besoin.
                </p>
                <p className="font-medium text-slate-900">
                  Nos cuves sont idéales pour le stockage d’eau domestique, l’approvisionnement des
                  structures professionnelles et les besoins de grande capacité.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Pourquoi choisir PLASTO CAMEROUN ?</h2>
            <p className="text-lg text-slate-600">
              Nous nous engageons à fournir les meilleures solutions de stockage d'eau sur le
              marché camerounais.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <div className="mb-6">{adv.icon}</div>
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-slate-600 leading-relaxed">{adv.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
              <Droplets size={400} className="translate-x-1/4 -translate-y-1/4" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Nos capacités disponibles</h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Nous proposons plusieurs modèles de réservoirs d’eau pour répondre à tous les
                besoins de stockage :
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {capacities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10"
                  >
                    <CheckCircle2 className="text-primary" size={24} />
                    <span className="font-medium">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-paper">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Un partenaire fiable pour vos besoins en stockage d’eau
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              PLASTO CAMEROUN accompagne ses clients avec des solutions durables et pratiques pour
              le stockage d’eau. Que ce soit pour un usage domestique, commercial ou professionnel,
              nous mettons l’accent sur la qualité des produits, la disponibilité et un service
              rapide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <p className="text-5xl font-bold text-primary mb-2">500+</p>
                <p className="text-slate-600 font-medium uppercase tracking-wider text-sm">
                  Clients Satisfaits
                </p>
              </div>
              <div className="p-6">
                <p className="text-5xl font-bold text-primary mb-2">10+</p>
                <p className="text-slate-600 font-medium uppercase tracking-wider text-sm">
                  Villes Desservies
                </p>
              </div>
              <div className="p-6">
                <p className="text-5xl font-bold text-primary mb-2">100%</p>
                <p className="text-slate-600 font-medium uppercase tracking-wider text-sm">
                  Qualité Garantie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Besoin d’un réservoir d’eau rapidement ?</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Contactez PLASTO CAMEROUN dès aujourd’hui pour obtenir des informations, vérifier la
            disponibilité d’un modèle et commander le réservoir adapté à votre besoin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-3"
            >
              <WhatsAppLogo className="w-8 h-8" />
              Écrire sur WhatsApp
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
              className="bg-primary-dark border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
