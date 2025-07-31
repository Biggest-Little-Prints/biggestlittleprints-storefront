import { Button, Heading } from "@medusajs/ui"
import { ArrowLongRight } from "@medusajs/icons"
import ButtonWrapper from "@modules/layout/components/button-wrapper"

const Hero = () => {
  return (
    <div
      className="relative w-full h-[600px] overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/placeholder.svg?height=800&width=1200&text=3D+Printing+Video+Background"
        >
          <source src="/videos/background.mp4" type="video/mp4" />
          {/* Fallback image */}
          <div className="w-full h-full bg-gradient-to-br from-teal-100 to-emerald-200"></div>
        </video>
      </div>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Creative 3D Printed
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent block">
              Toys & More
            </span>
          </Heading>
          <Heading
            level="h2"
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
          >
            Discover our unique collection of eco-friendly 3D printed toys designed to spark creativity and provide
            endless hours of imaginative play.
          </Heading>
        </span>
        <a
          href="/store"
        >
          <ButtonWrapper variant="secondary">
            View Products
            <ArrowLongRight />
          </ButtonWrapper>
        </a>
      </div>
    </div>
  )
}

export default Hero
