import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TrendingUp, Award } from "lucide-react";

const Proof = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Proof Section
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Real results from GCC market launches
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Case Study 1 - UAE */}
          <div
            className="bg-card p-8 rounded-xl border-2 border-border"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp size={32} className="text-primary" />
              <h2 className="text-2xl font-bold">Case Snapshot 1 - UAE Market Expansion</h2>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Ajeeb Brand — UAE Market Expansion</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Problem</h4>
                <p className="text-muted-foreground">
                  Ajeeb launched in UAE via a general distributor. After 6 months, listings stalled at 12 MT stores, zero GT presence, and sub-30% monthly sell-through. Management faced investor pressure and feared pulling out.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Diagnostic</h4>
                <p className="text-muted-foreground">
                  We audited distributor EPOS, discovered misaligned SLA, zero field force, and missing promo calendar. Brand was invisible on shelf.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Intervention</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex gap-2"><span className="text-primary">•</span>Replaced distributor with performance-based SLA partner</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Deployed 4-person merchandising team (weekly visits)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Negotiated new MT listings (15 chains, 120+ stores)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Activated GT pilots in 5 high-footfall clusters</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Set weekly EPOS review rhythm with brand + distributor</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Results</h4>
                <div className="bg-primary/10 p-4 rounded-lg space-y-2">
                  <p className="font-bold text-primary text-xl">1,376.7% sell-out growth</p>
                  <p className="text-foreground">Market share rose from 0.2% to 2.8% in 12 months</p>
                  <p className="text-foreground">120+ MT stores live with consistent facings</p>
                  <p className="text-foreground">GT footprint expanded to 300+ outlets</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">KPIs</h4>
                <p className="text-muted-foreground">
                  Monthly EPOS tracking • Weekly merchandising compliance • Quarterly distributor scorecard (SLA vs actuals)
                </p>
              </div>
            </div>
          </div>

          {/* Case Study 2 - Oman */}
          <div
            className="bg-card p-8 rounded-xl border-2 border-border"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={32} className="text-primary" />
              <h2 className="text-2xl font-bold">Case Snapshot 2 - Oman Market Entry</h2>
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-4">Ajeeb Brand — Oman Market Launch</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-lg mb-2">Problem</h4>
                <p className="text-muted-foreground">
                  Zero Oman presence. Brand wanted fast, low-risk pilot to validate demand before committing heavy capex.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Diagnostic</h4>
                <p className="text-muted-foreground">
                  We mapped competitive category (20+ local + regional brands), identified white-space positioning (premium natural ingredients), and vetted 3 Oman distributors.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Intervention</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex gap-2"><span className="text-primary">•</span>Selected performance-SLA distributor with strong MT + GT reach</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Secured listings in Lulu, Carrefour, Spinneys (35 stores total)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Launched 90-day retail activation sprint: in-store demos, promo bundles, social ads</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Provided weekly merchandiser coverage (planogram, POS, OOS checks)</li>
                  <li className="flex gap-2"><span className="text-primary">•</span>Set up monthly EPOS review + replenishment rhythm</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">Results</h4>
                <div className="bg-primary/10 p-4 rounded-lg space-y-2">
                  <p className="font-bold text-primary text-xl">#3 market rank in category within 6 months</p>
                  <p className="text-foreground">31.8% value share captured (vs 15% target)</p>
                  <p className="text-foreground">35 MT stores + 80 GT outlets live</p>
                  <p className="text-foreground">Sell-through rate consistently {'>'}65%</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-2">KPIs</h4>
                <p className="text-muted-foreground">
                  Monthly sell-out by SKU • Weekly merchandising audit scores • Quarterly distributor NPS and SLA compliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Proof;
