import { Card } from "@/components/ui/card";
import { CheckCircle2, Cpu, Zap, Wrench, AlertCircle } from "lucide-react";
import diagnosticsImg from "@/assets/service-diagnostics.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import componentsImg from "@/assets/service-components.jpg";

const services = [
  {
    icon: Cpu,
    title: "Engine & Electrical Diagnostics",
    description: "Advanced computer diagnostics to identify and resolve engine and electrical issues quickly and accurately.",
    image: diagnosticsImg,
  },
  {
    icon: AlertCircle,
    title: "Computerized Fault Detection",
    description: "State-of-the-art fault detection systems to pinpoint problems before they become major issues.",
    image: diagnosticsImg,
  },
  {
    icon: Zap,
    title: "Starters, Alternators & Wiper Motors",
    description: "Expert repair and replacement of starters, alternators, wiper motors, and lighting systems.",
    image: componentsImg,
  },
  {
    icon: Wrench,
    title: "Electrical Components",
    description: "Comprehensive electrical component repair and maintenance for all vehicle systems.",
    image: electricalImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            OUR <span className="text-primary">SERVICES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional car diagnostics and electrical services to keep your vehicle running at peak performance
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="group relative overflow-hidden border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-glow)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 p-3 bg-accent rounded-full">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
