import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-muted">
      <div className="container px-4 py-16 animate-fade-up">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-primary">
            Sameer Gairhe
          </h1>
          <p className="text-xl md:text-2xl text-secondary">
            Software Developer | Tech Innovator
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting Scalable Solutions for Complex Challenges
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open("https://github.com/yourusername", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button
              variant="default"
              size="lg"
              className="group bg-primary hover:bg-primary/90"
              onClick={() => {
                // Add CV download logic here
                console.log("Downloading CV...");
              }}
            >
              <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};