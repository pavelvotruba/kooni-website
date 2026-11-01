// C:\kooni\kooni-website\app\page.tsx
// Purpose: Public website root routing.
// Change: Removes the Time Tracking solution page from the website root and routes visitors to
// the Kooni Solutions catalog until a separate Kooni corporate homepage is approved.

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/solutions");
}
