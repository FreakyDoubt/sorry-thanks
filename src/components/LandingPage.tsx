import { Button } from "@/components/ui/button";
import sadCharacter from "@/assets/sad-character.png";
import audioFile from "@/assets/audio.mp3";

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage = ({ onEnter }: LandingPageProps) => {
  const handleEnter = () => {
    const audio = new Audio(audioFile);
    audio.play().catch(err => console.log("Audio autoplay prevented:", err));
    onEnter();
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto animate-fade-in-up">
        <div className="mb-8 flex justify-center">
          <img 
            src={sadCharacter} 
            alt="Character" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
          Untuk Caca yang cantik yang katanya mirip davmoy 💙
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
          Ada yang pengen aku sampein...
        </p>

        <Button
          onClick={handleEnter}
          size="lg"
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Kliknya sekali aja takut bug 💌
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
