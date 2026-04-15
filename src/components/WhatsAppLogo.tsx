import { MessageCircle } from "lucide-react";

export default function WhatsAppLogo({ className = "w-6 h-6" }: { className?: string }) {
  return <MessageCircle className={className} />;
}
