import Card from "@/ui/card/card";
import "./HeroCard.scss";
import Image from "next/image";
import { Button } from "@/ui/button/button";
import { Plus } from "lucide-react";

export default function HeroCard() {
  return (
    <Card>
      <div className="hero-card">
        <div className="hero-container">
          <p className="hero-container__heading">Good afternoon! 🍓</p>
          <h2 className="hero-container__title">What are we cooking today?</h2>
          <p className="hero-container__description">
            Your little pixel-art recipe notebook for cozy kitchen days.
          </p>
          <Button> <Plus size={21}/> New Recipe</Button>
        </div>
        <div className="cake-container">
          <Image
            src="/cake-background.png"
            fill
            alt="Pink background overlay for cake"
          />
          <Image
            src="/strawberry-shortcake.png"
            alt="Delicious strawberry shortcake"
            width={150}
            height={150}
            className="cake-container__cake-image"
          />
        </div>
      </div>
    </Card>
  );
}
