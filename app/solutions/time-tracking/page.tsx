// C:\kooni\kooni-website\app\solutions\time-tracking\page.tsx
// Purpose: Public Kooni Time Tracking solution page.
// Change: Relocates the visually approved Time Tracking Landing Page V1 under the Kooni Solutions
// route without changing its approved customer-facing content or behavior.

import Image from "next/image";

const onboardingUrl =
  "https://app.kooni.io/auth/register-client?partnerToken=bca089f388557e776d67dedbd7edb5c8300ca911c399fa37";

const defaultDimensions = ["Department", "Location", "Job", "Phase", "Category"];

const ownDimensions = [
  "Production Room",
  "Equipment",
  "Machine",
  "Work Type",
  "Shift",
  "Crew",
  "Cost Centre",
];

const workflow = [
  "Check In",
  "Confirm Work Assignment",
  "Work",
  "Change Assignment if needed",
  "Check Out",
];

const approvalFlow = [
  "Review Transactions",
  "Ready for Approval",
  "Lock PayRun",
  "Preapprove",
  "Review Findings",
  "Approve PayRun",
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kooni Time Tracking home">
          <Image
            src="/kooni-logo.png"
            alt="Kooni"
            width={72}
            height={72}
            priority
            className="brand-logo"
          />
          <span>
            <strong>Kooni</strong>
            <small>Time Tracking</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#flexibility">Flexibility</a>
          <a href="#workflow">How it works</a>
          <a href="#controls">Controls</a>
          <a href="#outputs">Outputs</a>
        </nav>

        <a className="button button-small" href={onboardingUrl}>
          Become a Client
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">Kooni Time Tracking</p>
            <h1>Time Tracking That Fits the Way Your Organization Works</h1>
            <p className="hero-lead">
              Record employee attendance and work activity, understand what the
              employee worked on, apply your organization&apos;s rules, review
              and approve the resulting transactions, and prepare approved
              information for the systems that need it.
            </p>
            <p className="hero-principle">Your work structure, not ours.</p>

            <div className="hero-actions">
              <a className="button" href={onboardingUrl}>
                Become a Client
              </a>
              <a className="button button-secondary" href="#workflow">
                See how it works
              </a>
            </div>

            <p className="microcopy">
              Start simple or configure more operational detail when your
              organization needs it.
            </p>
          </div>

          <div className="hero-panel" aria-label="Kooni Time Tracking overview">
            <div className="hero-logo-wrap">
              <Image
                src="/kooni-logo.png"
                alt="Kooni logo"
                width={360}
                height={360}
                className="hero-logo"
              />
            </div>
            <div className="hero-panel-copy">
              <span>Flexible Inputs &amp; Dimensions</span>
              <span>Flexible Rules &amp; Rates</span>
              <span>Controlled Review &amp; Approval</span>
              <span>Flexible Outputs</span>
            </div>
          </div>
        </section>

        <section className="section video-section" aria-labelledby="video-title">
          <div>
            <p className="eyebrow">See the workflow</p>
            <h2 id="video-title">Kooni Time Tracking in practice</h2>
            <p>
              A guided introduction will show how employees record work,
              managers review activity, PayRuns are controlled, and approved
              information is prepared for downstream processing.
            </p>
          </div>
          <div className="video-placeholder">
            <div className="play-mark" aria-hidden="true">
              ▶
            </div>
            <strong>Time Tracking video</strong>
            <span>Coming soon</span>
          </div>
        </section>

        <section className="section" id="flexibility">
          <div className="section-heading centered">
            <p className="eyebrow">Flexible Inputs &amp; Dimensions</p>
            <h2>Your work structure, not ours.</h2>
            <p>
              Kooni Time Tracking starts with a practical default set of
              operational dimensions. Use all of them, use only the ones you
              need, or replace them with dimensions that represent how your
              organization actually works.
            </p>
          </div>

          <div className="dimension-grid">
            <article className="card">
              <span className="card-kicker">Practical default</span>
              <h3>Start with familiar dimensions</h3>
              <div className="pill-list">
                {defaultDimensions.map((dimension) => (
                  <span className="pill" key={dimension}>
                    {dimension}
                  </span>
                ))}
              </div>
              <p>
                These are the default Time Tracking operational dimensions,
                not mandatory Kooni fields.
              </p>
            </article>

            <article className="card card-gold">
              <span className="card-kicker">Your configuration</span>
              <h3>Use your own operational dimensions</h3>
              <div className="pill-list">
                {ownDimensions.map((dimension) => (
                  <span className="pill" key={dimension}>
                    {dimension}
                  </span>
                ))}
              </div>
              <p>
                Or create whatever dimensions reflect the work you actually
                need to capture.
              </p>
            </article>
          </div>

          <div className="statement">
            <strong>Configure what matters. Leave out what doesn&apos;t.</strong>
            <p>
              A simple organization may need only Employee + Location. Another
              may use Employee + Job + Phase. A manufacturer may instead use
              Production Room + Equipment + Work Type.
            </p>
          </div>
        </section>

        <section className="section split-section">
          <div>
            <p className="eyebrow">Employee information</p>
            <h2>As little or as much as you need</h2>
            <p>
              Your payroll or HR system can remain the detailed employee system
              of record, with Kooni storing only the employee information
              required for Time Tracking. Or, when needed, the Employee entity
              can be extended with additional properties and relationships.
            </p>
          </div>

          <div className="choice-grid">
            <article className="mini-card">
              <span>Option 1</span>
              <h3>Minimal Kooni Employee</h3>
              <p>
                Keep detailed employee master information in payroll or HR and
                maintain only what Time Tracking and integration require.
              </p>
            </article>
            <article className="mini-card">
              <span>Option 2</span>
              <h3>Extended Kooni Employee</h3>
              <p>
                Add organization-specific employee properties and relationships
                when Kooni needs more operational information.
              </p>
            </article>
          </div>
        </section>

        <section className="section rate-section">
          <div className="section-heading">
            <p className="eyebrow">Flexible Rules &amp; Rates</p>
            <h2>Your dimensions can drive business rules</h2>
            <p>
              Operational dimensions are not only descriptive. A configurable
              pay-rate matrix can determine the applicable rate from a
              combination of dimensions rather than requiring one fixed rate
              structure.
            </p>
          </div>

          <div className="rate-examples">
            <div>
              <span>Employee + Job</span>
              <strong>→ Rate</strong>
            </div>
            <div>
              <span>Employee + Department + Shift</span>
              <strong>→ Rate</strong>
            </div>
            <div>
              <span>Employee + Production Room + Work Type</span>
              <strong>→ Rate</strong>
            </div>
          </div>
        </section>

        <section className="section" id="workflow">
          <div className="section-heading centered">
            <p className="eyebrow">Employee Time Tracking</p>
            <h2>Capture attendance and the work behind the hours</h2>
            <p>
              Employees can keep one continuous attendance session while
              changing permitted work assignments as their work changes during
              the day.
            </p>
          </div>

          <div className="flow-row">
            {workflow.map((step, index) => (
              <div className="flow-step" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className="example-day">
            <div>
              <strong>8:00</strong>
              <span>Check In</span>
            </div>
            <div>
              <strong>8:00–10:30</strong>
              <span>Job A / Phase 1</span>
            </div>
            <div>
              <strong>10:30–12:00</strong>
              <span>Job A / Phase 2</span>
            </div>
            <div>
              <strong>12:00–4:00</strong>
              <span>Job B / Phase 1</span>
            </div>
            <div>
              <strong>4:00</strong>
              <span>Check Out</span>
            </div>
          </div>
        </section>

        <section className="section more-than-time">
          <div className="section-heading">
            <p className="eyebrow">More than time</p>
            <h2>Keep operational context connected to the work</h2>
          </div>
          <div className="feature-grid">
            {[
              ["Work Assignments", "Capture the configured dimensions that describe what the employee worked on."],
              ["Rates & Calculations", "Apply configured rates, formulas and calculated values where required."],
              ["Expenses", "Include applicable employee expenses and reimbursements in downstream processing."],
              ["Notes & Documents", "Keep contextual notes and supporting evidence connected to operational records."],
            ].map(([title, text]) => (
              <article className="feature-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <p className="library-note">
            Documents created or attached through Time Tracking contribute to
            the organization&apos;s common Documentation Library rather than
            creating a separate Time Tracking document silo.
          </p>
        </section>

        <section className="section" id="controls">
          <div className="section-heading centered">
            <p className="eyebrow">Controlled Review &amp; Approval</p>
            <h2>Review before approved information moves downstream</h2>
            <p>
              Managers can review Time, Expenses and Transactions. Applicable
              transactions then move through a controlled PayRun process rather
              than simply exporting whatever was entered.
            </p>
          </div>

          <div className="approval-flow">
            {approvalFlow.map((step, index) => (
              <div className="approval-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>

          <div className="control-grid">
            <article className="card">
              <span className="card-kicker">Preapprove</span>
              <h3>Check before final approval</h3>
              <p>
                Configured controls can identify unusual conditions before
                information is approved.
              </p>
              <ul>
                <li>Expected vs Actual Hours</li>
                <li>Hours Worked Variance</li>
                <li>Regular Pay Variance</li>
                <li>Employees added to the PayRun</li>
                <li>Employees missing from the PayRun</li>
              </ul>
            </article>

            <article className="card">
              <span className="card-kicker">Review findings</span>
              <h3>Explain and accept exceptions</h3>
              <p>
                Findings requiring attention can be reviewed, explained and
                accepted before final PayRun approval.
              </p>
              <p>
                The controls are configurable so the approval process can
                reflect the organization&apos;s requirements.
              </p>
            </article>
          </div>
        </section>

        <section className="section outputs-section" id="outputs">
          <div className="section-heading centered">
            <p className="eyebrow">Flexible Outputs</p>
            <h2>Your required output, not ours.</h2>
            <p>
              Approved information can remain at individual transaction detail
              or be summarized and grouped according to the receiving
              system&apos;s requirements.
            </p>
          </div>

          <div className="output-grid">
            <div>Individual transaction detail</div>
            <div>Employee + Pay Component</div>
            <div>Employee + Job</div>
            <div>Employee + Department + Pay Component</div>
            <div>Summarized payroll totals</div>
            <div>Other configured grouping</div>
          </div>

          <div className="output-actions">
            <span>Print</span>
            <span>Excel</span>
            <span>CSV</span>
            <span>API</span>
          </div>
        </section>

        <section className="section concept-section">
          <div className="section-heading centered">
            <p className="eyebrow">One configurable flow</p>
            <h2>From flexible input to flexible output</h2>
          </div>

          <div className="concept-flow">
            <div>
              <strong>Flexible Inputs &amp; Dimensions</strong>
              <span>Use the default dimensions or your own.</span>
            </div>
            <b>↓</b>
            <div>
              <strong>Flexible Properties</strong>
              <span>Capture only the information your organization needs.</span>
            </div>
            <b>↓</b>
            <div>
              <strong>Flexible Rules &amp; Rates</strong>
              <span>Apply configured logic and dimensional rate matrices.</span>
            </div>
            <b>↓</b>
            <div>
              <strong>Controlled Review &amp; Approval</strong>
              <span>Review transactions, controls and PayRuns.</span>
            </div>
            <b>↓</b>
            <div>
              <strong>Flexible Outputs</strong>
              <span>Keep detail or summarize for the receiving system.</span>
            </div>
          </div>
        </section>

        <section className="section integration-section">
          <div>
            <p className="eyebrow">Fits your technology environment</p>
            <h2>Complement the systems you already use</h2>
            <p>
              Kooni Time Tracking does not need to become the master system for
              every piece of organizational information. Payroll, HR,
              accounting and other business systems can continue performing
              their appropriate roles.
            </p>
          </div>

          <div className="system-flow">
            <div>
              <strong>Payroll / HR System</strong>
              <span>Detailed employee and payroll master information</span>
            </div>
            <b>↕</b>
            <div className="system-flow-kooni">
              <strong>Kooni Time Tracking</strong>
              <span>
                Operational time, assignments, job costing, review, controls
                and approved transaction information
              </span>
            </div>
            <b>↕</b>
            <div>
              <strong>Downstream Systems</strong>
              <span>Payroll, accounting, job costing, reporting and more</span>
            </div>
          </div>
        </section>

        <section className="section final-cta">
          <Image
            src="/kooni-logo.png"
            alt="Kooni"
            width={110}
            height={110}
            className="final-logo"
          />
          <div>
            <p className="eyebrow">Kooni Time Tracking</p>
            <h2>Your work structure, not ours.</h2>
            <p>
              Define what information matters, how work is classified, how
              applicable rules are evaluated, and how approved information
              needs to leave the system.
            </p>
          </div>
          <a className="button" href={onboardingUrl}>
            Become a Client
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">
          <Image src="/kooni-logo.png" alt="" width={44} height={44} />
          <span>Kooni Time Tracking</span>
        </div>
        <p>Configurable operational time tracking and controlled processing.</p>
        <a href={onboardingUrl}>Become a Client</a>
      </footer>
    </div>
  );
}
