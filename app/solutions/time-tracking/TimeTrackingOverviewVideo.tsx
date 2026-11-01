// C:\kooni\kooni-website\app\solutions\time-tracking\TimeTrackingOverviewVideo.tsx
// Purpose: Bilingual Cloudflare Stream player for the animated Kooni Time Tracking product overview.
// Change: Adds the approved English and Czech NotebookLM overview videos in a 16:9 landscape player.

"use client";

import { useState } from "react";

type VideoLanguage = "en" | "cs";

type TimeTrackingOverviewVideoProps = {
  englishVideoId: string;
  czechVideoId: string;
};

const cloudflareStreamCustomerCode = "customer-nvac03smcgg0ti2n";

export default function TimeTrackingOverviewVideo({
  englishVideoId,
  czechVideoId,
}: TimeTrackingOverviewVideoProps) {
  const [language, setLanguage] = useState<VideoLanguage>("en");

  const activeVideoId =
    language === "en" ? englishVideoId : czechVideoId;
  const activeLanguageLabel = language === "en" ? "English" : "Čeština";

  const activeVideoUrl = activeVideoId
    ? `https://${cloudflareStreamCustomerCode}.cloudflarestream.com/${activeVideoId}/iframe`
    : "";

  return (
    <div className="overview-video-player-shell">
      <div className="video-language-switch" aria-label="Product overview video language">
        <button
          type="button"
          className={`video-language-button${language === "en" ? " is-active" : ""}`}
          onClick={() => setLanguage("en")}
          aria-pressed={language === "en"}
        >
          English
        </button>
        <button
          type="button"
          className={`video-language-button${language === "cs" ? " is-active" : ""}`}
          onClick={() => setLanguage("cs")}
          aria-pressed={language === "cs"}
        >
          Čeština
        </button>
      </div>

      <div className="overview-video-player-frame">
        <iframe
          key={activeVideoUrl}
          className="overview-video-player"
          src={activeVideoUrl}
          title={`Kooni Time Tracking product overview — ${activeLanguageLabel}`}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowFullScreen
        />
      </div>
    </div>
  );
}
