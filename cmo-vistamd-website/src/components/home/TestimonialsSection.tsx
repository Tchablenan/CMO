// src/components/home/TestimonialsSection.tsx
import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  const testimonials = [
    {
      id: 1,
      name: 'Jean Kouadio',
      role: 'Patient',
      text: 'Excellent service ! L\'équipe médicale de CMO VISTAMD est très professionnelle et attentionnée. Ils ont pris soin de moi avec beaucoup de compassion.',
      rating: 5,
      avatar: '👨‍⚕️',
      image: '/assets/testimonials/01.png'
    },
    {
      id: 2,
      name: 'Marie Dubois',
      role: 'Directrice Clinique',
      text: 'Partenaire fiable et compétent. CMO VISTAMD nous aide régulièrement avec le transport médicalisé et la maintenance d\'équipements. Très recommandé !',
      rating: 5,
      avatar: '👩‍⚕️',
      image: '/assets/testimonials/02.png'
    },
    {
      id: 3,
      name: 'Yannick Sow',
      role: 'Patient',
      text: 'Service d\'urgence impressionnant ! Ils sont arrivés en 15 minutes. L\'équipe était calme, efficace et rassurante. Merci CMO VISTAMD !',
      rating: 5,
      avatar: '👨‍💼',
      image: '/assets/testimonials/03.png'
    },
    {
      id: 4,
      name: 'Fatou Ba',
      role: 'Responsable Formation',
      text: 'Les formations proposées par CMO VISTAMD sont de très haute qualité. Notre personnel a beaucoup appris sur la gestion des équipements médicaux.',
      rating: 5,
      avatar: '👩‍🏫',
      image: '/assets/testimonials/04.png'
    },
    {
      id: 5,
      name: 'Ahmed Hassan',
      role: 'Patient',
      text: 'Transport médicalisé sûr et confortable. Les ambulanciers étaient expérimentés et bienveillants. Un grand merci à toute l\'équipe !',
      rating: 5,
      avatar: '👨‍🦱',
      image: '/assets/testimonials/05.png'
    },
    {
      id: 6,
      name: 'Carla Martinez',
      role: 'Coordinatrice Médicale',
      text: 'CMO VISTAMD montre un vrai engagement envers l\'excellence médicale. Leur assistance nous a énormément aidés dans nos opérations quotidiennes.',
      rating: 5,
      avatar: '👩‍💻',
      image: '/assets/testimonials/06.png'
    }
  ]

  // Auto-slide
  useEffect(() => {
    if (!isAutoplay) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoplay, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoplay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoplay(false)
  }

  // Affiche 3 slides visibles
  const visibleSlides = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ]

  return (
    <div id='testimonials' className="rts-testimonials-area rts-section-gap" style={{
      background: '#ffffff',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments de décoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '-8%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-8%',
        width: '400px',
        height: '400px',
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
          marginBottom: '4rem',
          animation: 'slideInDown 0.6s ease-out 0.2s both'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#0f172a',
            lineHeight: '1.3',
            marginBottom: '1rem'
          }}>
            1200+ Avis de<br />
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Nos Patients
            </span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem',
          animation: 'slideInUp 0.6s ease-out 0.4s both'
        }}>
          {visibleSlides.map((testimonial, index) => (
            <div
              key={testimonial.id}
              style={{
                padding: '2.5rem 2rem',
                background: '#ffffff',
                border: '2px solid rgba(34, 197, 94, 0.1)',
                borderRadius: '1rem',
                boxShadow: '0 15px 50px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                animation: `slideInUp 0.6s ease-out ${0.1 * index}s`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#22c55e'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(34, 197, 94, 0.15)'
                e.currentTarget.style.transform = 'translateY(-10px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.1)'
                e.currentTarget.style.boxShadow = '0 15px 50px rgba(0, 0, 0, 0.08)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Quote Icon */}
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem',
                opacity: 0.3
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{
                display: 'flex',
                gap: '0.3rem',
                marginBottom: '1.5rem'
              }}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    style={{
                      fill: '#fbbf24',
                      color: '#fbbf24'
                    }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p style={{
                fontSize: '1rem',
                color: '#64748b',
                lineHeight: '1.8',
                marginBottom: '2rem',
                minHeight: '80px'
              }}>
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(34, 197, 94, 0.1)'
              }}>
                {/* Avatar */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0
                }}>
                  {testimonial.avatar}
                </div>

                {/* Name & Role */}
                <div>
                  <h5 style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#0f172a',
                    margin: '0 0 0.3rem 0'
                  }}>
                    {testimonial.name}
                  </h5>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#64748b',
                    margin: 0
                  }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Shape decoration (top right) */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, transparent 100%)',
                borderRadius: '50%',
                pointerEvents: 'none'
              }}></div>
            </div>
          ))}
        </div>

        {/* Navigation - Bottom */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          animation: 'slideInUp 0.6s ease-out 0.6s both'
        }}>
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            style={{
              width: '48px',
              height: '48px',
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
            <ChevronLeft size={22} />
          </button>

          {/* Pagination Dots */}
          <div style={{
            display: 'flex',
            gap: '0.6rem',
            alignItems: 'center'
          }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                style={{
                  width: currentIndex === index ? '28px' : '10px',
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
              width: '48px',
              height: '48px',
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
            <ChevronRight size={22} />
          </button>
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

export default TestimonialsSection