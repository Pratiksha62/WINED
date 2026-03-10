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
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
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
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
