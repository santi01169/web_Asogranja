"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, MapPin, Clock, Users, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function RutaPeregrinacionPage() {
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
            Ruta de la Peregrinación
          </h1>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px]">
        <Image
          src="/colombian-rural-pilgrimage-path-mountains.jpg"
          alt="Ruta de la Peregrinación"
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
                Un recorrido espiritual que conecta tradición y fe campesina con paisajes naturales únicos. Experimenta
                un viaje de conexión espiritual a través de senderos sagrados que han sido transitados por generaciones.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Esta ruta incluye visitas a sitios de devoción popular, encuentros con la comunidad local, y momentos de
                reflexión en espacios naturales de gran belleza. Conocerás las tradiciones religiosas campesinas y
                participarás en rituales ancestrales que han sido preservados por décadas.
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
                    <p className="text-muted-foreground">Jornada completa (6-8 horas)</p>
                    <p className="text-sm text-muted-foreground mt-1">Incluye almuerzo típico</p>
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
                    <p className="text-muted-foreground">Mínimo 4 personas</p>
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
                    <h3 className="font-bold text-lg mb-2">Punto de Encuentro</h3>
                    <p className="text-muted-foreground">Centro de Sogamoso</p>
                    <p className="text-sm text-muted-foreground mt-1">Transporte incluido</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Disponibilidad</h3>
                    <p className="text-muted-foreground">Todo el año</p>
                    <p className="text-sm text-muted-foreground mt-1">Reserva con 3 días de anticipación</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What's Included */}
          <Card>
            <CardContent className="p-8 space-y-4">
              <h2 className="text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-playfair)" }}>
                Qué Incluye
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guía local experto en historia y tradiciones religiosas</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Transporte desde y hacia Sogamoso</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Almuerzo típico campesino</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Refrigerios y bebidas durante el recorrido</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Visita a sitios sagrados y de devoción popular</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Encuentro con comunidad local</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span>Seguro de accidentes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-playfair)" }}>
                Reserva Tu Experiencia
              </h2>
              <p className="text-lg opacity-90">Contáctanos para más información y disponibilidad de fechas</p>
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
