// src/components/home/PartnersSection.tsx
import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react'

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Animation se déclenche à chaque fois que la section entre dans le viewport
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const partners = [
    {
      id: 1,
      name: 'Hôpital Général',
      logo: '/assets/images/brand/01.webp',
      type: 'Établissement Public'
    },
    {
      id: 2,
      name: 'Clinique Privée',
      logo: '/assets/images/brand/02.webp',
      type: 'Établissement Privé'
    },
    {
      id: 3,
      name: 'Centre Médical',
      logo: '/assets/images/brand/03.webp',
      type: 'Centre Spécialisé'
    },
    {
      id: 4,
      name: 'Laboratoire Médical',
      logo: '/assets/images/brand/04.webp',
      type: 'Laboratoire'
    },
    {
      id: 5,
      name: 'Pharmacie Partenaire',
      logo: '/assets/images/brand/05.webp',
      type: 'Pharmacie'
    }
  ]

  // Auto-slide carousel
  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoplay, partners.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partners.length)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % partners.length)
    setIsAutoplay(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoplay(false)
  }

  // Affiche 3 logos à la fois
  const visibleSlides = [
    partners[currentIndex],
    partners[(currentIndex + 1) % partners.length],
    partners[(currentIndex + 2) % partners.length]
  ]

  return (
    <div 
      ref={sectionRef}
      id='partners' 
      className="rts-partners-area rts-section-gap" 
      style={{
        background: '#ffffff',
        padding: '100px 0',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Éléments de décoration animés */}
      <div style={{
        position: 'absolute',
        top: '5%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '5%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16, 117, 185, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite 2s'
      }}></div>

      {/* Particules décoratives */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? '#22c55e' : '#1075B9',
              borderRadius: '50%',
              top: `${15 + Math.random() * 70}%`,
              left: `${10 + Math.random() * 80}%`,
              opacity: 0.4,
              animation: `particleFloat ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 4rem'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
          }}>
            <Building2 
              size={24} 
              style={{ 
                color: '#22c55e',
                animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none'
              }} 
            />
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: '600',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              Nos Partenaires
            </span>
          </div>

          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
          }}>
            Établissements et Partenaires de Confiance
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.8',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s'
          }}>
            CMO VISTAMD collabore avec les meilleurs établissements publics et privés pour vous offrir les meilleurs services médicaux
          </p>
        </div>

        {/* Carousel */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
          transition: 'opacity 0.6s ease-out 0.5s, transform 0.6s ease-out 0.5s'
        }}>
          {/* Main Carousel Display */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {visibleSlides.map((partner, index) => (
              <div
                key={partner.id}
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: hoveredCard === index ? '2px solid #22c55e' : '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  minHeight: '250px',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                  transitionDelay: `${0.6 + index * 0.1}s`
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Effet de brillance au survol */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: hoveredCard === index ? '0' : '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(34, 197, 94, 0.1), transparent)',
                  transition: 'left 0.6s ease',
                  pointerEvents: 'none'
                }}></div>

                {/* Effet de vague au survol */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: hoveredCard === index ? '250%' : '0%',
                  height: hoveredCard === index ? '250%' : '0%',
                  background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.6s ease',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}></div>

                {/* Badge "Partenaire Officiel" */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  background: 'linear-gradient(135deg, #22c55e, #10b981)',
                  color: 'white',
                  fontSize: '0.65rem',
                  fontWeight: 'bold',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  opacity: hoveredCard === index ? 1 : 0,
                  transform: hoveredCard === index ? 'translateY(0) scale(1)' : 'translateY(-10px) scale(0.8)',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)'
                }}>
                  Partenaire
                </div>

                {/* Logo */}
                <div style={{
                  width: '150px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '0.75rem',
                  padding: '1rem',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transform: hoveredCard === index ? 'scale(1.1) rotate(3deg)' : 'scale(1)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: hoveredCard === index ? 'brightness(1.1)' : 'brightness(1)',
                      transition: 'filter 0.3s ease'
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ 
                  textAlign: 'center',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: hoveredCard === index ? '#22c55e' : '#0f172a',
                    marginBottom: '0.5rem',
                    transition: 'color 0.3s ease'
                  }}>
                    {partner.name}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#64748b'
                  }}>
                    {partner.type}
                  </p>
                </div>

                {/* Checkmark au survol */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                  width: '30px',
                  height: '30px',
                  background: 'linear-gradient(135deg, #22c55e, #10b981)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1rem',
                  opacity: hoveredCard === index ? 1 : 0,
                  transform: hoveredCard === index ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
                  transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  boxShadow: '0 5px 15px rgba(34, 197, 94, 0.4)'
                }}>
                  ✓
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out 0.9s, transform 0.6s ease-out 0.9s'
          }}>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(-10deg)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Navigation */}
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center'
            }}>
              {partners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  style={{
                    width: currentIndex === index ? '30px' : '10px',
                    height: '10px',
                    background: currentIndex === index 
                      ? 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)' 
                      : 'rgba(34, 197, 94, 0.2)',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: currentIndex === index ? '0 4px 12px rgba(34, 197, 94, 0.3)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                border: 'none',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(10deg)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(30px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.4;
          }
          25% {
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.4;
          }
          75% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}

export default PartnersSection