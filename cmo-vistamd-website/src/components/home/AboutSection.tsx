// src/components/home/AboutSection.tsx
import { useState } from 'react'
import { Heart, Award, Users, Shield } from 'lucide-react'

const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    { icon: Heart, label: 'Patients Satisfaits', value: '2500+', color: '#22c55e' },
    { icon: Award, label: 'Années Expérience', value: '15+', color: '#1075B9FF' },
    { icon: Users, label: 'Professionnels Médicaux', value: '50+', color: '#22c55e' },
    { icon: Shield, label: 'Services 24/7', value: '365j', color: '#1075B9FF' }
  ]

  const features = [
    {
      title: 'Soins Centrés sur le Patient',
      description: 'Nous plaçons le bien-être du patient au cœur de chaque décision médicale'
    },
    {
      title: 'Support d\'Urgence',
      description: 'Équipe d\'urgence disponible 24/7 pour les situations critiques'
    },
    {
      title: 'Expertise Médicale',
      description: 'Professionnels qualifiés avec expertise reconnue en Côte d\'Ivoire'
    },
    {
      title: 'Transport Médicalisé',
      description: 'Ambulances équipées et personnel formé pour le transport sécurisé'
    }
  ]

  return (
    <div id='about' className="rts-about-area rts-section-gap" style={{
      background: '#ffffff',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments de décoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
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
        right: '-5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(16, 117, 185, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 12s ease-in-out infinite 3s'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* COLONNE GAUCHE - IMAGES */}
          <div style={{
            position: 'relative',
            minHeight: '600px'
          }}>
            {/* Image principale */}
{/* Image principale */}
<div style={{
  position: 'relative',
  height: '500px',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  boxShadow: '0 30px 80px rgba(34, 197, 94, 0.15)',
  animation: 'slideInLeft 0.8s ease-out'
}}>
  <img 
    src="/assets/images/about/cmo-vistamd.jpg" 
    alt="CMO VISTAMD"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center'
    }}
  />
</div>

            {/* Carte de review - Positionnée en bas à droite */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              right: '0',
              background: '#ffffff',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '1.75rem',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.12)',
              animation: 'slideInUp 0.8s ease-out 0.3s both',
              zIndex: 10,
              width: '320px',
              border: '1px solid rgba(34, 197, 94, 0.1)'
            }}>
              <div style={{
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'bold',
                fontSize: '1.3rem'
              }}>
                Excellence Reconnue
              </div>
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '0.75rem'
              }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{
                    color: '#fbbf24',
                    fontSize: '1.3rem',
                    animation: `float 3s ease-in-out infinite ${i * 0.1}s`
                  }}>⭐</span>
                ))}
              </div>
              <p style={{
                color: '#0f172a',
                fontSize: '0.95rem',
                marginBottom: '0.5rem',
                fontWeight: '600'
              }}>
                TrustScore 4.9 | 2500+ avis
              </p>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem',
                lineHeight: '1.5'
              }}>
                Patients satisfaits de nos services médicaux de qualité
              </p>
            </div>
          </div>

          {/* COLONNE DROITE - CONTENU */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Header */}
            <div style={{
              animation: 'slideInDown 0.6s ease-out 0.2s both'
            }}>
              <span style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '600',
                fontSize: '1.9rem',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em'
              }}>
                À Propos de Nous
              </span>

              <h2 style={{
                fontSize: '2.8rem',
                fontWeight: 'bold',
                color: '#0f172a',
                lineHeight: '1.2',
                marginBottom: '1.5rem'
              }}>
                Excellente Qualité de Soins Médicaux
              </h2>

              <p style={{
                fontSize: '1.5rem',
                color: '#64748b',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                CMO VISTAMD est engagée à fournir des services de soins médicaux exceptionnels avec un accent particulier sur le bien-être des patients. Depuis Grand-Bassam, nous servons notre communauté avec dévouement et expertise.
              </p>
            </div>

            {/* Features 2x2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    padding: '1.25rem',
                    background: 'rgba(34, 197, 94, 0.05)',
                    border: '1px solid rgba(34, 197, 94, 0.2)',
                    borderRadius: '0.75rem',
                    transition: 'all 0.3s ease',
                    animation: `slideInUp 0.6s ease-out ${0.4 + index * 0.1}s both`,
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    e.currentTarget.style.borderColor = '#22c55e'
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    fontWeight: '600',
                    color: '#0f172a',
                    marginBottom: '0.5rem',
                    fontSize: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: '#22c55e' }}>✓</span>
                    {feature.title}
                  </div>
                  <p style={{
                    color: '#64748b',
                    fontSize: '1.3rem',
                    lineHeight: '1.5'
                  }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats 2x2 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.25rem',
              marginBottom: '2rem'
            }}>
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: '#f8fafc',
                      border: '1px solid rgba(34, 197, 94, 0.1)',
                      borderRadius: '0.75rem',
                      transition: 'all 0.3s ease',
                      animation: `slideInUp 0.6s ease-out ${0.6 + index * 0.1}s both`
                    }}
                    onMouseEnter={() => setHoveredStat(index)}
                    onMouseLeave={() => setHoveredStat(null)}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}dd)`,
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      transition: 'all 0.3s ease',
                      transform: hoveredStat === index ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
                      flexShrink: 0
                    }}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <div style={{
                        fontWeight: 'bold',
                        color: '#0f172a',
                        fontSize: '1.5rem'
                      }}>
                        {stat.value}
                      </div>
                      <div style={{
                        color: '#64748b',
                        fontSize: '1.2rem'
                      }}>
                        {stat.label}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

         
            
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @media (max-width: 1024px) {
          .rts-about-area {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutSection