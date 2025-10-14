"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Menu, X, MapPin, Users, Heart, Leaf, Mountain, Droplets, BookOpen, Compass } from "lucide-react"
import Image from "next/image"

export default function AsogranjaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const routes = [
    {
      title: "Ruta de la Peregrinación",
      description: "Un recorrido espiritual que conecta tradición y fe campesina con paisajes naturales únicos.",
      icon: Compass,
      image: "/colombian-rural-pilgrimage-path-mountains.jpg",
      color: "from-emerald-500/20 to-green-600/20",
    },
    {
      title: "Corredor Ancestral",
      description: "Descubre los caminos que nuestros ancestros recorrieron, llenos de historia y sabiduría.",
      icon: Mountain,
      image: "/ancestral-colombian-mountain-trail-heritage.jpg",
      color: "from-amber-500/20 to-yellow-600/20",
    },
    {
      title: "Saberes Tradicionales",
      description: "Aprende técnicas agrícolas ancestrales, gastronomía típica y artesanía campesina.",
      icon: BookOpen,
      image: "/traditional-colombian-farming-crafts-rural.jpg",
      color: "from-lime-500/20 to-green-500/20",
    },
    {
      title: "Ruta del Agua",
      description: "Explora fuentes hídricas, cascadas y ecosistemas acuáticos en un viaje de conservación.",
      icon: Droplets,
      image: "/colombian-waterfall-rural-nature-stream.jpg",
      color: "from-cyan-500/20 to-blue-600/20",
    },
  ]

  const values = [
    { icon: Heart, title: "Compromiso", description: "Con nuestras familias campesinas y el territorio" },
    { icon: Users, title: "Diversidad", description: "Celebramos la riqueza cultural de Boyacá" },
    { icon: Leaf, title: "Sostenibilidad", description: "Cuidado del medio ambiente y recursos naturales" },
    { icon: MapPin, title: "Comunidad", description: "Fortalecimiento del desarrollo local y regional" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ASOGRANJA-GJSdUlIWrM5W0oXfpnQYcuma9JrJMZ.jpg"
                alt="ASOGRANJA Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h1 className="text-xl font-bold text-primary">ASOGRANJA</h1>
                <p className="text-xs text-muted-foreground">Sogamoso</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </a>
              <a href="#rutas" className="text-foreground hover:text-primary transition-colors">
                Rutas
              </a>
              <a href="#nosotros" className="text-foreground hover:text-primary transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <Button className="bg-primary hover:bg-primary/90">Reservar</Button>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-in fade-in slide-in-from-top-5">
              <a
                href="#inicio"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="#rutas"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rutas
              </a>
              <a
                href="#nosotros"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90">Reservar</Button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/colombian-rural-landscape-mountains-farm-boyaca.jpg"
            alt="Paisaje rural colombiano"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Descubre el Corazón Rural de <span className="text-primary">Boyacá</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
              Experiencias auténticas de turismo rural comunitario que conectan tradición, naturaleza y cultura
              campesina
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Explorar Rutas
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Conocer Más
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Routes Section */}
      <section id="rutas" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Nuestras Rutas Turísticas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Cuatro experiencias únicas que celebran la identidad campesina y la riqueza natural de nuestro territorio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {routes.map((route, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl animate-in fade-in slide-in-from-bottom-10"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={route.image || "/placeholder.svg"}
                    alt={route.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${route.color} to-transparent opacity-60`}></div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                    <route.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-2xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
                    {route.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{route.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 animate-in fade-in slide-in-from-left-10">
              <h2
                className="text-4xl md:text-5xl font-bold text-balance"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Quiénes Somos
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Somos una entidad sin ánimo de lucro fundada en el año{" "}
                <span className="font-bold text-primary">2010</span>, una organización de base campesina comunitaria que
                busca promover los derechos de lo individual y lo colectivo de sus asociados.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Nos hemos convertido en un núcleo del sector social que brinda apoyo a las familias campesinas en temas
                de producción y comercialización de productos agrícolas y pecuarios, transformación de alimentos
                gastronómicos, artesanía, y el desarrollo de mercados campesinos.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Conocer Nuestra Historia
                </Button>
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-right-10">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image src="/asogranja-community-team.jpg" alt="Comunidad ASOGRANJA" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-4xl font-bold text-primary">14+</p>
                <p className="text-sm text-muted-foreground">Años promoviendo el turismo rural comunitario</p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-4 animate-in fade-in slide-in-from-left-10">
              <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Misión
              </h3>
              <p className="leading-relaxed opacity-90">
                Asogranja está comprometida con el desarrollo y promoción del sector campesino mediante experiencias
                turísticas, productivas, agro ecológicas y artesanales como parte de la identidad rural para hacerla más
                atractiva, eficiente y efectiva en la transmisión de saberes y valores sociales y culturales del
                territorio boyacense.
              </p>
            </div>
            <div className="space-y-4 animate-in fade-in slide-in-from-right-10">
              <h3 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Visión
              </h3>
              <p className="leading-relaxed opacity-90">
                Potenciar los saberes y experiencia campesinos de sus asociados para elevar el potencial socioeconómico
                de los mismos, potenciando la gran riqueza ambiental y ancestral de los territorios y los valores de las
                mujeres campesinas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Productos y Servicios
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Ofrecemos una variedad de productos agrícolas, artesanías y experiencias gastronómicas auténticas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Productos Agrícolas",
                desc: "Frutas, verduras y productos orgánicos de nuestras fincas",
                img: "/organic-vegetables-farm-fresh-colombian.jpg",
              },
              {
                title: "Gastronomía Típica",
                desc: "Platos tradicionales boyacenses preparados con recetas ancestrales",
                img: "/traditional-colombian-food-boyaca-cuisine.jpg",
              },
              {
                title: "Artesanías",
                desc: "Productos manufacturados a mano por artesanos locales",
                img: "/colombian-handmade-crafts-rural-artisan.jpg",
              },
              {
                title: "Camping Rural",
                desc: "Experiencias de camping en entornos naturales únicos",
                img: "/rural-camping-colombia-mountains-nature.jpg",
              },
              {
                title: "Caminatas Ecológicas",
                desc: "Recorridos guiados por senderos naturales y culturales",
                img: "/ecological-hiking-colombia-rural-trail.jpg",
              },
              {
                title: "Mercados Campesinos",
                desc: "Espacios de comercialización directa de productos locales",
                img: "/farmers-market-colombia-local-products.jpg",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.img || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Comienza Tu Aventura Rural
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Contáctanos para reservar tu experiencia o conocer más sobre nuestras rutas turísticas y productos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                Contactar Ahora
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Ver Disponibilidad
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20ASOGRANJA-GJSdUlIWrM5W0oXfpnQYcuma9JrJMZ.jpg"
                  alt="ASOGRANJA Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold">ASOGRANJA</h3>
                  <p className="text-sm opacity-80">Sogamoso, Boyacá</p>
                </div>
              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Promoviendo el turismo rural comunitario y el desarrollo sostenible desde 2010
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>
                  <a href="#rutas" className="hover:opacity-100 transition-opacity">
                    Rutas Turísticas
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="hover:opacity-100 transition-opacity">
                    Quiénes Somos
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:opacity-100 transition-opacity">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-100 transition-opacity">
                    Productos
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Contacto</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Sogamoso, Boyacá, Colombia</li>
                <li>Disponible todo el año</li>
                <li>info@asogranja.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            <p>© 2025 ASOGRANJA Sogamoso. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
