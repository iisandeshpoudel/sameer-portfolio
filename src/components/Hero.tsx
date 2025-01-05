import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

export const Hero = () => {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch("https://utfs.io/f/B6DsmGxxIuan0fQytWQSQIhBFc9N2RoH65LDVbdjElZCu3r7");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Sameer_Gairhe_CV.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success("CV downloaded successfully!");
    } catch (error) {
      console.error("Error downloading CV:", error);
      toast.error("Failed to download CV. Please try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container px-4 py-16 animate-fade-up">
        <div className="flex flex-col items-center space-y-8">
          <div className="relative group">
            <Avatar className="w-40 h-40 border-4 border-white/10 group-hover:border-white/20 transition-all duration-300">
              <AvatarImage
                src="/lovable-uploads/e9d095bf-7709-4ace-b9ea-8e4b374d31a6.png"
                alt="Sameer Gairhe"
                className="object-cover"
              />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
          </div>

          <div className="text-center space-y-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Sameer Gairhe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Software Developer | Tech Innovator
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Crafting Scalable Solutions for Complex Challenges
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
              onClick={() => window.open("https://github.com/yourusername", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white"
              onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button
              variant="default"
              size="lg"
              className="group bg-white text-gray-900 hover:bg-gray-100"
              onClick={handleDownloadCV}
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