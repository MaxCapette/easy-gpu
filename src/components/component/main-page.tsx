/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { Button } from "@/components/ui/button"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import ContactPage from "../contact/contact"
import { Wave } from "../ui/wave/wave"
import { GooeyButton } from "../ui/gooeyButton";
import "../ui/gooeyButton.scss";
import Head from 'next/head';

export function MainPage() {
  return (
    <div className="flex flex-col min-h-screen ">
      {/* Schema.org structured data for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            'name': 'Easy GPU',
            'description': 'Dépannage informatique et montage de PC gamer sur mesure',
            'url': 'https://easygpu.fr',
            'telephone': '07 86 10 94 59',
            'email': 'contact@easygpu.fr',
            'address': {
              '@type': 'PostalAddress',
              'addressLocality': 'Derval',
              'postalCode': '44590',
              'addressCountry': 'FR'
            },
            'geo': {
              '@type': 'GeoCoordinates',
              'latitude': '47.6917',
              'longitude': '-1.6682'
            },
            'openingHours': 'Mo-Fr 09:00-18:00',
            'image': '/logo.png',
            'priceRange': '€€',
            'servesCuisine': 'Dépannage informatique, Montage PC gamer, Personnalisation',
          })
        }}
      />
      
      <header className="bg-primary/80 text-primary-foreground py-4 px-6 sticky top-0 z-50  backdrop-blur flex items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white  text-lg font-bold"
          prefetch={false}
          aria-label="Accueil Easy GPU"
        >
         <img src="/logo.png" width="40" height="40" alt="Logo Easy GPU - Service informatique à Derval" />
          <span>Easy GPU</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-white " aria-label="Navigation principale">
          <Link href="/" className="hover:underline" prefetch={false}>
            Accueil
          </Link>
          <Link href="#services" className="hover:underline" prefetch={false}>
            Services
          </Link>
          <Link href="#gallery" className="hover:underline" prefetch={false}>
            Galerie
          </Link>
          <Link href="#contact" className="hover:underline " prefetch={false}>
            Contact
          </Link>
          <Link href="#faq" className="hover:underline" prefetch={false}>
            FAQ
          </Link>
        </nav>
        <Sheet>
            <SheetTrigger asChild>
              <Button variant="default" className="md:hidden" aria-label="Menu">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Menu de navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-full max-w-xs  p-6 backgroundCustom"
              side="right"
            >
              <div className="flex flex-col gap-6">
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#services"
                  >
                    Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#gallery"
                  >
                    Galerie
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#contact"
                  >
                    Contact
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="font-medium hover:text-gray-900 "
                    href="#faq"
                  >
                    FAQ
                  </Link>
                </SheetClose>
               
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gradient-to-r from-[#0072C6] to-[#00A0E3]  py-16 px-6 md:px-12 text-white ">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold">
              Votre partenaire pour le dépannage et le montage de PC gamer
            </h1>
            <p className="text-lg md:text-xl">
              Easy GPU vous accompagne dans tous vos projets informatiques, du dépannage à la personnalisation de votre
              PC gamer.
            </p>
            
            <div className="flex justify-center gap-4">

           <Link href="#contact" prefetch={false}>
              <Button id="gooey-button" className="hover:scale-105 " aria-label="Contactez-nous pour vos projets informatiques">
                Contactez-nous
                <span className="bubbles">
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
      <span className="bubble"></span>
    </span>
              </Button>
            </Link>
            </div>
          </div>
        </section>
        <section>
          <Wave />
        </section>
        <section id="services" className="bg-gray-100 py-16 scroll-mt-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-up flex justify-center">Nos services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in-up  hover:scale-105 transform transition-all duration-300 ">
                <CpuIcon className="h-12 w-12 text-[#0077b6] mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">Dépannage informatique</h3>
                <p className="text-gray-700 mb-4">
                  Nous résolvons tous vos problèmes techniques, de la réparation de votre ordinateur à la mise à jour de
                  vos logiciels.
                </p>
                <Link href="#contact" prefetch={false}>
                <Button variant="ghost" size="sm">
                  En savoir plus
                </Button>
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in-up  hover:scale-105 transform transition-all duration-300 ">
                <GamepadIcon className="h-12 w-12 text-[#0077b6] mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">Montage de PC gamer</h3>
                <p className="text-gray-700 mb-4">
                  Nous construisons pour vous le PC gamer de vos rêves, avec les meilleures composants pour une
                  expérience de jeu exceptionnelle.
                </p>
                <Link href="#contact" prefetch={false}>
                <Button variant="ghost" size="sm">
                  En savoir plus
                </Button>
                </Link>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 animate-fade-in-up  hover:scale-105 transform transition-all duration-300 ">
                <HeadphonesIcon className="h-12 w-12 text-[#0077b6] mb-4" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-2">Personnalisation</h3>
                <p className="text-gray-700 mb-4">
                  Nous personnalisons votre PC avec des composants haut de gamme et des designs uniques pour qu&apos;il soit
                  à votre image.
                </p>
                <Link href="#contact" prefetch={false}>
                <Button variant="ghost" size="sm">
                  En savoir plus
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        <section
          id="gallery"
          className="py-16 px-6 md:px-12 bg-gradient-to-r from-[#0072C6] to-[#00A0E3]  text-white scroll-mt-12 "
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold">Nos réalisations</h2>
            <p className="text-lg md:text-xl">Découvrez quelques-uns de nos plus beaux PC gamer personnalisés.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img
                src="/_1424687a-d024-45d2-bded-85d1efa982fc.jpeg"
                width={400}
                height={300}
                alt="PC gamer personnalisé avec éclairage RGB - Réalisation Easy GPU"
                className="rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                loading="lazy"
              />
              <img
                src="/_d7474125-fdf7-4c09-929c-eb09304ba3eb.jpeg"
                width={400}
                height={300}
                alt="Setup gaming complet avec PC sur mesure - Réalisation Easy GPU"
                className="rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                loading="lazy"
              />
              <img
                src="/_ae03acc5-5825-4f2d-98d0-a0c1569f746b.jpeg"
                width={400}
                height={300}
                alt="Montage PC gamer haut de gamme avec refroidissement liquide - Réalisation Easy GPU"
                className="rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="bg-gray-100 py-16 scroll-mt-12">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 animate-fade-in-up flex justify-center">Contactez-nous</h2>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
              <div className="animate-fade-in-left">
              <ContactPage />
              </div>
              <div className="animate-fade-in-right">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-2xl font-bold mb-4">Nos coordonnées</h3>
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="h-6 w-6 text-[#0077b6] mr-2" aria-hidden="true" />
                    <span>44590 Derval</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <PhoneIcon className="h-6 w-6 text-[#0077b6] mr-2" aria-hidden="true" />
                    <span>07 86 10 94 59</span>
                  </div>
                  <div className="flex items-center">
                    <MailIcon className="h-6 w-6 text-[#0077b6] mr-2" aria-hidden="true" />
                    <span>contact@easygpu.fr</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="faq" className="py-16 px-6 md:px-12  bg-gradient-to-r from-[#0072C6] to-[#00A0E3] scroll-mt-12">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
            <p className="text-lg md:text-xl text-muted ">
              Vous avez des questions ? Consultez nos réponses les plus fréquentes.
            </p>
            <Accordion type="single" collapsible>
              <AccordionItem value="question1">
                <AccordionTrigger className="text-lg font-bold">
                  Combien de temps prend le montage d&apos;un PC gamer ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-popover ">
                    Le temps de montage d&apos;un PC gamer dépend de la complexité de la configuration. En général, il faut
                    compter entre 2 et 4 heures pour un montage complet avec installation du système d&apos;exploitation et
                    des pilotes.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question2">
                <AccordionTrigger className="text-lg font-bold">
                  Quels sont les avantages de faire appel à Easy GPU ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-popover ">
                    En faisant appel à Easy GPU, vous bénéficiez de l&apos;expertise de nos techniciens pour le montage de
                    votre PC gamer, ainsi que d&apos;un service de dépannage rapide et efficace. Nous vous garantissons
                    également une personnalisation sur-mesure de votre configuration.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="question3">
                <AccordionTrigger className="text-lg font-bold">
                  Quels sont les moyens de paiement acceptés ?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-popover ">
                    Nous acceptons les paiements par carte bancaire, virement bancaire et chèque. Un acompte peut être
                    demandé pour certaines prestations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="bg-primary/80   py-6 px-6 md:px-12 text-popover ">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CpuIcon className="w-6 h-6" aria-hidden="true" />
            <span>Easy GPU</span>
          </div>
          <p className="text-sm">&copy; {new Date().getFullYear()} Easy GPU. Tous droits réservés.</p>
        </div>
      </footer>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="hidden">
    <defs>
      <filter id="gooey">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
      </filter>
    </defs>
  </svg>
    </div>
  )
}







function CpuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function GamepadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  )
}


function HeadphonesIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}