import { useState } from "react";
import {
  BrainCircuit,
  ShieldCheck,
  Clock,
  BellRing,
  TimerReset,
} from "lucide-react";
import StepContent from "./how-it-works/StepContent";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: <BrainCircuit className="w-4 h-4" />,
      title: "Understand Your Distraction Patterns",
      description:
        "Reboot learns your habits by analyzing usage patterns and attention shifts — identifying apps, sites, and times where focus breaks.",
      highlightText: "Identifies:",
      highlightDetails:
        "Focus leaks, distraction triggers, and peak productivity windows",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "Activate Focus Guard",
      description:
        "During your focus sessions, Reboot intelligently blocks interruptions, silences distractions, and manages your attention environment.",
      highlightText: "Enforces:",
      highlightDetails:
        "Distraction blocks, deep work mode, and notification control",
    },
    {
      id: 3,
      icon: <Clock className="w-4 h-4" />,
      title: "Sustain Flow and Build Habits",
      description:
        "Reboot nudges you to stay on track, reflects on your performance, and helps you build lasting focus habits with personalized insights.",
      highlightText: "Supports:",
      highlightDetails:
        "Flow state recovery, habit tracking, and focus coaching",
    },
    {
      id: 4,
      icon: <TimerReset className="w-4 h-4" />,
      title: "Track and Limit Screen Time",
      description:
        "Reboot monitors your device and app usage, alerts you when you're approaching limits, and guides you to take meaningful breaks.",
      highlightText: "Tracks:",
      highlightDetails:
        "Screen time, overuse patterns, and app limit adherence",
    },
    {
      id: 5,
      icon: <BellRing className="w-4 h-4" />,
      title: "Set Smart Reminders",
      description:
        "From hydration breaks to screen pauses, Reboot delivers personalized reminders that fit your rhythm without disrupting your flow.",
      highlightText: "Reminds:",
      highlightDetails: "Breaks, focus blocks, and mindful transitions",
    },
  ];

  const handleStepClick = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <section className="relative py-4 bg-white" id="how-it-works">
      <div className="container-section py-4">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <div className="section-tag">From Ignored to Trusted</div>
          <h2 className="heading-lg text-convrt-dark-blue mb-4">
            How <span className="gradient-text">Reboot</span> Works
          </h2>
          <p className="text-convrt-dark-blue/80 text-lg max-w-2xl mx-auto">
            Reboot helps you take control of your attention by managing screen
            time, blocking distractions, and building lasting focus habits—so
            you can do more of what matters.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-100 rounded-2xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-[600px]">
            <div className=" flex flex-col gap-1 p-4 bg-gray-50">
              {steps.map((step) => (
                <StepContent
                  key={step.id}
                  stepNumber={step.id}
                  title={step.title}
                  description={step.description}
                  highlightText={step.highlightText}
                  highlightDetails={step.highlightDetails}
                  icon={step.icon}
                  isActive={activeStep === step.id}
                  onClick={() => handleStepClick(step.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
