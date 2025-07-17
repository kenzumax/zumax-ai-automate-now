import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-muted-foreground">
            AI Automation for Modern Businesses
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-slide-up">
          <span className="text-foreground">Automate Your Business with</span>
          <br />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Custom AI Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in delay-300">
          Zumax AI helps startups and local businesses streamline operations through intelligent workflows, 
          AI-powered chatbots, and automated processes that save time and boost efficiency.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button 
            variant="cta" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Book a Free Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button 
            variant="cta-outline" 
            size="lg"
            className="text-lg px-8 py-6 h-auto"
          >
            Start Automating
          </Button>
        </div>

        {/* Social proof */}
        <div className="mt-16 animate-fade-in delay-700">
          <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechCorp', 'StartupXYZ', 'LocalBiz', 'InnovateCo', 'GrowthLab'].map((company) => (
              <div key={company} className="bg-accent/30 px-6 py-3 rounded-lg border border-border">
                <span className="text-sm font-medium text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};