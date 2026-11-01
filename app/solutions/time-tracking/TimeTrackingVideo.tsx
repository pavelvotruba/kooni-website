// C:\kooni\kooni-website\app\solutions\time-tracking\TimeTrackingVideo.tsx
// Purpose: Bilingual Cloudflare Stream player for the public Kooni Time Tracking solution page.
// Change: Uses verified Cloudflare Stream video IDs; English is default and Czech V1 is connected.

"use client";

import { useState } from "react";

type VideoLanguage = "en" | "cs";

type TimeTrackingVideoProps = {
  englishVideoId: string;
  czechVideoId: string;
};

const cloudflareStreamCustomerCode = "customer-nvac03smcgg0ti2n";

export default function TimeTrackingVideo({
  englishVideoId,
  czechVideoId,
}: TimeTrackingVideoProps) {
  const [language, setLanguage] = useState<VideoLanguage>("en");

  const activeVideoId =
    language === "en" ? englishVideoId : czechVideoId;
  const activeLanguageLabel = language === "en" ? "English" : "Čeština";

  const activeVideoUrl = activeVideoId
    ? `https://${cloudflareStreamCustomerCode}.cloudflarestream.com/${activeVideoId}/iframe`
    : "";

  return (
    <div className="video-player-shell">
      <div className="video-language-switch" aria-label="Video language">
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

      {activeVideoUrl ? (
        <div className="video-player-frame">
          <iframe
            key={activeVideoUrl}
            className="video-player"
            src={activeVideoUrl}
            title={`Kooni Time Tracking video — ${activeLanguageLabel}`}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="video-player-pending">
          <div className="play-mark" aria-hidden="true">
            ▶
          </div>
          <strong>{activeLanguageLabel} Time Tracking video</strong>
          <span>Coming soon</span>
        </div>
      )}
    </div>
  );
}
