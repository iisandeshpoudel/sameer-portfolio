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
    <section className="min-h-screen relative overflow-hidden bg-gradient-radial from-gray-900 via-gray-800 to-black">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b3b3b,transparent)]" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px]" />
      
      <div className="container relative px-4 py-16 mx-auto">
        <div className="flex flex-col items-center space-y-12 animate-fade-up">
          {/* Enhanced Avatar Container */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-fade-in"></div>
            <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-white/10 group-hover:border-white/20 transition-all duration-300 relative">
              <AvatarImage
                src="/lovable-uploads/e9d095bf-7709-4ace-b9ea-8e4b374d31a6.png"
                alt="Sameer Gairhe"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-6 max-w-3xl backdrop-blur-sm py-8 rounded-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Sameer Gairhe
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Software Developer | Tech Innovator
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
              Crafting Scalable Solutions for Complex Challenges
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm"
              onClick={() => window.open("https://github.com/yourusername", "_blank")}
            >
              <Github className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20 text-white backdrop-blur-sm"
              onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
            >
              <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button
              variant="default"
              size="lg"
              className="group bg-white text-gray-900 hover:bg-gray-100 backdrop-blur-sm"
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