import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Breast Cancer Detection System",
    description: "AI-powered system for early detection of breast cancer using machine learning algorithms.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "#",
  },
  {
    title: "Gazzabko Market",
    description: "Scalable e-commerce platform with modern features and seamless user experience.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
  },
  {
    title: "Uttam Mithaiwala",
    description: "Flutter-based retail solution for streamlined inventory and order management.",
    tech: ["Flutter", "Firebase", "GetX"],
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 bg-muted" id="projects">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};