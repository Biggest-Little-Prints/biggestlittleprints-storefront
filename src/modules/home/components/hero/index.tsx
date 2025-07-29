import { ArrowLongRight } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-0">
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

      {/* Tint Overlay */}
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
          <Button variant="secondary" className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2  shadow-lg hover:shadow-xl transition-all">
            View Products
            <ArrowLongRight />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
