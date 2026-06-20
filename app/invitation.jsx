"use client";

import { useEffect, useRef, useState } from "react";

export default function Invitation() {
  const invitationRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState("Nama Tamu");

  useEffect(() => {
    const guest = new URLSearchParams(window.location.search).get("to")?.trim();

    if (guest) {
      setGuestName(guest);
      document.title = `Sage Lace Wedding Invitation - ${guest}`;
    }
  }, []);

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

      <section className="cover-content" aria-labelledby="couple-names">
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

          <div className="guest-card">
            <div className="guest-block">
              <strong id="guestName">{guestName}</strong>
            </div>

            <button
              className="open-button"
              id="openInvitation"
              type="button"
              disabled={isOpen}
              onClick={openInvitation}
            >
              <span>OPEN INVITATION</span>
            </button>
          </div>

          <img
            className="devider devider-bottom"
            src="/assets/devider-bottom.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="opened-placeholder" id="innerPage" aria-label="Undangan terbuka">
        <p>Undangan terbuka</p>
      </section>
    </main>
  );
}
