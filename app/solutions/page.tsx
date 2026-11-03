// C:\kooni\kooni-website\app\solutions\page.tsx
// Purpose: Public Kooni Solutions catalog.
// Change: Creates the customer-facing destination for the application gateway's
// "Explore Kooni Solutions" link and provides entry to approved solution pages.

import Image from "next/image";

export const metadata = {
  title: "Kooni Solutions | Your business. Your processes. Your Kooni.",
  description:
    "Explore Kooni solutions designed around the way organizations actually work.",
};

export default function SolutionsPage() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="/solutions" aria-label="Kooni Solutions">
          <Image src="/kooni-logo.png" alt="Kooni" width={72} height={72} priority className="brand-logo" />
          <span><strong>Kooni</strong><small>Solutions</small></span>
        </a>
      </header>

      <main>
        <section className="section">
          <div className="section-heading centered">
            <p className="eyebrow">Kooni Solutions</p>
            <h1 className="solutions-title">Solutions that fit the way your organization works</h1>
            <p>
              Explore Kooni solutions and choose the right starting point for your
              organization. Each solution can be configured around the information,
              processes and operational structure that matter to you.
            </p>
          </div>

          <div className="solutions-grid">
            <article className="solution-card">
              <div
                className="solution-card-logo"
                style={{ position: "relative", padding: 0, overflow: "hidden", minHeight: 320 }}
              >
                <Image
                  src="/time-tracking-solution-card-261103-1.png"
                  alt="Time Tracking dashboard with employee punch-in and punch-out clock"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div className="solution-card-copy">
                <p className="eyebrow">Kooni Time Tracking</p>
                <h2>Time Tracking That Fits the Way Your Organization Works</h2>
                <p>
                  Record attendance and work activity, apply configurable rules and
                  rates, review and approve transactions, and prepare approved
                  information for downstream systems.
                </p>
                <p className="hero-principle">Your work structure, not ours.</p>
                <a className="button" href="/solutions/time-tracking">Explore Time Tracking</a>
              </div>
            </article>
          </div>

          <div className="statement solutions-statement">
            <strong>Kooni is built around configurable business solutions.</strong>
            <p>Additional Kooni solutions can be added to this catalog as they are approved for customer use.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/kooni-logo.png" alt="" width={44} height={44} />
          <span>Kooni Solutions</span>
        </div>
        <p>Your business. Your processes. Your Kooni.</p>
        <a href="https://app.kooni.io/">Sign In</a>
      </footer>
    </div>
  );
}
