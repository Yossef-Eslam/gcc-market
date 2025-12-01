import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Markets Served */}
          <div>
            <h3 className="text-lg font-bold mb-4">Markets Served</h3>
            <p className="text-muted-foreground">
              UAE • Saudi Arabia • Kuwait • Bahrain • Oman • Qatar
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <p className="text-muted-foreground">
              Food & Beverage | Personal Care | Household Goods | Health & Wellness
            </p>
          </div>

          {/* Approach */}
          <div>
            <h3 className="text-lg font-bold mb-4">Approach</h3>
            <p className="text-muted-foreground">
              Strategy → Distribution → Execution → Measurement
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Brand Builders GCC. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/khaledyousri-elmoslimany"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
