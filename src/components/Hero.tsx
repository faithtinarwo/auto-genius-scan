import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/zce-logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Content */}
      <div className="container relative z-20 px-4 py-20 animate-fade-in pointer-events-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="w-48 md:w-64 animate-scale-in">
            <img 
              src={logo} 
              alt="ZCE Motors - Professional Car Diagnostics" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black text-secondary leading-tight tracking-tight">
              CAR DIAGNOSTICS
              <span className="block text-primary mt-2">SERVICE</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Get back on the road, worry-free
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-bold italic text-accent tracking-wide">
            "Revive. Restore. Revitalize."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 relative z-30">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-bold shadow-[var(--shadow-glow)] hover:scale-105 transition-all cursor-pointer active:scale-95 pointer-events-auto"
            >
              BOOK NOW
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="border-2 border-secondary bg-background hover:bg-secondary hover:text-secondary-foreground text-secondary text-lg px-8 py-6 rounded-full font-bold hover:scale-105 transition-all active:scale-95 pointer-events-auto"
            >
              <a href="tel:+263780567523" className="flex items-center justify-center pointer-events-auto">
                <Phone className="mr-2 h-5 w-5" />
                CALL US
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative red accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
