"use client";

import { motion } from "motion/react";
import { CheckCircle2, Target, Heart, Shield, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Qualité",
      description: "Nous sélectionnons des produits conçus pour durer.",
      icon: <Award className="text-primary" size={28} />
    },
    {
      title: "Fiabilité",
      description: "Nous proposons des solutions pratiques pour sécuriser le stockage d’eau.",
      icon: <Shield className="text-primary" size={28} />
    },
    {
      title: "Disponibilité",
      description: "Nous mettons en avant plusieurs capacités pour répondre à différents besoins.",
      icon: <Target className="text-primary" size={28} />
    },
    {
      title: "Service client",
      description: "Nous accompagnons chaque client avec écoute et réactivité.",
      icon: <Heart className="text-primary" size={28} />
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-900"
          >
            À propos de PLASTO CAMEROUN
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8 text-xl text-slate-600 leading-relaxed">
            <p>
              PLASTO CAMEROUN est spécialisé dans la distribution de réservoirs d’eau de qualité au
              Cameroun. Nous mettons à la disposition de nos clients des solutions fiables de
              stockage d’eau, adaptées aussi bien aux particuliers qu’aux professionnels.
            </p>
            <p>
              Notre objectif est de proposer des équipements durables, performants et adaptés aux
              besoins du marché local. Grâce à notre gamme de capacités allant de 1000L à 10000L,
              nous répondons à des besoins variés avec un service orienté satisfaction client.
            </p>
            <div className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold text-slate-900">Expertise Locale</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold text-slate-900">Qualité Supérieure</span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold text-slate-900">Service Réactif</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="/images/produit-03.jpg"
                alt="Équipe Plasto Cameroun"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent rounded-full hidden sm:flex items-center justify-center text-white text-center p-4 rotate-12 shadow-xl">
              <span className="font-bold text-lg leading-tight">Leader du Stockage d'Eau</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Nos Valeurs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Ce qui nous guide au quotidien pour vous offrir le meilleur service possible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
