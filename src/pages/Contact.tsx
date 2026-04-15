"use client";

import { motion } from "motion/react";
import { Phone, Mail, Facebook, MapPin, Clock } from "lucide-react";
import { CONTACT_INFO } from "../constants";
import WhatsAppLogo from "../components/WhatsAppLogo";

export default function Contact() {
  const contactMethods = [
    {
      title: "Téléphone",
      value: `${CONTACT_INFO.phone1} / ${CONTACT_INFO.phone2}`,
      icon: <Phone className="text-primary" size={28} />,
      link: `tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`
    },
    {
      title: "Email",
      value: CONTACT_INFO.email,
      icon: <Mail className="text-primary" size={28} />,
      link: `mailto:${CONTACT_INFO.email}`
    },
    {
      title: "Facebook",
      value: CONTACT_INFO.facebook,
      icon: <Facebook className="text-primary" size={28} />,
      link: "#"
    },
    {
      title: "Localisation",
      value: CONTACT_INFO.location,
      icon: <MapPin className="text-primary" size={28} />,
      link: "https://maps.google.com"
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
            Contactez PLASTO CAMEROUN
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Vous souhaitez commander un réservoir d’eau, obtenir un renseignement ou vérifier la
            disponibilité d’un modèle ? Notre équipe est à votre écoute pour vous répondre
            rapidement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, idx) => (
              <motion.a
                key={idx}
                href={method.link}
                target={method.link.startsWith("http") ? "_blank" : "_self"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {method.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {method.title}
                </h3>
                <p className="text-xl font-bold text-slate-900 break-all">{method.value}</p>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 bg-slate-900 text-white p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Horaires d'ouverture</h3>
                  <p className="text-slate-400">Nous sommes disponibles pour vous servir.</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold">Lundi - Samedi</p>
                <p className="text-primary font-bold">08:00 - 18:00</p>
              </div>
            </motion.div>
          </div>

          <div className="bg-primary rounded-[2rem] p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Prêt à commander ?</h2>
              <p className="text-lg opacity-90 mb-10 leading-relaxed">
                Le moyen le plus rapide de vérifier la disponibilité et de commander est via
                WhatsApp ou par téléphone.
              </p>
            </div>
            <div className="space-y-4">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-primary py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-100 transition-all"
              >
                <WhatsAppLogo className="w-8 h-8" />
                Écrire sur WhatsApp
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone1.replace(/\s/g, "")}`}
                className="w-full bg-primary-dark border-2 border-white/30 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
              >
                <Phone size={24} />
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 h-[400px] bg-slate-200 rounded-[3rem] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-slate-500 flex-col gap-4">
            <MapPin size={48} />
            <p className="text-xl font-bold">Retrouvez-nous au Marché Nkolouloun, Douala</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.14151322194!2d9.713333!3d4.043333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10611289c6545b39%3A0x10b10b10b10b10b1!2sMarch%C3%A9%20Nkololoun%2C%20Douala!5e0!3m2!1sfr!2scm!4v1620000000000!5m2!1sfr!2scm"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
