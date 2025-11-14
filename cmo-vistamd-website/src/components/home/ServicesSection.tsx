// src/components/home/ServicesSection.tsx
import { useState, useEffect, useRef } from 'react'
import { 
  Heart, 
  Ambulance, 
  Package, 
  GraduationCap, 
  Stethoscope,
  Users,
  Clock,
  Shield,
  
} from 'lucide-react'
import backgroundImage from '@/assets/heart-test.jpg'

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Option: Mettre à true pour afficher l'image de fond, false pour ne pas l'afficher
  const showBackgroundImage = true

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

  const services = [
    {
      id: 1,
      icon: Heart,
      title: 'Services Médicaux et Paramédicaux',
      description: 'Prestations complètes de services médicaux et paramédicaux avec équipe professionnelle qualifiée',
      color: '#22c55e'
    },
    {
      id: 2,
      icon: Ambulance,
      title: 'Transport Médicalisé',
      description: 'Organisation et gestion de transport médicalisé avec ambulances équipées disponibles 24/7',
      color: '#1075B9'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Évacuations Sanitaires',
      description: 'Services d\'évacuation sanitaires sécurisées vers les centres spécialisés et partenaires',
      color: '#22c55e'
    },
    {
      id: 4,
      icon: Users,
      title: 'Assistance Médicale',
      description: 'Assistance et accompagnement médical pour tous types de situations et urgences',
      color: '#1075B9'
    },
    {
      id: 5,
      icon: Package,
      title: 'Matériel Biomédical',
      description: 'Importation, exportation et maintenance d\'équipements médicaux de qualité professionnelle',
      color: '#22c55e'
    },
    {
      id: 6,
      icon: Stethoscope,
      title: 'Maintenance Équipements',
      description: 'Maintenance professionnelle des matériels et équipements médicaux pour durabilité maximale',
      color: '#1075B9'
    },
    {
      id: 7,
      icon: Users,
      title: 'Partenariats EPPH',
      description: 'Mise en place de partenariats stratégiques avec établissements publics et privés',
      color: '#22c55e'
    },
    {
      id: 8,
      icon: GraduationCap,
      title: 'Formation & Conseil',
      description: 'Formations et conseils en gestion de matériel et dispositifs médicaux pour professionnels',
      color: '#1075B9'
    },
    {
      id: 9,
      icon: Heart,
      title: 'Services Additionnels',
      description: 'Diverses prestations de services adaptées à vos besoins médicaux spécifiques',
      color: '#22c55e'
    }
  ]

  const features = [
    { icon: Clock, text: 'Disponible 24/7', color: '#22c55e' },
    { icon: Shield, text: 'Service Sécurisé', color: '#1075B9' },
    { icon: Heart, text: 'Qualité Garantie', color: '#22c55e' },
    { icon: Users, text: 'Équipe Expérimentée', color: '#1075B9' }
  ]

  return (
    <div 
      ref={sectionRef}
      id='services' 
      className="rts-services-area rts-section-gap" 
      style={{
        position: 'relative',
        padding: '100px 0',
        overflow: 'hidden'
      }}
    >
      {/* Image de fond avec overlay */}
      {showBackgroundImage && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 0,
            animation: 'kenBurns 30s ease-in-out infinite alternate'
          }}></div>
          
          {/* Overlay blanc pour lisibilité */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(255, 255, 255, 0.80)',
            zIndex: 1
          }}></div>
        </>
      )}

      {/* Fallback background si pas d'image */}
      {!showBackgroundImage && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#ffffff',
          zIndex: 0
        }}></div>
      )}
      {/* Éléments de décoration animés */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite',
        zIndex: 2
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(16, 117, 185, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite 2s',
        zIndex: 2
      }}></div>

      {/* Particules décoratives */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3
      }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? '#22c55e' : '#1075B9',
              borderRadius: '50%',
              top: `${10 + Math.random() * 80}%`,
              left: `${10 + Math.random() * 80}%`,
              opacity: 0.4,
              animation: `particleFloat ${8 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 4 }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '800px',
          margin: '0 auto 4rem'
        }}>
          <span style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: '600',
            fontSize: '1.9rem',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
            transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
          }}>
            Nos Services
          </span>

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
            Services Médicaux Complets et Intégrés
          </h2>

          <p style={{
            fontSize: '1.25rem',
            color: '#64748b',
            lineHeight: '1.8',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s ease-out 0.4s'
          }}>
            CMO VISTAMD offre une gamme complète de services médicaux adaptés à vos besoins, de l'urgence aux soins spécialisés en passant par le transport et la formation
          </p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.95)',
                  transitionDelay: `${0.5 + index * 0.1}s`,
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  setHoveredService(index)
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)'
                  e.currentTarget.style.boxShadow = `0 20px 50px ${service.color}20`
                }}
                onMouseLeave={(e) => {
                  setHoveredService(null)
                  e.currentTarget.style.transform = 'translateY(0) scale(1)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Glow effect au survol */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(135deg, ${service.color}10, ${service.color}05)`,
                  opacity: hoveredService === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}></div>

                {/* Effet de vague au survol */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: hoveredService === index ? '300%' : '0%',
                  height: hoveredService === index ? '300%' : '0%',
                  background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
                  transform: 'translate(-50%, -50%)',
                  transition: 'all 0.6s ease',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}></div>

                <div style={{
                  position: 'relative',
                  zIndex: 1
                }}>
                  {/* Icon */}
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    marginBottom: '1.5rem',
                    transition: 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transform: hoveredService === index ? 'scale(1.15) rotate(10deg)' : 'scale(1)',
                    boxShadow: hoveredService === index ? `0 15px 40px ${service.color}40` : 'none',
                    animation: hoveredService === index ? 'iconBounce 0.6s ease' : 'none'
                  }}>
                    <Icon size={36} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    transition: 'color 0.3s ease',
                    color: hoveredService === index ? service.color : '#0f172a'
                  }}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#64748b',
                    lineHeight: '1.6'
                  }}>
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div style={{
                    marginTop: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: service.color,
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    transform: hoveredService === index ? 'translateX(5px)' : 'translateX(0)'
                  }}>
                    En savoir plus
                    <span style={{
                      transition: 'transform 0.3s ease',
                      display: 'inline-block',
                      transform: hoveredService === index ? 'translateX(5px)' : 'translateX(0)',
                      animation: hoveredService === index ? 'arrowBounce 0.6s ease infinite' : 'none'
                    }}>
                      →
                    </span>
                  </div>
                </div>

                {/* Border animation au survol */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: '1rem',
                  border: `2px solid ${service.color}`,
                  opacity: hoveredService === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}></div>

                {/* Coin effect */}
                <div style={{
                  position: 'absolute',
                  top: '-2px',
                  right: '-2px',
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${service.color}30, transparent)`,
                  borderTopRightRadius: '1rem',
                  opacity: hoveredService === index ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none'
                }}></div>
              </div>
            )
          })}
        </div>

        {/* Features Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(16, 117, 185, 0.05) 100%)',
          borderRadius: '1.5rem',
          borderTop: '2px solid rgba(34, 197, 94, 0.2)',
          borderBottom: '2px solid rgba(34, 197, 94, 0.2)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.6s ease-out 1.5s, transform 0.6s ease-out 1.5s'
        }}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                  transition: `opacity 0.6s ease-out ${1.6 + index * 0.1}s, transform 0.6s ease-out ${1.6 + index * 0.1}s`
                }}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)`,
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0,
                  animation: isVisible ? `pulse 2s ease-in-out infinite ${index * 0.3}s` : 'none'
                }}>
                  <Icon size={24} />
                </div>
                <span style={{
                  fontWeight: '600',
                  color: '#0f172a',
                  fontSize: '1.05rem'
                }}>
                  {feature.text}
                </span>
              </div>
            )
          })}
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
            transform: scale(1.05);
          }
        }

        @keyframes iconBounce {
          0%, 100% {
            transform: scale(1.15) rotate(10deg);
          }
          50% {
            transform: scale(1.25) rotate(10deg);
          }
        }

        @keyframes arrowBounce {
          0%, 100% {
            transform: translateX(5px);
          }
          50% {
            transform: translateX(10px);
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

        @keyframes kenBurns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.1) translate(-5%, -5%);
          }
        }
      `}</style>
    </div>
  )
}

export default ServicesSection