import { Clock, Rocket, Shield, Users, TrendingUp, Star } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Fast Implementation",
    description: "Get your AI solutions deployed in weeks, not months, with our proven development process."
  },
  {
    icon: Rocket,
    title: "Cutting-Edge Technology",
    description: "We use the latest AI models and automation tools to deliver superior results."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security and 99.9% uptime guarantee for all our AI solutions."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team provides ongoing support and optimization to ensure your success."
  },
  {
    icon: TrendingUp,
    title: "Measurable ROI",
    description: "Track real business impact with detailed analytics and performance metrics."
  },
  {
    icon: Star,
    title: "Proven Results",
    description: "Average 40% efficiency increase and 60% cost reduction for our clients."
  }
];

const testimonials = [
  {
    quote: "Zumax AI transformed our customer service. We now handle 3x more inquiries with the same team.",
    author: "Sarah Chen",
    role: "CEO, TechStartup",
    company: "TechStartup"
  },
  {
    quote: "The automation workflows saved us 20 hours per week. Our team can focus on strategic work now.",
    author: "Mike Rodriguez",
    role: "Operations Director",
    company: "LocalBiz"
  },
  {
    quote: "ROI was evident within the first month. The AI chatbot alone increased our conversion rate by 35%.",
    author: "Emily Watson",
    role: "Marketing Manager",
    company: "GrowthLab"
  }
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 px-6 bg-accent/10">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Why Choose</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Zumax AI?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're not just another AI company. We're your strategic partner in digital transformation, 
            committed to delivering measurable results and long-term success.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.author}
                className="bg-gradient-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground opacity-75">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "40%", label: "Avg. Efficiency Increase" },
            { value: "60%", label: "Cost Reduction" },
            { value: "99.9%", label: "Uptime Guarantee" }
          ].map((stat, index) => (
            <div key={stat.label} className="group">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};