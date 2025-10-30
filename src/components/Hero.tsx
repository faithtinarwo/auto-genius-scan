import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logo from "@/assets/zce-logo.png";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBackground} 
          alt="Professional car diagnostics" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/95 via-secondary/85 to-primary/90" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20 animate-fade-in">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-48 md:w-64 animate-scale-in">
            <img 
              src={logo} 
              alt="ZCE Motors - Professional Car Diagnostics" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
          
          {/* Headline */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-primary-foreground leading-tight tracking-tight">
              CAR DIAGNOSTICS
              <span className="block text-primary mt-2">SERVICE</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Get back on the road, worry-free
            </p>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-bold italic text-accent tracking-wide">
            "Revive. Restore. Revitalize."
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg"
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-bold shadow-[var(--shadow-glow)] hover:scale-105 transition-all"
            >
              BOOK NOW
            </Button>
            <Button 
              size="lg"
              variant="outline"
              asChild
              className="bg-primary-foreground/10 border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-secondary text-lg px-8 py-6 rounded-full font-bold backdrop-blur-sm"
            >
              <a href="tel:+263780567523">
                <Phone className="mr-2 h-5 w-5" />
                CALL US
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
