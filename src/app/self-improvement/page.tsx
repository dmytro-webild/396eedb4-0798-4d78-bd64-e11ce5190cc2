"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterMedia from '@/components/sections/footer/FooterMedia';
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

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      title="Cultivate Growth, Mind & Habits"
      description="Explore articles and guides on discipline, concentration, time management, dopamine detox, and mental clarity to empower your personal development."
      tag="Knowledge Hub"
      blogs={[
        {
          id: "blog1",
          category: "Discipline",
          title: "Building Unbreakable Discipline",
          excerpt: "Discover proven strategies to cultivate unwavering discipline in every aspect of your life.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-interacting-with-plasma-ball_23-2150591704.jpg",
          imageAlt: "Person meditating to symbolize discipline",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-confident-saleswoman-working-office-sitting-business-room-reading-writing-down_1258-193622.jpg",
          date: "July 20, 2024",
        },
        {
          id: "blog2",
          category: "Concentration",
          title: "5 Tips for Laser-Sharp Focus",
          excerpt: "Enhance your concentration with these simple yet powerful techniques backed by science.",
          imageSrc: "http://img.b2bpic.net/free-photo/peaceful-young-blonde-student-girl-sitting-desk-with-school-tools-meditating-with-closed-eyes-isolated-olive-green-wall_141793-113655.jpg",
          imageAlt: "Clear workspace symbolizing concentration",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67170.jpg",
          date: "July 18, 2024",
        },
        {
          id: "blog3",
          category: "Wellness",
          title: "The Dopamine Detox Guide",
          excerpt: "Reset your reward system and find true satisfaction with our comprehensive dopamine detox guide.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-posing-outdoors_23-2150043697.jpg",
          imageAlt: "Person disconnecting from digital screen",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/pleased-young-caucasian-girl-green-shirt-puts-fist-chin-looks-up-isolated-orange-background-with-copy-space_141793-34514.jpg",
          date: "July 15, 2024",
        },
        {
          id: "blog4",
          category: "Productivity",
          title: "Mastering Time Management",
          excerpt: "Learn to optimize your schedule, eliminate procrastination, and reclaim your valuable time.",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-alarm-clock-cup-coffee-workplace_169016-25086.jpg",
          imageAlt: "Stylized clock with productivity elements",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/abstract-portrait-man-vaporwave-style_23-2148950744.jpg",
          date: "July 12, 2024",
        },
        {
          id: "blog5",
          category: "Mindset",
          title: "Achieving Mental Clarity",
          excerpt: "Strategies to declutter your mind, reduce stress, and foster a state of calm and clarity.",
          imageSrc: "http://img.b2bpic.net/free-photo/shadow-people-surfing_1160-946.jpg",
          imageAlt: "Abstract image symbolizing mental clarity",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/beautiful-woman-cafe_273609-12690.jpg",
          date: "July 10, 2024",
        },
        {
          id: "blog6",
          category: "Growth",
          title: "Your Path to Personal Growth",
          excerpt: "A guide to continuous self-improvement, setting meaningful goals, and celebrating progress.",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-word-learn_53876-31419.jpg",
          imageAlt: "Plant sprouting from a book symbolizing growth",
          authorName: "FocusFlow Team",
          authorAvatar: "http://img.b2bpic.net/free-photo/teenage-girl-listening-music-headphones-city-woman-city_169016-66657.jpg",
          date: "July 7, 2024",
        },
      ]}
    />
  </div>

  <div id="self-improvement-faq" data-section="self-improvement-faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "tip1",
          title: "How to start a Dopamine Detox?",
          content: "Begin by identifying your main sources of instant gratification (social media, excessive gaming, junk food). Dedicate specific periods each day or week to abstain from these activities, replacing them with more fulfilling, low-stimulation actions like reading or nature walks.",
        },
        {
          id: "tip2",
          title: "Effective time management strategies?",
          content: "Try the Eisenhower Matrix to prioritize tasks (Urgent/Important), batch similar tasks to reduce context switching, and implement the 'Two-Minute Rule' – if a task takes less than two minutes, do it immediately. Consistent application will yield significant results.",
        },
        {
          id: "tip3",
          title: "Building an unbreakable morning routine?",
          content: "Start small with 1-2 positive habits (e.g., drink water, 5 mins meditation). Make it realistic and consistent. Gradually add more elements like exercise or journaling. Avoid screens for the first hour and ensure your routine sets a positive tone for the day.",
        },
      ]}
      title="Mastering Your Mindset"
      description="Practical tips and advice on improving concentration, breaking bad habits"
      tag="Tips & Strategies"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/representation-collective-mind-process-concept-digital-art-style_23-2151657842.jpg?_wi=4"
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
