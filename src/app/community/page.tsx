"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';

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

  <div id="community-team" data-section="community-team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      groups={[
        {
          id: "community-leaders",
          groupTitle: "Community Leaders & Mentors",
          members: [
            {
              id: "leader1",
              title: "Alex Sharma",
              subtitle: "Head of Community",
              detail: "Guides our global FocusFlow community.",
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-therapy_23-2148928886.jpg",
              imageAlt: "Alex Sharma, Head of Community",
            },
            {
              id: "leader2",
              title: "Mia Wong",
              subtitle: "Mentor & Educator",
              detail: "Shares expertise on productivity techniques.",
              imageSrc: "http://img.b2bpic.net/free-photo/happy-jolly-adult-engaging-virtual-workshop-course-via-web-teleconference_482257-120792.jpg",
              imageAlt: "Mia Wong, Mentor & Educator",
            },
            {
              id: "leader3",
              title: "Omar Hassan",
              subtitle: "Challenge Moderator",
              detail: "Organizes daily challenges and events.",
              imageSrc: "http://img.b2bpic.net/free-photo/woman-student-greeting-her-professor-laptop-web-video-call_482257-131843.jpg",
              imageAlt: "Omar Hassan, Challenge Moderator",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/market-trends-concept-with-computer_23-2150372439.jpg?_wi=2",
          imageAlt: "community leader portrait smiling",
        },
      ]}
      title="Connect & Grow Together"
      description="Join a thriving community of like-minded individuals focused on personal growth, sharing insights, and celebrating milestones together."
      tag="Our Community"
    />
  </div>

  <div id="community-social-proof" data-section="community-social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Weekly Focus Challenge",
        "Habit Streak Challenge",
        "Mindfulness Marathon",
        "Dopamine Detox Journey",
        "Morning Routine Masterclass",
        "Goal Setting Sprint",
        "Nightly Reflection Circle",
      ]}
      title="Weekly Challenges & Achievements"
      description="Participate in daily challenges, share your progress, and get inspired by others. Together, we build momentum and celebrate every win."
      tag="Motivation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/representation-collective-mind-process-concept-digital-art-style_23-2151657842.jpg?_wi=5"
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
