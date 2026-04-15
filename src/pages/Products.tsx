"use client";

import { motion } from "motion/react";
import { CONTACT_INFO, PRODUCTS } from "../constants";
import WhatsAppLogo from "../components/WhatsAppLogo";

export default function Products() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-900"
          >
            Nos réservoirs d’eau PLASTO disponibles au Cameroun
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            PLASTO CAMEROUN vous propose une gamme complète de réservoirs d’eau adaptés aux
            particuliers, commerces, entreprises, chantiers et activités agricoles. Découvrez nos
            modèles disponibles selon la capacité de stockage recherchée.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-primary px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                    {product.capacity}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{product.name}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed min-h-[80px]">
                  {product.description}
                </p>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=Bonjour, je souhaite commander le ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/10"
                >
                  <WhatsAppLogo className="w-6 h-6" />
                  Commander sur WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[3rem] p-12 md:p-20 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Qualité et Durabilité Garantie</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nos réservoirs d’eau PLASTO au Cameroun sont conçus pour offrir une solution de stockage
            durable, fiable et adaptée à différents usages. Grâce à plusieurs capacités disponibles,
            chaque client peut choisir le modèle correspondant à ses besoins réels. Que vous soyez à
            Douala, Yaoundé ou partout ailleurs au Cameroun, nous assurons une livraison rapide et
            un service de qualité.
          </p>
        </div>
      </div>
    </div>
  );
}
