"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail, Music, Sparkles, Mountain, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export default function CorredorAncestralPage() {
  const heroRef = useRef<HTMLDivElement>(null)

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 dark:from-background dark:via-background dark:to-stone-950">
      <div ref={heroRef} className="relative h-[500px] md:h-[600px] overflow-hidden mt-4">
        <Image
          src="/corredor-ancestral-musicians-campfire.jpg"
          alt="Músicos tradicionales alrededor de fogata en Ciudad de la Memoria"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
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
                  Corredor Ancestral
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-white/95 text-pretty mb-2">
                Un viaje a través del tiempo y la tradición
              </p>
              <p className="text-lg text-white/85 text-pretty">
                Donde la música y la memoria se encuentran bajo las estrellas
              </p>
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
                  <Mountain className="w-8 h-8 text-stone-600 dark:text-stone-400" />
                  <h2
                    className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    Una Experiencia Única
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-stone-700 dark:text-stone-300">
                  Descubre los caminos ancestrales en la{" "}
                  <strong className="text-stone-900 dark:text-stone-100">Vereda Monquira</strong>, donde la historia, la
                  música tradicional y la memoria cultural cobran vida. Esta experiencia única te conecta con las raíces
                  muiscas de nuestro territorio.
                </p>
                <div className="h-1 w-24 bg-gradient-to-r from-stone-400 to-stone-500 rounded-full"></div>
                <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                  Visita la <strong className="text-stone-900 dark:text-stone-100">Ciudad de la Memoria</strong>, un
                  espacio dedicado a preservar y compartir las tradiciones ancestrales de Sogamoso. Disfruta de veladas
                  culturales con música tradicional alrededor de fogatas, conoce símbolos indígenas y conecta
                  profundamente con la historia de nuestros antepasados.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="fade-in-section opacity-0 transition-all duration-700">
            <Card className="bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-900 dark:to-stone-950 border border-stone-200 dark:border-stone-800 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 relative h-80 md:h-auto min-h-[400px] bg-white dark:bg-stone-950 flex items-center justify-center p-8">
                    <div className="relative w-full h-full">
                      <Image
                        src="/ciudad-memoria-logo.jpg"
                        alt="Ciudad de la Memoria"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3 p-8 md:p-10 space-y-6 flex flex-col justify-center">
                    <div>
                      <h3
                        className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-stone-200 mb-3"
                        style={{ fontFamily: "var(--font-playfair)" }}
                      >
                        Ciudad de la Memoria
                      </h3>
                      <div className="flex items-center gap-2 text-stone-600 dark:text-stone-400 mb-4">
                        <MapPin className="w-5 h-5" />
                        <p className="text-lg">Vereda Monquira, Sogamoso - Boyacá</p>
                      </div>
                    </div>
                    <p className="text-lg leading-relaxed text-stone-700 dark:text-stone-300">
                      Un lugar mágico donde convergen la historia, la cultura y las tradiciones ancestrales. Aquí podrás
                      experimentar la autenticidad de nuestras raíces muiscas a través de actividades culturales, música
                      tradicional y encuentros comunitarios.
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Jornada completa o nocturna</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                        Incluye velada cultural con fogata
                      </p>
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Vereda Monquira</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Ciudad de la Memoria</p>
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
                      <p className="text-stone-700 dark:text-stone-300 font-medium">Música tradicional en vivo</p>
                      <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">Instrumentos autóctonos</p>
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
                    "Recorrido guiado por la Ciudad de la Memoria",
                    "Velada cultural con música tradicional alrededor de fogata",
                    "Presentación de instrumentos autóctonos y su historia",
                    "Charla sobre símbolos indígenas y cultura muisca",
                    "Refrigerios y bebidas tradicionales",
                    "Encuentro con sabedores ancestrales",
                    "Experiencia de conexión con la naturaleza y la historia",
                    "Material educativo sobre patrimonio cultural",
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
                  Vive la Experiencia Ancestral
                </h2>
                <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto text-pretty">
                  Contáctanos directamente a través de Ciudad de la Memoria y reserva tu lugar en esta experiencia única
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
      `}</style>
    </div>
  )
}
