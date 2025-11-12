// src/components/home/ContactSection.tsx
import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const locations = [
    {
      id: 1,
      name: 'Siège Principal',
      address: 'Grand-Bassam, Abidjan, Côte d\'Ivoire',
      phone: '+225 07 00 00 00 00',
      email: 'contact@cmovistamd.ci',
      hours: 'Lun - Ven: 08:00 - 18:00',
      emergency: '24/7',
      coordinates: { lat: 5.1987, lng: -3.7577 }
    },
    {
      id: 2,
      name: 'Service Urgence 24/7',
      address: 'Centre Médical - Cocody, Abidjan',
      phone: '+225 07 00 00 00 00',
      email: 'urgence@cmovistamd.ci',
      hours: 'Disponible 24h/24',
      emergency: '24/7 - Urgences',
      coordinates: { lat: 5.3403, lng: -4.0083 }
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+225 07 00 00 00 00',
      link: 'tel:+2250700000000'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@cmovistamd.ci',
      link: 'mailto:contact@cmovistamd.ci'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Grand-Bassam, Abidjan',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Horaires',
      value: 'Lun - Ven: 08:00 - 18:00',
      link: '#'
    }
  ]

  return (
    <div id='contact' className="rts-contact-area rts-section-gap" style={{
      background: '#ffffff',
      padding: '100px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Éléments de décoration */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-8%',
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
        right: '-8%',
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
            fontSize: '1rem',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            animation: 'slideInDown 0.6s ease-out 0.2s both'
          }}>
            Nous Contacter
          </span>

          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            animation: 'slideInDown 0.6s ease-out 0.3s both'
          }}>
            Restez en Contact avec Nous
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.8',
            animation: 'slideInDown 0.6s ease-out 0.4s both'
          }}>
            Nous serions heureux de vous aider. Contactez-nous par téléphone, email ou remplissez le formulaire ci-dessous
          </p>
        </div>

        {/* Contact Info Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem',
          animation: 'slideInUp 0.6s ease-out 0.5s both'
        }}>
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <a
                key={index}
                href={info.link}
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'center',
                  cursor: 'pointer'
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
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                  borderRadius: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <Icon size={28} />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#0f172a',
                    marginBottom: '0.5rem'
                  }}>
                    {info.label}
                  </h4>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#64748b',
                    margin: 0
                  }}>
                    {info.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* Main Content - Form + Map */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem',
          alignItems: 'start'
        }}>
          {/* Contact Form */}
          <div style={{
            animation: 'slideInLeft 0.6s ease-out 0.6s both'
          }}>
            <div style={{
              padding: '2.5rem',
              background: '#ffffff',
              border: '2px solid rgba(34, 197, 94, 0.1)',
              borderRadius: '1.5rem',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08)'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#0f172a',
                marginBottom: '2rem'
              }}>
                Envoyez-nous un Message
              </h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Votre Nom"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      background: 'rgba(34, 197, 94, 0.05)',
                      border: '1.5px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '0.75rem',
                      color: '#0f172a',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Votre Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      background: 'rgba(34, 197, 94, 0.05)',
                      border: '1.5px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '0.75rem',
                      color: '#0f172a',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Votre Téléphone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      background: 'rgba(34, 197, 94, 0.05)',
                      border: '1.5px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '0.75rem',
                      color: '#0f172a',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                  />
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      background: 'rgba(34, 197, 94, 0.05)',
                      border: '1.5px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '0.75rem',
                      color: '#0f172a',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Votre Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      background: 'rgba(34, 197, 94, 0.05)',
                      border: '1.5px solid rgba(34, 197, 94, 0.2)',
                      borderRadius: '0.75rem',
                      color: '#0f172a',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#22c55e'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.1)'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '1rem',
                    background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1.05rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(-3px)'
                      e.currentTarget.style.boxShadow = '0 15px 45px rgba(34, 197, 94, 0.4)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = 'none'
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Envoi...
                    </>
                  ) : submitted ? (
                    <>
                      <span>✓</span>
                      Message Envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer le Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Locations Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            animation: 'slideInRight 0.6s ease-out 0.6s both'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#0f172a',
              marginBottom: '0.5rem'
            }}>
              Nos Localités
            </h3>

            {locations.map((location, index) => (
              <div
                key={location.id}
                style={{
                  padding: '2rem',
                  background: '#ffffff',
                  border: '2px solid rgba(34, 197, 94, 0.1)',
                  borderRadius: '1rem',
                  transition: 'all 0.3s ease',
                  animation: `slideInUp 0.6s ease-out ${0.7 + index * 0.1}s both`
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
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <MapPin size={24} style={{ color: '#22c55e', marginTop: '0.25rem', flexShrink: 0 }} />
                  <div>
                    <h4 style={{
                      fontSize: '1.15rem',
                      fontWeight: 'bold',
                      color: '#0f172a',
                      marginBottom: '0.25rem'
                    }}>
                      {location.name}
                    </h4>
                    <p style={{
                      fontSize: '0.95rem',
                      color: '#64748b',
                      margin: 0
                    }}>
                      {location.address}
                    </p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(34, 197, 94, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={16} style={{ color: '#22c55e' }} />
                    <a href={`tel:${location.phone}`} style={{
                      color: '#0f172a',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {location.phone}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail size={16} style={{ color: '#22c55e' }} />
                    <a href={`mailto:${location.email}`} style={{
                      color: '#0f172a',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      {location.email}
                    </a>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Clock size={16} style={{ color: '#22c55e' }} />
                    <span style={{
                      color: '#64748b',
                      fontSize: '0.9rem'
                    }}>
                      {location.hours}
                    </span>
                  </div>
                  <div style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(34, 197, 94, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#22c55e',
                    fontWeight: '600',
                    fontSize: '0.85rem',
                    textAlign: 'center'
                  }}>
                    {location.emergency}
                  </div>
                </div>
              </div>
            ))}
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
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
            transform: translateY(30px);
          }
        }
      `}</style>
    </div>
  )
}

export default ContactSection