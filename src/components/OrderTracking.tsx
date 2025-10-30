import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Loader2, Package } from "lucide-react";

export const OrderTracking = () => {
  const [orderCode, setOrderCode] = useState("");
  const [status, setStatus] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const mockStatuses = [
    {
      status: "Sedang dicuci",
      icon: "🧺",
      time: "Estimasi selesai: 2 jam lagi",
      color: "bg-accent/20 border-accent/30 text-accent-foreground"
    },
    {
      status: "Dalam proses pengeringan",
      icon: "☀️",
      time: "Estimasi selesai: 1 jam lagi",
      color: "bg-primary/20 border-primary/30 text-primary-foreground"
    },
    {
      status: "Siap diambil",
      icon: "✅",
      time: "Silakan ambil pesanan Anda",
      color: "bg-secondary/20 border-secondary/30 text-secondary-foreground"
    }
  ];

  const handleTrack = () => {
    if (orderCode) {
      setLoading(true);
      setTimeout(() => {
        // Simulate API call - randomly pick a status
        const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)];
        setStatus(randomStatus);
        setLoading(false);
      }, 1500);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="bubble w-24 h-24 top-10 left-20 opacity-20" style={{ animationDelay: '0s' }} />
      <div className="bubble w-16 h-16 bottom-10 right-10 opacity-25" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20 mb-6">
              <Package className="w-4 h-4 text-secondary" />
              <span className="text-sm font-inter font-medium text-secondary">Lacak Pesanan</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-poppins text-foreground mb-4">
              Cek Status Laundry Kamu
            </h2>
            <p className="text-lg text-muted-foreground font-inter">
              Masukkan kode order untuk melihat status terkini
            </p>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border/50 slide-in-bottom">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold font-poppins text-foreground mb-3">
                  Kode Order
                </label>
                <Input
                  type="text"
                  placeholder="Contoh: SL2024001"
                  value={orderCode}
                  onChange={(e) => setOrderCode(e.target.value.toUpperCase())}
                  className="text-lg h-14 rounded-xl border-2 focus:border-secondary"
                />
              </div>
              
              <Button 
                onClick={handleTrack}
                variant="secondary"
                size="lg"
                className="w-full h-14 text-lg"
                disabled={!orderCode || loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Melacak...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Lacak Pesanan
                  </>
                )}
              </Button>
            </div>
            
            {status && !loading && (
              <div className="mt-8 fade-in-up">
                <div className="h-px bg-border/50 my-6" />
                
                <div className={`p-6 rounded-2xl border-2 ${status.color} transition-all duration-300`}>
                  <div className="text-center space-y-4">
                    <div className="text-5xl mb-2">{status.icon}</div>
                    <h3 className="text-2xl font-bold font-poppins">{status.status}</h3>
                    <p className="text-lg font-inter">{status.time}</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/30 rounded-xl">
                  <p className="text-sm font-inter text-muted-foreground text-center">
                    Kode Order: <span className="font-semibold text-foreground">{orderCode}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
