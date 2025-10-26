import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import MessageCarousel from "@/components/MessageCarousel";

const Index = () => {
  const [showMessages, setShowMessages] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/10 to-secondary/20">
      {!showMessages ? (
        <LandingPage onEnter={() => setShowMessages(true)} />
      ) : (
        <MessageCarousel />
      )}
    </main>
  );
};

export default Index;
