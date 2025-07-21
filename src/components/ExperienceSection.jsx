import { Briefcase } from "lucide-react";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Prompt Engineering Intern */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Prompt Engineering Intern
                </h4>
                <p className="text-muted-foreground text-sm">
                  Aspect Technologies, Nashik &mdash; Jan 2024 – Feb 2024
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Created and refined AI prompts to enhance output quality and relevance.
                </p>
              </div>
            </div>
          </div>

          {/* Web Development Intern */}
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">
                  Web Development Intern
                </h4>
                <p className="text-muted-foreground text-sm">
                  Motion Cut (Remote) &mdash; Dec 2023 – Jan 2024
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Built responsive websites and contributed to UI design using React.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
