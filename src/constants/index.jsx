import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Wine Enthusiast",
    image: user1,
    text: "The quality of the wine is exceptional. Every bottle feels premium and the delivery is always on time. Highly recommended!",
  },
  {
    user: "Jane Smith",
    company: "Premium Subscriber",
    image: user2,
    text: "I love the monthly subscription. The seasonal wines are amazing and it’s exciting to try new varieties every month.",
  },
  {
    user: "David Johnson",
    company: "Food & Wine Lover",
    image: user3,
    text: "The flavors are rich and perfectly balanced. These wines pair beautifully with my dinners.",
  },
  {
    user: "Ronee Brown",
    company: "Collector Plan Member",
    image: user4,
    text: "The Collector Plan is absolutely fantastic. I’ve received several limited-edition wines that are hard to find anywhere else. Each bottle feels special and unique.",
  },
  {
    user: "Michael Wilson",
    company: "Regular Customer",
    image: user5,
    text: "From ordering to delivery, the entire experience has been smooth and enjoyable. The website is easy to use, the customer service is excellent, and the wine itself is outstanding.",
  },
  {
    user: "Emily Davis",
    company: "Longtime Wine Customer",
    image: user6,
    text: "It really makes the whole experience feel more special and enjoyable. I would definitely recommend this winery to anyone who loves high-quality wine and wants to explore new flavors.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Vineyard Selection",
    description:
      "Carefully sourced grapes from exceptional vineyards, chosen for their character, balance, and depth of flavor",
  },
  {
    icon: <Fingerprint />,
    text: "Crafted Wines",
    description:
      "Elegant wines crafted with precision, highlighting tradition, terroir, and refined winemaking techniques.",
  },
  {
    icon: <ShieldHalf />,
    text: "Oak Aging",
    description:
      "Aged in fine oak barrels to develop complexity, smooth tannins, and rich aromatic layers.",
  },
  {
    icon: <BatteryCharging />,
    text: "Pairing Experience",
    description:
      "Discover perfect pairings that elevate both the wine and the cuisine.",
  },
  {
    icon: <PlugZap />,
    text: "Terroir",
    description:
      "Every bottle reflects the unique soil, climate, and landscape where the grapes are grown.",
  },
  {
    icon: <GlobeLock />,
    text: "Wine Collection",
    description:
      "Explore our curated selection of vintages—from bright and lively to bold and full-bodied.",
  },
];

export const checklistItems = [
  {
    title: "Grape Selection",
    description:
      "We carefully select premium grapes from our vineyards to ensure the best flavor and quality.",
  },
  {
    title: "Harvesting",
    description:
      "Our grapes are harvested at peak ripeness to capture their natural sweetness and aroma.",
  },
  {
    title: "Fermentation",
    description:
      "The freshly crushed grapes undergo fermentation where natural yeast converts sugars into alcohol, developing the wine’s character.",
  },
  {
    title: "Aging",
    description:
      "The wine is aged in oak barrels or stainless steel tanks to enhance its depth, flavor, and aroma.",
  },
];

export const pricingOptions = [
  {
    title: "Basic Plan",
    price: "$30",
    features: [
      "2 bottles every month",
      "Free delivery",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Premium Plan",
    price: "$55",
    features: [
      "4 bottles every month",
      "Exclusive seasonal wines",
      "Free delivery",
      "Private Mode",
    ],
  },
  {
    title: "Collector Plan",
    price: "$90",
    features: [
      "6 premium bottles",
      "Limited edition wines",
      "Member Discounts",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Help Center" },
  { href: "#", text: "Shipping & Delivery" },
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms & Conditions" },
];

export const communityLinks = [
  { href: "#", text: "Address: 123 Vineyard Lane, Napa Valley, CA" },
  { href: "#", text: "Phone: +1 (123) 456-7890" },
  { href: "#", text: "Email:wined@winery.com" },
  // { href: "#", text: "Hackathons" },
  // { href: "#", text: "Jobs" },
];
