// C:\kooni\kooni-website\app\solutions\time-tracking\layout.tsx
// Purpose: Route-specific metadata for the Kooni Time Tracking solution page.

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kooni Time Tracking | Your work structure, not ours.",
  description:
    "Flexible employee time tracking, operational dimensions, configurable rules and rates, controlled approval, and flexible downstream outputs.",
};

export default function TimeTrackingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
