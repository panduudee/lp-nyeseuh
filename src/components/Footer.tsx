import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90 text-secondary-foreground overflow-hidden">
      {/* Floating Bubbles */}
      <div className="bubble w-24 h-24 top-10 right-10 opacity-10" style={{ animationDelay: '0s' }} />
      <div className="bubble w-16 h-16 bottom-20 left-20 opacity-15" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* CTA Section */}
        <div className="py-16 text-center border-b border-secondary-foreground/10">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6 slide-in-bottom">
            Siap Laundry Hari Ini?
          </h2>
          <p className="text-xl mb-8 opacity-90 font-inter max-w-2xl mx-auto slide-in-bottom" style={{ animationDelay: '0.1s' }}>
            Dapatkan layanan laundry terbaik dengan harga terjangkau
          </p>
          <div className="flex flex-wrap gap-4 justify-center slide-in-bottom" style={{ animationDelay: '0.2s' }}>
            <Button 
              variant="accent"
              size="lg"
              className="text-base px-8"
              onClick={() => {
                const services = document.getElementById('services');
                services?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Order Sekarang
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-base px-8 border-2 border-secondary-foreground/20 hover:bg-secondary-foreground/10 text-secondary-foreground"
              onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin order laundry', '_blank')}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Kami
            </Button>
          </div>
        </div>
        
        {/* Info Section */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          <div className="fade-in-up">
            <h3 className="text-2xl font-bold font-poppins mb-4">SuganLaundry</h3>
            <p className="opacity-80 font-inter leading-relaxed">
              Layanan laundry modern yang mengutamakan kualitas, kecepatan, dan kepuasan pelanggan.
            </p>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-semibold font-poppins mb-4">Kontak Kami</h4>
            <div className="space-y-3 opacity-80">
              <div className="flex items-start gap-3 font-inter">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Jl. Laundry No. 123, Kota Bersih, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 font-inter">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
              <div className="flex items-center gap-3 font-inter">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@suganlaundry.com</span>
              </div>
            </div>
          </div>
          
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-semibold font-poppins mb-4">Ikuti Kami</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-secondary-foreground/10 text-center opacity-70 font-inter">
          <p>&copy; {new Date().getFullYear()} SuganLaundry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
