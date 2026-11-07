// C:\kooni\kooni-website\app\solutions\time-tracking\TimeTrackingVideo.tsx
// Purpose: English, Czech, and Spanish Cloudflare Stream player for the public Kooni Time Tracking solution page.
// Change: Adds Spanish video selection; English remains the default and Czech remains available.

"use client";

import { useState } from "react";

type VideoLanguage = "en" | "cs" | "es";

type TimeTrackingVideoProps = {
  englishVideoId: string;
  czechVideoId: string;
  spanishVideoId: string;
};

const cloudflareStreamCustomerCode = "customer-nvac03smcgg0ti2n";

export default function TimeTrackingVideo({
  englishVideoId,
  czechVideoId,
  spanishVideoId,
}: TimeTrackingVideoProps) {
  const [language, setLanguage] = useState<VideoLanguage>("en");

  const activeVideoId =
    language === "en" ? englishVideoId : language === "cs" ? czechVideoId : spanishVideoId;
  const activeLanguageLabel = language === "en" ? "English" : language === "cs" ? "Čeština" : "Español";

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
        <button
          type="button"
          className={`video-language-button${language === "es" ? " is-active" : ""}`}
          onClick={() => setLanguage("es")}
          aria-pressed={language === "es"}
        >
          Español
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
