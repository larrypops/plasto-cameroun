"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Facebook, MapPin, Menu, X } from "lucide-react";
import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_INFO } from "../constants";
import WhatsAppLogo from "./WhatsAppLogo";

export default function Layout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Produits", path: "/produits" },
    { name: "À propos", path: "/a-propos" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Logo Plasto Cameroun"
              className="w-10 h-10 rounded-lg object-cover"
              loading="eager"
            />
            <span className="font-serif text-2xl font-bold tracking-tight text-primary">
              PLASTO <span className="text-slate-800">CAMEROUN</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === link.path ? "text-primary" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Commander
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-2xl font-serif font-medium ${
                    pathname === link.path ? "text-primary" : "text-slate-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-4 rounded-xl text-lg font-semibold mt-4"
              >
                Commander sur WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">{children}</main>

      <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-6">
                <img
                  src="/images/logo.jpg"
                  alt="Logo Plasto Cameroun"
                  className="w-8 h-8 rounded object-cover"
                  loading="lazy"
                />
                <span className="font-serif text-xl font-bold text-white">PLASTO CAMEROUN</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6">
                Solutions durables et fiables pour le stockage d'eau au Cameroun. Qualité supérieure
                de 1000L à 10000L.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-4 text-sm">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg font-semibold mb-6">Produits</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <Link href="/produits" className="hover:text-primary transition-colors">
                    Réservoir 1000L
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="hover:text-primary transition-colors">
                    Réservoir 2000L
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="hover:text-primary transition-colors">
                    Réservoir 5000L
                  </Link>
                </li>
                <li>
                  <Link href="/produits" className="hover:text-primary transition-colors">
                    Réservoir 10000L
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>
                    {CONTACT_INFO.phone1} / {CONTACT_INFO.phone2}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span className="break-all">{CONTACT_INFO.email}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span>{CONTACT_INFO.location}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} PLASTO CAMEROUN. Tous droits réservés.</p>
            <p>Design & SEO Local Cameroun</p>
          </div>
        </div>
      </footer>

      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center w-16 h-16"
        aria-label="Contactez-nous sur WhatsApp"
      >
        <WhatsAppLogo className="w-10 h-10" />
      </a>
    </div>
  );
}
