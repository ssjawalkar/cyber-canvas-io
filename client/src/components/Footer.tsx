import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" /> by Samihan Jawalkar
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
