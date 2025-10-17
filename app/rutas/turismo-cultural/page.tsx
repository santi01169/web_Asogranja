"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail, Music, Sparkles, Heart, Camera, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function TurismoCulturalPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play()
            } else {
              videoRef.current.pause()
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    if (videoRef.current) {
      videoObserver.observe(videoRef.current)
    }

    return () => videoObserver.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 dark:from-background dark:via-background dark:to-stone-950">
      <div ref={heroRef} className="relative h-[500px] md:h-[600px] overflow-hidden mt-4">
        <Image
          src="/cultural-center-gathering.jpg"
          alt="Centro Cultural Comunitario - Bienvenida al Turismo Cultural"
          fill
          className="object-cover object-center hero-image brightness-110 contrast-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute top-6 left-4 md:left-8 z-10">
          <Link href="/#rutas">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-300 border border-white/30"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Rutas
            </Button>
          </Link>
        </div>
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
                <h1
                  className="text-4xl md:text-6xl font-bold text-white text-balance"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Turismo Cultural
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/95 text-pretty mb-2">
                Bienvenido al corazón de la cultura boyacense
              </p>
              <p className="text-lg text-white/85 text-pretty">Descubre las tradiciones que nos unen como comunidad</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="border border-stone-200 dark:border-stone-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Music className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Una Experiencia Cultural Única
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-stone-700 dark:text-stone-300">
                  Sumérgete en la riqueza cultural de Sogamoso a través de experiencias auténticas que celebran las
                  tradiciones campesinas. En{" "}
                  <strong className="text-stone-900 dark:text-stone-100">Casa Cultura</strong> y los puntos de
                  información turística, descubrirás la música tradicional, la danza folclórica y la gastronomía
                  ancestral.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
                <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                  Esta ruta te conecta con la esencia de nuestro territorio, donde cada actividad es una ventana a los
                  saberes transmitidos de generación en generación. Participa en talleres culturales, disfruta de
                  presentaciones musicales en vivo, y degusta los sabores auténticos de la cocina boyacense.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Video className="w-8 h-8 text-stone-600 dark:text-stone-400" />
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Video de la Experiencia
              </h2>
            </div>
            <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 shadow-lg">
              <CardContent className="p-0">
                <div className="relative w-full aspect-video bg-stone-100 dark:bg-stone-900">
                  <video
                    ref={videoRef}
                    controls
                    className="w-full h-full object-cover"
                    poster="/cultural-center-gathering.jpg"
                    muted
                    loop
                  >
                    <source src="/casa_cultura.mp4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="flex items-center gap-3 mb-8">
              <Camera className="w-8 h-8 text-stone-600 dark:text-stone-400" />
              <h2
                className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Galería de Experiencias
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/turismo-rural-comunitario-sign.jpg"
                    alt="Punto de Información Turística"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">
                    Punto de Información Turística
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Centro de bienvenida donde comienza tu experiencia cultural en el territorio.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/cultural-activities-community.jpg"
                    alt="Actividades culturales comunitarias"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Actividades Culturales</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Participa en talleres de danza, música y actividades recreativas tradicionales.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/cultural-center-gathering.jpg"
                    alt="Centro cultural comunitario"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Centro Cultural</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Espacio de encuentro donde la comunidad comparte sus tradiciones y saberes.
                  </p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-xl group">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src="/traditional-food-vendor.jpg"
                    alt="Gastronomía tradicional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Gastronomía Tradicional</h3>
                  <p className="text-stone-600 dark:text-stone-400">
                    Degusta los sabores auténticos de la cocina boyacense preparada con recetas ancestrales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-80 md:h-auto min-h-[400px] bg-black flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image src="/casa-cultura-logo.jpg" alt="Casa Cultura" fill className="object-contain" />
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3
                        className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200 mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Casa Cultura
                      </h3>
                      <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 mb-4">
                        <MapPin className="w-5 h-5" />
                        <p className="text-lg">Sogamoso, Boyacá</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                      Nuestro centro cultural es el corazón de las experiencias turísticas en Sogamoso. Aquí se realizan
                      presentaciones de música tradicional, talleres de danza folclórica y eventos gastronómicos que
                      celebran nuestra identidad campesina. Un espacio de encuentro donde visitantes y comunidad local
                      comparten saberes y tradiciones.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button
                        size="lg"
                        className="bg-stone-700 hover:bg-stone-800 text-white shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <Phone className="mr-2 h-5 w-5" />
                        322 881 4258
                      </Button>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-stone-700 text-stone-700 hover:bg-stone-700 hover:text-white dark:text-stone-300 dark:border-stone-500 dark:hover:bg-stone-700 transition-all duration-300 bg-transparent"
                      >
                        <Mail className="mr-2 h-5 w-5" />
                        @CiudadDeLaMemoria
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-10 text-stone-800 dark:text-stone-200"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Detalles de la Experiencia
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Clock className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Duración</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">4 a 6 horas</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Jornada cultural completa</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Users className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Grupo</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Mínimo 5 personas</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Máximo 20 personas por grupo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <MapPin className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">Ubicación</h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Sogamoso, Boyacá</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                        Casa Cultura y puntos turísticos
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-stone-100 dark:bg-stone-900 p-3 rounded-xl">
                      <Music className="w-7 h-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-stone-800 dark:text-stone-200">
                        Experiencia Cultural
                      </h3>
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Música y danza tradicional</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Presentaciones en vivo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-lg bg-white dark:bg-stone-950">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Qué Incluye
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Presentaciones de música tradicional en vivo",
                    "Talleres de danza folclórica boyacense",
                    "Degustación de gastronomía típica y bebidas ancestrales",
                    "Visita a Casa Cultura y puntos de información turística",
                    "Talleres de elaboración de artesanías locales",
                    "Encuentro con artistas y sabedores locales",
                    "Material educativo sobre cultura campesina",
                    "Experiencia de inmersión en tradiciones boyacenses",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg hover:bg-stone-50 dark:hover:bg-stone-900 transition-colors duration-200"
                    >
                      <span className="text-stone-600 dark:text-stone-400 mt-1 text-xl font-bold">✓</span>
                      <span className="text-stone-700 dark:text-stone-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 text-white border-0 shadow-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/traditional-patterns.jpg')] opacity-5"></div>
              <CardContent className="p-10 md:p-16 text-center space-y-8 relative z-10">
                <Sparkles className="w-16 h-16 mx-auto" />
                <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                  Vive la Cultura Campesina
                </h2>
                <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto text-pretty">
                  Contáctanos y reserva tu lugar en esta experiencia cultural única
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-stone-800 hover:bg-stone-50"
                  >
                    <Phone className="mr-2 h-6 w-6" />
                    WhatsApp: 322 881 4258
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-stone-800 bg-transparent shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Mail className="mr-2 h-6 w-6" />
                    @CiudadDeLaMemoria
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-stone-700 via-stone-800 to-stone-900 p-8 md:p-10 text-white">
                    <Sparkles className="w-12 h-12 mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                      Reserva tu Experiencia
                    </h2>
                    <p className="text-lg opacity-90 text-pretty">
                      Contáctanos y vive una experiencia cultural inolvidable
                    </p>
                  </div>
                  <div className="p-8 space-y-6 bg-white dark:bg-stone-950">
                    <div className="space-y-4">
                      <h3 className="font-bold text-xl text-stone-800 dark:text-stone-200 mb-4">
                        Información de Contacto
                      </h3>

                      <a
                        href="https://wa.me/573228814258"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300 group"
                      >
                        <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full group-hover:bg-green-500 transition-colors duration-300">
                          <Phone className="w-6 h-6 text-green-600 dark:text-green-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">WhatsApp</p>
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">322 881 4258</p>
                        </div>
                      </a>

                      <a
                        href="https://instagram.com/CiudadDeLaMemoria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 hover:border-pink-500 dark:hover:border-pink-500 hover:bg-pink-50 dark:hover:bg-pink-950/20 transition-all duration-300 group"
                      >
                        <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-full group-hover:bg-pink-500 transition-colors duration-300">
                          <Mail className="w-6 h-6 text-pink-600 dark:text-pink-400 group-hover:text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Instagram</p>
                          <p className="font-bold text-lg text-stone-800 dark:text-stone-200">@CiudadDeLaMemoria</p>
                        </div>
                      </a>

                      <div className="flex items-center gap-4 p-4 rounded-lg border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50">
                        <div className="bg-stone-200 dark:bg-stone-800 p-3 rounded-full">
                          <MapPin className="w-6 h-6 text-stone-600 dark:text-stone-400" />
                        </div>
                        <div>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Ubicación</p>
                          <p className="font-bold text-stone-800 dark:text-stone-200">Casa Cultura</p>
                          <p className="text-sm text-stone-600 dark:text-stone-400">Sogamoso, Boyacá</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-10 space-y-6 bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                    <h3
                      className="text-2xl font-bold text-stone-800 dark:text-stone-200"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      ¿Por qué elegirnos?
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Experiencia Auténtica</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Conecta con las verdaderas tradiciones culturales de la región
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Artistas Locales</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Aprende de músicos, bailarines y artesanos que viven estas tradiciones
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Turismo Sostenible</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Apoyamos a la comunidad local y el desarrollo cultural sostenible
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="bg-stone-700 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-800 dark:text-stone-200 mb-1">Disponible Todo el Año</h4>
                        <p className="text-stone-600 dark:text-stone-400 text-sm">
                          Oferta permanente para que disfrutes cuando prefieras
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t-2 border-stone-200 dark:border-stone-800">
                    <p className="text-center text-stone-700 dark:text-stone-300 font-medium">
                      ¡Reserva ahora y vive una experiencia única!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
        }

        .fade-in-section.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-image {
          filter: brightness(1.1) contrast(1.05) saturate(1.1);
        }
      `}</style>
    </div>
  )
}
