// src/components/home/FAQSection.tsx
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      id: 1,
      question: 'Quels sont les services offerts par CMO VISTAMD ?',
      answer: 'CMO VISTAMD offre une gamme complète de services incluant les services médicaux et paramédicaux, le transport médicalisé 24/7, les évacuations sanitaires, l\'assistance médicale, l\'importation/exportation de matériel biomédical, la maintenance d\'équipements, les partenariats avec les établissements publics et privés, et les formations professionnelles.'
    },
    {
      id: 2,
      question: 'Comment accéder au service d\'urgence 24/7 ?',
      answer: 'Vous pouvez contacter notre ligne d\'urgence 24/7 au +225 07 00 00 00 00. Notre équipe d\'urgence est disponible à tout moment pour répondre à vos besoins médicaux critiques et vous fournir une assistance immédiate.'
    },
    {
      id: 3,
      question: 'Comment est protégée ma confidentialité médicale ?',
      answer: 'CMO VISTAMD respecte strictement la confidentialité de vos données médicales. Toutes les informations sont protégées selon les normes de sécurité les plus strictes et ne sont utilisées que pour fournir les services médicaux appropriés.'
    },
    {
      id: 4,
      question: 'Proposez-vous des services de transport médicalisé ?',
      answer: 'Oui, nous proposons un service complet de transport médicalisé avec des ambulances équipées et du personnel formé. Notre service est disponible 24/7 pour tous types de transport médical, qu\'il soit urgent ou programmé.'
    },
    {
      id: 5,
      question: 'Comment prendre rendez-vous pour une consultation ?',
      answer: 'Vous pouvez prendre rendez-vous en utilisant notre formulaire en ligne sur le site, en nous appelant directement au +225 07 00 00 00 00, ou en visitant notre établissement à Grand-Bassam. Notre équipe vous aidera à trouver l\'horaire qui vous convient.'
    },
    {
      id: 6,
      question: 'Offrez-vous des formations en gestion de matériel médical ?',
      answer: 'Oui, CMO VISTAMD propose des formations professionnelles et du consulting en gestion de matériel et dispositifs médicaux. Contactez notre département formation pour connaître les prochaines sessions disponibles.'
    }
  ]

  return (
    <div id='faq' className="rts-faq-area rts-section-gap" style={{
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
            <HelpCircle size={24} style={{ color: '#22c55e' }} />
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
              Questions Fréquemment Posées
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
            Trouvez les Réponses à Vos Questions
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.8',
            animation: 'slideInDown 0.6s ease-out 0.4s both'
          }}>
            Consultez notre section FAQ pour obtenir rapidement les informations sur nos services, horaires et procédures
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              style={{
                marginBottom: '1rem',
                animation: `slideInUp 0.6s ease-out ${0.5 + index * 0.1}s both`
              }}
            >
              <div
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  padding: '1.5rem',
                  background: openIndex === index 
                    ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 117, 185, 0.05) 100%)'
                    : '#ffffff',
                  border: openIndex === index 
                    ? '2px solid #22c55e' 
                    : '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                    e.currentTarget.style.background = 'rgba(34, 197, 94, 0.02)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.1)'
                    e.currentTarget.style.background = '#ffffff'
                  }
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: '#0f172a',
                  margin: 0,
                  flex: 1,
                  transition: 'color 0.3s ease',
                  color: openIndex === index ? '#22c55e' : '#0f172a'
                }}>
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  style={{
                    color: openIndex === index ? '#22c55e' : '#64748b',
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    flexShrink: 0
                  }}
                />
              </div>

              {/* Answer - Animated collapse */}
              {openIndex === index && (
                <div
                  style={{
                    padding: '1.5rem',
                    background: 'rgba(34, 197, 94, 0.05)',
                    borderLeft: '4px solid #22c55e',
                    marginTop: '-1px',
                    borderRadius: '0 0 1rem 1rem',
                    animation: 'slideInUp 0.3s ease-out'
                  }}
                >
                  <p style={{
                    fontSize: '1rem',
                    color: '#64748b',
                    lineHeight: '1.8',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05) 0%, rgba(16, 117, 185, 0.05) 100%)',
          borderRadius: '1rem',
          animation: 'slideInUp 0.6s ease-out 1.2s both'
        }}>
          <p style={{
            fontSize: '1.1rem',
            color: '#0f172a',
            marginBottom: '1rem',
            fontWeight: '600'
          }}>
            Vous n'avez pas trouvé votre réponse ?
          </p>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            marginBottom: '1.5rem'
          }}>
            Contactez-nous directement pour obtenir de l'aide
          </p>
          <button
            style={{
              padding: '0.8rem 2rem',
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '0.75rem',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 15px 45px rgba(34, 197, 94, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(34, 197, 94, 0.25)'
            }}
          >
            Nous Contacter →
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

export default FAQSection