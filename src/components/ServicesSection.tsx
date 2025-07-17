import { Bot, Workflow, MessageSquare, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description: "Custom AI chatbots that handle customer inquiries 24/7, qualify leads, and provide instant support across all your channels.",
    features: ["24/7 Customer Support", "Lead Qualification", "Multi-platform Integration"]
  },
  {
    icon: Workflow,
    title: "Process Automation Workflows",
    description: "Streamline repetitive tasks with intelligent automation that connects your tools and eliminates manual work.",
    features: ["Task Automation", "Data Synchronization", "Workflow Optimization"]
  },
  {
    icon: MessageSquare,
    title: "AI Content & Communication",
    description: "Automated content generation, email responses, and social media management powered by advanced AI.",
    features: ["Content Generation", "Email Automation", "Social Media Management"]
  },
  {
    icon: Zap,
    title: "Custom AI Solutions",
    description: "Tailored AI implementations designed specifically for your business needs and industry requirements.",
    features: ["Custom Development", "Industry-Specific Solutions", "Scalable Architecture"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Our</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI automation solutions designed to transform your business operations 
            and accelerate growth through intelligent technology.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative bg-gradient-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-subtle"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Service icon */}
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Service content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn more link */}
              <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="cta" size="lg" className="px-8 py-6 h-auto">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};