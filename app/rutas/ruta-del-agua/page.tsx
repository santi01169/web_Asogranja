"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail, Droplets } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RutaDelAguaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <Link href="/#rutas">
            <Button variant="ghost" className="text-primary-foreground hover:bg-primary-foreground/10 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Rutas
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
            Ruta del Agua
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/colombian-waterfall-rural-nature-stream.jpg"
          alt="Ruta del Agua"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Description */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Descripción de la Ruta
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Explora fuentes hídricas, cascadas y ecosistemas acuáticos en un viaje de conservación y respeto por el
                recurso más vital. Un recorrido que combina la belleza natural con la conciencia ambiental.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Recorrido por nacimientos de agua, quebradas cristalinas y cascadas escondidas. Aprende sobre la
                importancia de la conservación del agua, participa en actividades de reforestación de cuencas y conoce
                proyectos comunitarios de gestión hídrica sostenible que están marcando la diferencia en nuestro
                territorio.
              </p>
            </CardContent>
          </Card>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Duración</h3>
                    <p className="text-muted-foreground">Jornada completa (6-7 horas)</p>
                    <p className="text-sm text-muted-foreground mt-1">Incluye almuerzo campestre</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Grupo</h3>
                    <p className="text-muted-foreground">Mínimo 5 personas</p>
                    <p className="text-sm text-muted-foreground mt-1">Máximo 15 personas por grupo</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Dificultad</h3>
                    <p className="text-muted-foreground">Moderada</p>
                    <p className="text-sm text-muted-foreground mt-1">Requiere condición física básica</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Temporada</h3>
                    <p className="text-muted-foreground">Todo el año</p>
                    <p className="text-sm text-muted-foreground mt-1">Mejor en época seca</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activities */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Actividades de Conservación
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-cyan-50 dark:bg-cyan-950/20 rounded-lg border border-cyan-200 dark:border-cyan-800">
                  <h3 className="font-bold text-lg mb-2 text-cyan-900 dark:text-cyan-100">Reforestación de Cuencas</h3>
                  <p className="text-sm text-cyan-800 dark:text-cyan-200">
                    Participa en la siembra de árboles nativos en zonas estratégicas para la protección de fuentes
                    hídricas
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h3 className="font-bold text-lg mb-2 text-blue-900 dark:text-blue-100">Monitoreo de Calidad</h3>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Aprende técnicas básicas de análisis de calidad del agua y su importancia para el ecosistema
                  </p>
                </div>
                <div className="p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg border border-teal-200 dark:border-teal-800">
                  <h3 className="font-bold text-lg mb-2 text-teal-900 dark:text-teal-100">Proyectos Comunitarios</h3>
                  <p className="text-sm text-teal-800 dark:text-teal-200">
                    Conoce iniciativas locales de gestión sostenible del recurso hídrico y su impacto en la comunidad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Qué Incluye
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guía ambiental especializado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Transporte desde y hacia Sogamoso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Visita a nacimientos de agua y cascadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Actividad de reforestación (incluye árbol para plantar)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Taller de conservación del agua</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Almuerzo campestre con productos locales</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Refrigerios e hidratación durante el recorrido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Material educativo sobre ecosistemas acuáticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Seguro de accidentes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="bg-muted">
            <CardContent className="p-8 space-y-4">
              <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Recomendaciones
              </h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ropa cómoda para caminata y que pueda mojarse</li>
                <li>• Calzado antideslizante (botas de montaña recomendadas)</li>
                <li>• Protector solar y repelente de insectos</li>
                <li>• Gorra o sombrero</li>
                <li>• Botella de agua reutilizable</li>
                <li>• Cámara fotográfica (en bolsa impermeable)</li>
                <li>• Muda de ropa adicional</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Conecta con la Naturaleza
              </h2>
              <p className="text-lg opacity-90">Reserva tu lugar en la Ruta del Agua y contribuye a la conservación</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Enviar Mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
