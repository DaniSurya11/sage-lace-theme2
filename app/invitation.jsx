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
          <p className="eyebrow reveal reveal-1">The Wedding of</p>

          <h1 className="couple reveal reveal-2" id="couple-names">
            <span>Raka</span>
            <span className="ampersand">&amp;</span>
            <span>Sara</span>
          </h1>

          <div className="guest-card reveal reveal-4">
            <div className="guest-block">
              <p>
                <span>Kepada Yth.</span>
                <span>Bapak/ Ibu/ Saudara/ i</span>
              </p>
              <strong id="guestName">{guestName}</strong>
            </div>

            <button
              className="open-button reveal reveal-5"
              id="openInvitation"
              type="button"
              disabled={isOpen}
              onClick={openInvitation}
            >
              <span>OPEN INVITATION</span>
            </button>
          </div>
        </div>
      </section>

      <section className="opened-placeholder" id="innerPage" aria-label="Undangan terbuka">
        <p>Undangan terbuka</p>
      </section>
    </main>
  );
}
