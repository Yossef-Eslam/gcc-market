import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "971504035052";
  const message = "Hi! I'm interested in learning more about your FMCG services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,0.4)] group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} className="group-hover:animate-pulse" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
