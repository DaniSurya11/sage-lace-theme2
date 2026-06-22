"use client";

import { useEffect, useRef, useState } from "react";

export default function Invitation() {
  const invitationRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [guestName, setGuestName] = useState("Nama Tamu");

  useEffect(() => {
    const guest = new URLSearchParams(window.location.search).get("to")?.trim();

    if (guest) {
      setGuestName(guest);
      document.title = `Sage Lace Wedding Invitation - ${guest}`;
    }
  }, []);

  const revealGuestCard = () => {
    setIsEnvelopeOpen(true);
  };

  const openInvitation = () => {
    setIsOpen(true);
  };

  return (
    <main
      className={`invitation relative mx-auto ${isOpen ? "is-open" : ""}`}
      id="invitation"
      ref={invitationRef}
    >
      <div className="background" aria-hidden="true" />
      <img className="lace lace-top" src="/assets/lace-top.png" alt="" aria-hidden="true" />
      <img className="lace lace-bottom" src="/assets/lace-bottom.png" alt="" aria-hidden="true" />
      <img className="boma-lace boma-lace-top" src="/assets/laceboma-mobile-transparent.png" alt="" aria-hidden="true" />
      <img className="boma-lace boma-lace-bottom" src="/assets/laceboma-mobile-transparent.png" alt="" aria-hidden="true" />

      <section
        className={`envelope-gate ${isEnvelopeOpen ? "is-envelope-open" : ""}`}
        aria-label="Pembuka undangan"
        hidden={isOpen}
      >
        <p className="envelope-kicker">A Special Invitation</p>

        <div className="envelope-stage">
          <button
            className="closed-envelope-button"
            type="button"
            aria-label="Buka amplop"
            onClick={revealGuestCard}
          >
            <img
              className="envelope-layer closed-envelope"
              src="/assets/closed-envelope-transparent.png"
              alt=""
              aria-hidden="true"
            />
          </button>

          <div className="open-envelope-stack" aria-hidden={!isEnvelopeOpen}>
            <img
              className="envelope-layer envelope-back"
              src="/assets/open-envelope-back-only.png"
              alt=""
              aria-hidden="true"
            />
            <button
              className="guest-reveal-card"
              type="button"
              aria-label={`Buka undangan untuk ${guestName}`}
              onClick={openInvitation}
              tabIndex={isEnvelopeOpen ? 0 : -1}
            >
              <img className="guest-card-shadow-img" src="/assets/guest-card-shadow.png" alt="" aria-hidden="true" />
              <img className="guest-card-img" src="/assets/guest-card-transparent.png" alt="" aria-hidden="true" />
              <span className="guest-card-copy">
                <span>Kepada Yth.</span>
                <strong>{guestName}</strong>
                <em>Buka Undangan</em>
              </span>
            </button>
            <img
              className="envelope-layer envelope-front"
              src="/assets/ribbon-seal-front-overlay.png"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <p className="envelope-hint">{isEnvelopeOpen ? "Tap kartu untuk masuk" : "Tap to Open"}</p>
      </section>

      <section className="cover-content" aria-labelledby="couple-names" hidden={!isOpen}>
        <div className="invitation-card">
          <p className="eyebrow">The Wedding of</p>
          <img
            className="devider devider-top"
            src="/assets/devider-top.png"
            alt=""
            aria-hidden="true"
          />

          <h1 className="couple" id="couple-names">
            <span>Aldo Septian</span>
            <span className="ampersand">&amp;</span>
            <span>Tiara Putri</span>
          </h1>

          <img
            className="devider devider-bottom"
            src="/assets/devider-bottom.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="opened-placeholder" id="innerPage" aria-label="Undangan terbuka" hidden>
        <p>Undangan terbuka</p>
      </section>
    </main>
  );
}
