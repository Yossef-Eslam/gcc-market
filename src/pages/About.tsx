import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Users, TrendingUp, ShoppingCart } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const valueProps = [
    {
      icon: Target,
      title: "Clarity & Strategy",
      points: [
        "Data-driven market assessment",
        "Phased GTM roadmap with risk gates",
        "Clear KPIs and milestone tracking",
      ],
    },
    {
      icon: Users,
      title: "Distribution & Coverage",
      points: [
        "Vetted partner selection",
        "Performance-based SLAs",
        "Optimal channel mix mapping",
      ],
    },
    {
      icon: TrendingUp,
      title: "Execution & Growth",
      points: [
        "Retail activation sprints",
        "Field force optimization",
        "Weekly performance dashboards",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Merchandising & in-store reality",
      points: [
        "Dedicated merchandiser coverage where it matters",
        "Planogram, display & promo execution checked on shelf",
        "Store-level insights feed back into GTM & promo plans",
      ],
    },
  ];

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Value Proposition Section
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            From strategy to shelf: your GCC growth partner
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border-2 border-border card-hover"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold flex-1">{prop.title}</h2>
                </div>
                <ul className="space-y-3">
                  {prop.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default About;
