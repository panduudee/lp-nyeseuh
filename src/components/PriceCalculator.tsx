import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calculator, ShoppingBag } from "lucide-react";

export const PriceCalculator = () => {
  const [weight, setWeight] = useState("");
  const [showResults, setShowResults] = useState(false);

  const prices = [
    { name: "Normal (3 Hari)", price: 8000 },
    { name: "Fast (2 Hari)", price: 10000 },
    { name: "Ngebut (1 Hari)", price: 12000 },
    { name: "Kilat (3 Jam)", price: 20000 }
  ];

  const handleCalculate = () => {
    if (weight && parseFloat(weight) > 0) {
      setShowResults(true);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="bubble w-20 h-20 top-20 left-10 opacity-30" style={{ animationDelay: '0s' }} />
      <div className="bubble w-16 h-16 bottom-20 right-20 opacity-25" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 slide-in-bottom">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30 mb-6">
              <Calculator className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-inter font-medium text-accent-foreground">Kalkulator Harga</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Hitung Harga Cucianmu
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Masukkan berat cucian dan lihat estimasi harganya
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 slide-in-bottom">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold font-poppins text-foreground mb-3">
                  Berat Cucian (kg)
                </label>
                <Input
                  type="number"
                  placeholder="Contoh: 5"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="text-lg h-14 rounded-xl border-2 focus:border-primary"
                  min="0"
                  step="0.5"
                />
              </div>
              
              <Button 
                onClick={handleCalculate}
                variant="secondary"
                size="lg"
                className="w-full h-14 text-lg"
                disabled={!weight || parseFloat(weight) <= 0}
              >
                <Calculator className="w-5 h-5" />
                Hitung Sekarang
              </Button>
            </div>
            
            {showResults && (
              <div className="mt-8 space-y-4 fade-in-up">
                <div className="h-px bg-border/50 my-6" />
                
                <h3 className="text-xl font-bold font-poppins text-foreground mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-secondary" />
                  Estimasi Harga untuk {weight} kg
                </h3>
                
                <div className="space-y-3">
                  {prices.map((item, index) => (
                    <div 
                      key={item.name}
                      className="flex justify-between items-center p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="font-inter font-medium text-foreground">{item.name}</span>
                      <span className="font-poppins font-bold text-secondary text-lg">
                        {formatPrice(item.price * parseFloat(weight))}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="hero"
                  size="lg"
                  className="w-full mt-6"
                  onClick={() => window.open('https://wa.me/6281234567890?text=Halo, saya ingin order laundry', '_blank')}
                >
                  Pesan Sekarang
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
