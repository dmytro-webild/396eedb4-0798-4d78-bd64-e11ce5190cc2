"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MediaAbout from '@/components/sections/about/MediaAbout';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, CheckCircle, Zap } from "lucide-react";

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
          name: "Home",          id: "/"},
        {
          name: "Dashboard",          id: "/dashboard"},
        {
          name: "Focus Zone",          id: "/focus-zone"},
        {
          name: "Self-Improvement",          id: "/self-improvement"},
        {
          name: "Community",          id: "/community"},
      ]}
      brandName="FocusFlow"
      button={{
        text: "Get Started",        href: "/dashboard"}}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Master Your Focus, Master Your Life."
      description="FocusFlow empowers you with a smart task planner, habit tracker, and Pomodoro timer to elevate your productivity and achieve unparalleled mental clarity."
      testimonials={[
        {
          name: "Sarah Johnson",          handle: "@sarahj",          testimonial: "FocusFlow transformed my daily routine. My concentration has never been better!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/casual-smile-street-style-background-spring_1139-777.jpg",          imageAlt: "Sarah Johnson"},
        {
          name: "Michael Chen",          handle: "@mchen",          testimonial: "The habit tracker is a game-changer. I'm finally consistent with my goals.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-senior-man-sitting-bench_1262-1517.jpg",          imageAlt: "Michael Chen"},
        {
          name: "Emily Rodriguez",          handle: "@emilyr",          testimonial: "Intuitive design and powerful features make productivity effortless.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/corporate-leaders-demonstrating-powerful-collaboration-strategic-thinking_482257-124682.jpg",          imageAlt: "Emily Rodriguez"},
        {
          name: "David Kim",          handle: "@davidk",          testimonial: "The Pomodoro timer helps me achieve deep work without burnout.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-person_23-2151099206.jpg",          imageAlt: "David Kim"},
        {
          name: "Jessica Lee",          handle: "@jessical",          testimonial: "Highly recommend FocusFlow for anyone serious about self-improvement and focus.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-bearded-man-wearing-knitted-warm-sweater-hat_273609-6896.jpg",          imageAlt: "Jessica Lee"},
      ]}
      testimonialRotationInterval={6000}
      tag="Achieve More"
      buttons={[
        {
          text: "Start Your Journey",          href: "/dashboard"},
        {
          text: "Learn More",          href: "/#about"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-woman-portrait-with-blurred-plant_23-2148304879.jpg",          alt: "User avatar 1"},
        {
          src: "http://img.b2bpic.net/free-photo/contemplated-serious-young-man-looking-camera_23-2148130297.jpg",          alt: "User avatar 2"},
        {
          src: "http://img.b2bpic.net/free-photo/blonde-woman-is-looking-camera-white-background_176474-116011.jpg",          alt: "User avatar 3"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-man-making-hand-frame-blue-background_23-2148193971.jpg",          alt: "User avatar 4"},
        {
          src: "http://img.b2bpic.net/free-photo/portrait-confident-saleswoman-working-office-sitting-business-room-reading-writing-down_1258-193622.jpg",          alt: "User avatar 5"},
      ]}
      avatarText="Join 10,000+ focused users"
      imageSrc="http://img.b2bpic.net/free-photo/market-trends-concept-with-computer_23-2150372439.jpg"
      imageAlt="FocusFlow dashboard interface"
      showDimOverlay={false}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Unlock Your Full Potential"
      description="FocusFlow is meticulously designed to help you conquer distractions, build lasting habits, and meticulously plan your day. With intuitive tools and a motivating interface, transform your aspirations into achievements."
      tag="Our Mission"
      buttons={[
        {
          text: "Discover Features",          href: "/#features"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-woman-holding-smartphone_23-2149265774.jpg"
      imageAlt="FocusFlow application interface with productivity features"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "daily-planner",          label: "Daily Task Planner",          title: "Organize & Prioritize",          items: [
            "Smart to-do lists",            "Drag-and-drop planning",            "Deadline reminders"],
        },
        {
          id: "focus-timer",          label: "Focus Timer",          title: "Deep Work Sessions",          items: [
            "Customizable Pomodoro",            "Session analytics",            "Soundscapes"],
        },
        {
          id: "habit-tracker",          label: "Habit Tracker",          title: "Build Lasting Habits",          items: [
            "Visual progress tracking",            "Streak motivators",            "Goal synchronization"],
        },
      ]}
      title="All-in-One Productivity Hub"
      description="From daily planning to deep work, FocusFlow integrates essential tools to streamline your routine and amplify your concentration."
      tag="Core Tools"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      animationType="slide-up"
      metrics={[
        {
          id: "focus-sessions",          value: "10K+",          title: "Focus Sessions Completed",          description: "Users have completed over ten thousand productive focus sessions.",          icon: Zap,
        },
        {
          id: "tasks-mastered",          value: "50K+",          title: "Tasks Mastered",          description: "Achieve your goals by mastering thousands of tasks with FocusFlow.",          icon: CheckCircle,
        },
        {
          id: "habits-built",          value: "1M+",          title: "Habits Built",          description: "Cultivate positive habits, with over a million new habits formed.",          icon: Award,
        },
      ]}
      title="Your Progress, Visualized"
      description="Track key metrics that reflect your dedication and growth. See your focus streaks, task completion rates, and habit consistency at a glance."
      tag="Real Results"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-brunette-female-blue-shirt-grey-background_613910-7954.jpg",          imageAlt: "Sarah Johnson"},
        {
          id: "2",          name: "Michael Chen",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-male-white-shirt-posing-with-crossed-hands-pink-background_140725-26866.jpg",          imageAlt: "Michael Chen"},
        {
          id: "3",          name: "Emily Rodriguez",          imageSrc: "http://img.b2bpic.net/free-photo/single-gesture-lifestyle-white-male_1262-2168.jpg",          imageAlt: "Emily Rodriguez"},
        {
          id: "4",          name: "David Kim",          imageSrc: "http://img.b2bpic.net/free-photo/contemplated-young-man-sitting-front-wall_23-2148130273.jpg",          imageAlt: "David Kim"},
        {
          id: "5",          name: "Jessica Lee",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-female-student_1262-3811.jpg",          imageAlt: "Jessica Lee"},
      ]}
      cardTitle="Real Users, Real Transformation"
      cardTag="Success Stories"
      buttons={[
        {
          text: "Join Our Community",          href: "/community"},
      ]}
      cardAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/representation-collective-mind-process-concept-digital-art-style_23-2151657842.jpg"
      imageAlt="Abstract blue and purple gradient background"
      logoText="FocusFlow"
      columns={[
        {
          title: "Product",          items: [
            {
              label: "Daily Planner",              href: "/dashboard"},
            {
              label: "Focus Timer",              href: "/focus-zone"},
            {
              label: "Habit Tracker",              href: "/dashboard"},
            {
              label: "Goal Tracking",              href: "/dashboard"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "/#about"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Blog",              href: "/self-improvement"},
            {
              label: "Community",              href: "/community"},
          ],
        },
        {
          title: "Resources",          items: [
            {
              label: "Help Center",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
            {
              label: "Contact Us",              href: "#"},
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
