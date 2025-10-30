import logo from "@/assets/zce-logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={logo} alt="ZCE Motors" className="h-16 w-auto" />
            <p className="text-xl font-bold italic text-accent">
              "Revive. Restore. Revitalize."
            </p>
            <p className="text-secondary-foreground/80">
              Professional car diagnostics and electrical services in Harare.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+263780567523" 
                  className="hover:text-primary transition-colors cursor-pointer underline decoration-transparent hover:decoration-primary"
                >
                  +263 78 056 7523
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="tel:+263772123789" 
                  className="hover:text-primary transition-colors cursor-pointer underline decoration-transparent hover:decoration-primary"
                >
                  077 212 3789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a 
                  href="mailto:Josephtishashe@gmail.com" 
                  className="hover:text-primary transition-colors cursor-pointer underline decoration-transparent hover:decoration-primary break-all"
                >
                  Josephtishashe@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">Business Hours</h3>
            <div className="space-y-2 text-secondary-foreground/80">
              <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p>Saturday: 8:00 AM - 1:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ZCE Motors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
