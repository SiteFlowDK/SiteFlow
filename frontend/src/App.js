import { useState, useEffect } from "react";
import "@/App.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Phone,
  MapPin,
  Star,
  Menu,
  X,
  Stethoscope,
  ShieldCheck,
  Heart,
  AlertCircle,
  Calendar,
  ChevronDown,
} from "lucide-react";

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hjem", label: "Hjem" },
    { href: "#om", label: "Om Klinikken" },
    { href: "#kontakt", label: "Kontakt" },
    { href: "#info", label: "Patientinfo" },
    { href: "#anmeldelser", label: "Anmeldelser" },
  ];

  return (
    <nav
      data-testid="main-navigation"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40"
          : "bg-background"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#hjem"
            className="text-lg md:text-xl font-semibold text-foreground"
            style={{ fontFamily: "Playfair Display, serif" }}
            data-testid="logo-link"
          >
            Læge Christa E. Blaasvær
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-medium text-muted-foreground hover:text-foreground"
                data-testid={`nav-${link.href.replace("#", "")}`}
              >
                {link.label}
              </a>
            ))}
            <a href="tel:+4598121999" data-testid="nav-phone-btn">
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
                Ring nu
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className="md:hidden pb-6 mobile-menu"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-muted-foreground hover:text-foreground py-2"
                  data-testid={`mobile-nav-${link.href.replace("#", "")}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+4598121999" className="mt-2" data-testid="mobile-phone-btn">
                <Button className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Phone className="w-4 h-4 mr-2" strokeWidth={1.5} />
                  Ring til klinikken
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section
      id="hjem"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Decorative blobs */}
      <div className="blob-decoration blob-1" />
      <div className="blob-decoration blob-2" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto section-animate">
          {/* Rating badge */}
          <div
            className="inline-flex items-center gap-2 bg-secondary/80 rounded-full px-4 py-2 mb-8"
            data-testid="rating-badge"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-accent text-accent star-icon"
                  style={{ "--star-index": i }}
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              5.0 bedømmelse
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-foreground mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Tryg og Professionel
            <br />
            <span className="text-primary">Lægehjælp i Aalborg</span>
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl mx-auto">
            Velkommen til Læge Christa Ellefsen Blaasvær. Vi tilbyder personlig
            og omsorgsfuld lægebehandling med fokus på din tryghed og sundhed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+4598121999" data-testid="hero-call-btn">
              <Button className="btn-primary rounded-full px-8 py-6 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" strokeWidth={1.5} />
                Kontakt klinikken
              </Button>
            </a>
            <a href="#kontakt" data-testid="hero-map-btn">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-medium bg-white border border-border text-foreground hover:bg-secondary w-full sm:w-auto"
              >
                <MapPin className="w-5 h-5 mr-2" strokeWidth={1.5} />
                Find os på kort
              </Button>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator hidden md:block">
          <ChevronDown className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const features = [
    {
      icon: Stethoscope,
      title: "Erfaren Læge",
      description:
        "Med mange års erfaring tilbyder vi kvalificeret og professionel lægebehandling.",
    },
    {
      icon: Heart,
      title: "Personlig Omsorg",
      description:
        "Vi sætter patienten i centrum og tager os tid til at lytte og forstå.",
    },
    {
      icon: ShieldCheck,
      title: "Tillid & Tryghed",
      description:
        "Et trygt miljø hvor du kan føle dig sikker og godt tilpas.",
    },
  ];

  return (
    <section
      id="om"
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="about-section"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Om Klinikken
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Læge Christa Ellefsen Blaasvær driver en patientcentreret praksis i
            hjertet af Aalborg, hvor faglighed og menneskelig omsorg går hånd i
            hånd.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="info-card bg-card border border-border/50 shadow-sm rounded-2xl"
              data-testid={`feature-card-${index}`}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-6">
                  <feature.icon
                    className="w-7 h-7 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className="text-xl font-medium text-foreground mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-28" data-testid="contact-section">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Kontakt Os
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Vi er altid klar til at hjælpe dig
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card
              className="info-card bg-card border border-border/50 shadow-sm rounded-2xl"
              data-testid="contact-card"
            >
              <CardContent className="p-8">
                <h3
                  className="text-xl font-medium text-foreground mb-6"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Kontaktoplysninger
                </h3>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Telefon
                      </p>
                      <a
                        href="tel:+4598121999"
                        className="phone-link text-xl font-semibold text-foreground hover:text-primary"
                        data-testid="contact-phone"
                      >
                        +45 98 12 19 99
                      </a>
                    </div>
                  </div>

                  <Separator className="bg-border/50" />

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        Adresse
                      </p>
                      <p className="text-lg text-foreground">
                        Hasserishøj 4
                        <br />
                        9000 Aalborg
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href="tel:+4598121999" data-testid="contact-call-btn">
                    <Button className="w-full rounded-full py-6 text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 btn-primary">
                      <Phone className="w-5 h-5 mr-2" strokeWidth={1.5} />
                      Ring til os nu
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="map-container h-[400px] lg:h-full min-h-[400px]" data-testid="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2169.947!2d9.9043!3d57.0337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b6a2b7c8d9%3A0x0!2sHasserish%C3%B8j%204%2C%209000%20Aalborg%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Klinik lokation"
              data-testid="google-map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Patient Information Section
const PatientInfoSection = () => {
  const infoItems = [
    {
      icon: Calendar,
      title: "Bestil tid",
      description:
        "Ring til klinikken for at bestille en tid. Vi bestræber os på at finde en tid, der passer dig.",
    },
    {
      icon: AlertCircle,
      title: "Akut hjælp",
      description:
        "Ved akut sygdom uden for åbningstid, kontakt lægevagten på 70 15 07 00 eller ring 112 ved livstruende situationer.",
    },
    {
      icon: ShieldCheck,
      title: "Tavshedspligt",
      description:
        "Alle oplysninger behandles fortroligt og i overensstemmelse med gældende lovgivning om patientrettigheder.",
    },
  ];

  return (
    <section
      id="info"
      className="py-20 md:py-28 bg-secondary/30"
      data-testid="patient-info-section"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Patientinformation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Praktiske oplysninger for dig som patient
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {infoItems.map((item, index) => (
            <Card
              key={index}
              className="info-card bg-card border border-border/50 shadow-sm rounded-2xl"
              data-testid={`info-card-${index}`}
            >
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-5">
                  <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <h3
                  className="text-lg font-medium text-foreground mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const ReviewsSection = () => {
  return (
    <section id="anmeldelser" className="py-20 md:py-28" data-testid="reviews-section">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-medium tracking-tight text-foreground mb-4"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Anmeldelser
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-12">
            Hvad vores patienter siger
          </p>

          {/* Rating Display */}
          <Card
            className="info-card bg-card border border-border/50 shadow-sm rounded-2xl max-w-md mx-auto"
            data-testid="review-card"
          >
            <CardContent className="p-10 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 fill-accent text-accent mx-1 star-icon"
                    style={{ "--star-index": i }}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <p
                className="text-5xl font-semibold text-foreground mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
                data-testid="rating-score"
              >
                5.0
              </p>
              <p className="text-muted-foreground">Baseret på patientanmeldelser</p>

              <Separator className="my-8 bg-border/50" />

              <div className="text-left">
                <p
                  className="text-foreground italic leading-relaxed mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  "Altid lækker the på kanden, og der serveres chokolade og god underholdning :)"
                </p>
                <p className="text-sm text-muted-foreground">— Tilfreds patient</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer
      className="py-12 bg-foreground text-primary-foreground"
      data-testid="footer"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3
              className="text-xl font-medium mb-2"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Læge Christa Ellefsen Blaasvær
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Hasserishøj 4, 9000 Aalborg
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="tel:+4598121999"
              className="flex items-center gap-2 text-primary-foreground hover:text-accent transition-colors"
              data-testid="footer-phone"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-medium">+45 98 12 19 99</span>
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-primary-foreground/20" />

        <p className="text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Læge Christa Ellefsen Blaasvær. Alle
          rettigheder forbeholdes.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="App min-h-screen bg-background relative">
      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
        <PatientInfoSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
