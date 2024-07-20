import { Home, Image } from "lucide-react";
import Index from "./pages/Index.jsx";
import AIImagePage from "./pages/AIImagePage.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "AI Image",
    to: "/ai-image",
    icon: <Image className="h-4 w-4" />,
    page: <AIImagePage />,
  },
];