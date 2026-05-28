"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';

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

  <div id="dashboard-features" data-section="dashboard-features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "dashboard-tasks",          label: "Daily Task Planner",          title: "Efficient Task Management",          items: [
            "Smart to-do list",            "Priority levels",            "Due date reminders"],
        },
        {
          id: "dashboard-habits",          label: "Integrated Habit Tracker",          title: "Build Consistent Routines",          items: [
            "Visual progress charts",            "Customizable habits",            "Streak motivation"],
        },
        {
          id: "dashboard-pomodoro",          label: "Pomodoro Focus Timer",          title: "Boost Concentration",          items: [
            "Customizable work/break intervals",            "Distraction-free mode",            "Session logging"],
        },
      ]}
      title="Your Personalized Control Center"
      description="Manage your goals, track tasks, cultivate habits, and activate your focus timer all from one intuitive dashboard designed for clarity."
      tag="Dashboard Overview"
    />
  </div>

  <div id="dashboard-goals-progress" data-section="dashboard-goals-progress">
      <ProductCardFour
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      animationType="slide-up"
      products={[
        {
          id: "daily-score",          name: "Daily Productivity Score",          price: "90%",          variant: "Excellent",          imageSrc: "http://img.b2bpic.net/free-vector/dashboard-element-collection-infographic-template_23-2148368928.jpg",          imageAlt: "Daily Productivity Score chart"},
        {
          id: "weekly-analysis",          name: "Weekly Performance Analysis",          price: "View Report",          variant: "Detailed Insights",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-bullet-journals-arrangement_23-2149740041.jpg",          imageAlt: "Weekly Performance Analysis dashboard"},
        {
          id: "goal-tracker",          name: "Goal Achievement Tracker",          price: "7 Goals",          variant: "On Track",          imageSrc: "http://img.b2bpic.net/free-photo/man-trading-browsing-online-stock-investments-night_169016-58199.jpg",          imageAlt: "Goal Achievement Tracker chart"},
        {
          id: "focus-history",          name: "Focus Session History",          price: "120 Hrs",          variant: "Total Focused Time",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-golden-pen_23-2148975839.jpg",          imageAlt: "Focus Session History chart"},
        {
          id: "mood-trend",          name: "Mood Trend Analysis",          price: "Positive",          variant: "Overall Outlook",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-modern-background-with-flowing-particle-design_1048-13547.jpg",          imageAlt: "Mood Trend Analysis chart"},
        {
          id: "routine-rates",          name: "Routine Completion Rates",          price: "85%",          variant: "Consistent",          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-workplace-items-assortment_23-2148975804.jpg",          imageAlt: "Routine Completion Rates chart"},
      ]}
      title="Visualize Your Growth"
      description="See your progress with smart charts and detailed goal tracking. Understand your performance and identify areas for improvement."
      tag="Analytics"
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
