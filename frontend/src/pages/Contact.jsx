import { useEffect } from 'react';
import { useSiteImages, imageUrl } from '../hooks/useContent.js';
import { SERVICES } from '../data/servicesData.js';
import './Contact.css';

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.472 3.516A10.918 10.918 0 0 0 12.002 0C5.374 0 .008 5.364.008 11.998c0 2.11.55 4.17 1.594 5.99L0 24l6.252-1.59A11.92 11.92 0 0 0 12 24c6.626 0 11.992-5.364 11.992-11.998a11.88 11.88 0 0 0-3.52-8.486zM12 21.75a9.69 9.69 0 0 1-4.956-1.36l-.356-.213-3.744.952.998-3.648-.26-.41A9.694 9.694 0 0 1 2.25 11.998c0-5.385 4.366-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75zm5.612-7.988c-.304-.152-1.8-.888-2.08-1.008-.28-.116-.484-.174-.688.176-.204.35-.788 1.008-.964 1.146-.18.14-.356.158-.66.006-.304-.154-1.28-.47-2.44-1.502-.9-.806-1.51-1.798-1.688-2.102-.176-.304-.018-.468.132-.62.136-.136.304-.352.456-.528.152-.176.204-.304.304-.504.102-.204.05-.38-.024-.528-.076-.152-.688-1.658-.944-2.27-.25-.596-.502-.514-.688-.522-.18-.01-.384-.012-.588-.012-.204 0-.536.076-.816.38-.28.306-1.072 1.048-1.072 2.558 0 1.51 1.1 2.97 1.252 3.174.152.204 2.168 3.31 5.256 4.64 2.052.846 2.856.92 3.368.79.54-.142.988-.55 1.124-1.06.14-.512.14-.952.1-1.06-.04-.108-.148-.17-.348-.266z" />
    </svg>
  ),
};

export default function Contact() {
  const si = useSiteImages();

  useEffect(() => {
    const reveals = document.querySelectorAll('.ct-reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('ct-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [si.data]);

  return (
    <div className="contact-page">
      <section className="ct-hero" style={{ backgroundImage: `url('${imageUrl(si.get('ct-hero', 0, '/images/md-contact.webp'))}')` }}>
        <div className="ct-hero-inner ct-reveal">
          <p className="eyebrow">Contact</p>
          <h1>Let's Talk</h1>
          <p>Have a project in mind? Let's turn your ideas into something beautifully built.</p>
        </div>
      </section>

      <section className="ct-main">
        <div className="container">
          <div className="ct-head ct-reveal">
            <h2>Get In Touch</h2>
            <p>No forms, no waiting — reach us directly and we'll get back to you the same day.</p>
          </div>

          <div className="ct-cards">
            <a href="tel:+14378698609" className="ct-card ct-reveal">
              <span className="ct-card-icon">{icons.phone}</span>
              <span className="ct-card-label">Call Us</span>
              <span className="ct-card-value">+1 (437) 869-8609</span>
              <span className="ct-card-hint">Mon — Fri · 10:00 — 18:30</span>
            </a>
            <a href="mailto:Renovatemax2max@gmail.com" className="ct-card ct-reveal">
              <span className="ct-card-icon">{icons.mail}</span>
              <span className="ct-card-label">Email Us</span>
              <span className="ct-card-value">Renovatemax2max@gmail.com</span>
              <span className="ct-card-hint">We reply within 24 hours</span>
            </a>
            <a href="https://wa.me/14378698609" target="_blank" rel="noreferrer" className="ct-card ct-reveal">
              <span className="ct-card-icon">{icons.whatsapp}</span>
              <span className="ct-card-label">WhatsApp</span>
              <span className="ct-card-value">Chat With Us</span>
              <span className="ct-card-hint">Fastest response</span>
            </a>
          </div>

          <div className="ct-studio ct-reveal">
            <div className="ct-studio-item">
              <span className="ct-studio-label">Studio</span>
              <h3>Renovate Max2Max Inc.</h3>
              <p>Gurdeep Singh — Founder / Owner</p>
            </div>
            <div className="ct-studio-item">
              <span className="ct-studio-label">Location</span>
              <h3>Edmonton, Alberta</h3>
              <p>Serving Edmonton &amp; surrounding areas</p>
            </div>
            <div className="ct-studio-item">
              <span className="ct-studio-label">Hours</span>
              <h3>Monday — Friday</h3>
              <p>10:00 — 18:30</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ct-links">
        <div className="container">
          <div className="head ct-reveal">
            <h2>What Can We Help With?</h2>
          </div>
          <nav className="ct-links-list ct-reveal">
            {SERVICES.map((s) => (
              <a key={s.slug} href={`/services/${s.slug}`}>{s.title}</a>
            ))}
          </nav>
        </div>
      </section>

      <section className="ct-location">
        <div className="container ct-reveal">
          <h2>Serving Edmonton &amp; Surrounding Areas</h2>
          <p>Edmonton, Alberta</p>
        </div>
      </section>

      <section className="ct-cta">
        <div className="container ct-reveal">
          <h2>Ready to start?</h2>
          <p>Give us a call or send a message — let's take the first step together.</p>
          <div className="ct-cta-actions">
            <a href="tel:+14378698609" className="btn-primary">Call Now <span style={{ fontSize: '1.1rem' }}>→</span></a>
            <a href="https://wa.me/14378698609" target="_blank" rel="noreferrer" className="btn-outline">WhatsApp Us <span style={{ fontSize: '1.1rem' }}>→</span></a>
          </div>
        </div>
      </section>
    </div>
  );
}
