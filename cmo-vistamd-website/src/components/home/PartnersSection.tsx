// src/components/home/PartnersSection.tsx
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Building2 } from 'lucide-react'

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

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
    <div id='partners' className="rts-partners-area rts-section-gap" style={{
      background: '#ffffff',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments de décoration */}
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
            animation: 'slideInDown 0.6s ease-out 0.2s both'
          }}>
            <Building2 size={24} style={{ color: '#22c55e' }} />
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
            animation: 'slideInDown 0.6s ease-out 0.3s both'
          }}>
            Établissements et Partenaires de Confiance
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.8',
            animation: 'slideInDown 0.6s ease-out 0.4s both'
          }}>
            CMO VISTAMD collabore avec les meilleurs établissements publics et privés pour vous offrir les meilleurs services médicaux
          </p>
        </div>

        {/* Carousel */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          animation: 'slideInUp 0.6s ease-out 0.5s both'
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
                  border: '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInUp 0.6s ease-out ${0.1 * index}s`,
                  cursor: 'pointer',
                  minHeight: '250px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#22c55e'
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(34, 197, 94, 0.15)'
                  e.currentTarget.style.transform = 'translateY(-5px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.1)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Logo */}
                <div style={{
                  width: '150px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(34, 197, 94, 0.05)',
                  borderRadius: '0.75rem',
                  padding: '1rem'
                }}>
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                    marginBottom: '0.5rem'
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
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem'
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
                e.currentTarget.style.transform = 'scale(1.1)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
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
                    transition: 'all 0.3s ease'
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
                e.currentTarget.style.transform = 'scale(1.1)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Autoplay Toggle */}
         
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
      `}</style>
    </div>
  )
}

export default PartnersSection