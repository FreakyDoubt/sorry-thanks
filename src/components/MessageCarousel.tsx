import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import friendshipHug from "@/assets/friendship-hug.png";
import sorrySticker from "@/assets/sorry-sticker.png";

const messages = [
  {
    id: 1,
    title: "Terima Kasih 🌸",
    content: "Makasih banget udah mau temenan sama gw ya nyet. Makasih udah mau dengerin cerita gw!",
    image: friendshipHug,
    gradient: "from-primary/20 to-accent/20"
  },
  {
    id: 2,
    title: "Sorry ya ca 💔",
    content: "sorry kalo gw udah nempatin lo diposisi yang ga nyaman buat lo. aku tau itu nggak adil buat kamu.",
    image: sorrySticker,
    gradient: "from-secondary/20 to-primary/20"
  },
  {
    id: 3,
    title: "Harapan 💫",
    content: "Semoga aku dan kamu selalu menjadi teman level 1000 sampai bila bila!",
    emoji: "✨💙🌟",
    gradient: "from-accent/20 to-secondary/20"
  }
];

const MessageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? messages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
  };

  const currentMessage = messages[currentIndex];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {messages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-muted hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to message ${index + 1}`}
            />
          ))}
        </div>

        {/* Message Card */}
        <Card 
          key={currentMessage.id}
          className={`p-8 md:p-12 bg-gradient-to-br ${currentMessage.gradient} backdrop-blur-sm border-2 shadow-2xl animate-fade-in-up`}
          style={{ boxShadow: "var(--shadow-soft)" }}
        >
          <div className="text-center space-y-6">
            {currentMessage.image ? (
              <img 
                src={currentMessage.image} 
                alt={currentMessage.title}
                className="w-40 h-40 md:w-48 md:h-48 mx-auto object-contain animate-pulse-soft"
              />
            ) : (
              <div className="text-6xl md:text-7xl animate-pulse-soft">
                {currentMessage.emoji}
              </div>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {currentMessage.title}
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              {currentMessage.content}
            </p>
          </div>
        </Card>

        {/* Navigation buttons */}
        <div className="flex justify-between items-center mt-8 gap-4">
          <Button
            onClick={handlePrevious}
            variant="outline"
            size="lg"
            className="gap-2 hover:bg-primary/10"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </Button>

          <span className="text-sm text-muted-foreground font-medium">
            {currentIndex + 1} / {messages.length}
          </span>

          <Button
            onClick={handleNext}
            variant="outline"
            size="lg"
            className="gap-2 hover:bg-primary/10"
          >
            <span className="hidden sm:inline">Selanjutnya</span>
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Footer message */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground">
            Dengan tulus dari hati💙
            Alay Nentod 🗣️
          </p>
        </div>
      </div>
    </div>
  );
};

export default MessageCarousel;
