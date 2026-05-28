"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="large"
        background="floatingGradient"
        cardStyle="inset"
        primaryButtonStyle="gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "/",
        },
        {
          name: "Dashboard",
          id: "/dashboard",
        },
        {
          name: "Focus Zone",
          id: "/focus-zone",
        },
        {
          name: "Self-Improvement",
          id: "/self-improvement",
        },
        {
          name: "Community",
          id: "/community",
        },
      ]}
      brandName="FocusFlow"
      button={{
        text: "Get Started",
        href: "/dashboard",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="focus-zone-intro" data-section="focus-zone-intro">
      <MediaAbout
      useInvertedBackground={true}
      title="Enter Your Sanctuary of Focus"
      description="Our fullscreen Focus Zone eliminates distractions, provides calming ambient sounds, and integrates a customizable timer to guide you into deep work sessions."
      tag="Deep Work"
      buttons={[
        {
          text: "Launch Focus Zone",
          href: "#",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/enjoyment-activities-festivities-movies-pastime_53876-21360.jpg"
      imageAlt="Minimalist focus zone interface with timer and ambient sounds"
    />
  </div>

  <div id="focus-zone-faq" data-section="focus-zone-faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How does the distraction blocker work?",
          content: "Our intelligent distraction blocker temporarily mutes notifications and filters out unproductive websites during your focus sessions, ensuring an uninterrupted deep work environment. You can customize the blocked elements in your settings.",
        },
        {
          id: "faq2",
          title: "Can I customize ambient sounds?",
          content: "Yes, Focus Zone offers a curated library of calming ambient sounds, from gentle rain to serene forest noises. You can mix and match, adjust volumes, and even import your favorite tracks to create your perfect auditory environment.",
        },
        {
          id: "faq3",
          title: "What is the Pomodoro Technique?",
          content: "The Pomodoro Technique is a time management method using a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks. FocusFlow's timer is based on this principle, helping you maintain high energy and concentration.",
        },
      ]}
      title="Optimizing Your Focus"
      description="Get answers to common questions about using Focus Zone, its benefits, and advanced customization for maximum concentration."
      tag="Q&A"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/representation-collective-mind-process-concept-digital-art-style_23-2151657842.jpg?_wi=3"
      imageAlt="Abstract blue and purple gradient background"
      logoText="FocusFlow"
      columns={[
        {
          title: "Product",
          items: [
            {
              label: "Daily Planner",
              href: "/dashboard",
            },
            {
              label: "Focus Timer",
              href: "/focus-zone",
            },
            {
              label: "Habit Tracker",
              href: "/dashboard",
            },
            {
              label: "Goal Tracking",
              href: "/dashboard",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "/#about",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Blog",
              href: "/self-improvement",
            },
            {
              label: "Community",
              href: "/community",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Contact Us",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 FocusFlow. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
