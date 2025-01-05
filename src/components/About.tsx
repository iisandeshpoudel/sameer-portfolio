export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-primary mb-8">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-secondary">
              I'm a passionate software developer with a strong foundation in computer engineering
              from Advanced College of Engineering and Management. My journey in tech has been
              driven by a desire to create innovative solutions that make a real impact.
            </p>
            <p className="text-lg text-secondary">
              As a co-founder and technical lead at multiple ventures, I've developed a keen eye
              for scalable architectures and user-centric design. My experience spans from
              AI-driven healthcare solutions to e-commerce platforms.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Key Attributes</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Problem-solving mindset
              </li>
              <li className="flex items-center text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Technical innovation
              </li>
              <li className="flex items-center text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Leadership & team collaboration
              </li>
              <li className="flex items-center text-secondary">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Entrepreneurial spirit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};