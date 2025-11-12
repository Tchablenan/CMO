// src/components/home/HeroSection.tsx
import { useState } from 'react'

interface AppointmentFormData {
  name: string
  phone: string
  concern: string
  date: string
  department: string
  time: string
}

const HeroSection = () => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    concern: '',
    date: '',
    department: '',
    time: 'Morning 10 AM'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulaire soumis:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div id='home' className="rts-banner-area-three bg_image rts-wsection-gap" style={{
      background: 'linear-gradient(135deg, #214BA5FF 0%, #2E3746FF 50%, #065C2AFF 100%)',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '80px 20px 40px'
    }}>
      {/* Éléments de décoration animés */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite 2s'
      }}></div>

      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        width: '100%',
        position: 'relative', 
        zIndex: 2 
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          alignItems: 'center'
        }}>
          {/* Colonne Gauche - Texte */}
          <div style={{
            animation: 'slideInLeft 0.8s ease-out'
          }}>
            <div>
              <h1 
                style={{
                  fontSize: 'clamp(1.5rem, 8vw, 6rem)',
                  fontWeight: 'bold',
                  lineHeight: '1.2',
                  marginBottom: '1rem',
                  animation: 'slideInDown 0.8s ease-out 0.2s both',
                  color: '#ffffff'
                }}
              >
                CMO 
                <span style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 'black',
                  animation: 'textGradient 3s ease-in-out infinite'
                }}>
                  VISTAMD
                </span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #1075B9 50%, #1075B9 50%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 'black'
                }}>
                  
                </span>
              </h1>
              
              <p style={{
                fontSize: 'clamp(1rem, 4vw, 1.8rem)',
                color: '#e2e8f0',
                marginBottom: '1rem',
                fontWeight: 500,
                animation: 'slideInDown 0.8s ease-out 0.3s both'
              }}>
                Excellence médicale, compassion sans limite
              </p>

              <p style={{
                fontSize: 'clamp(0.85rem, 3vw, 1.2rem)',
                color: '#cbd5e1',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
                maxWidth: '500px',
                animation: 'slideInDown 0.8s ease-out 0.4s both'
              }}>
                Depuis Grand-Bassam, nous offrons des soins immédiats et à long terme avec une équipe dédiée à votre bien-être. Transport médicalisé 24/7, équipements de pointe et expertise médicale de qualité.
              </p>

              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2rem',
                animation: 'slideInUp 0.8s ease-out 0.5s both'
              }}>
                <a
                  href="tel:+2250700000000"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.75rem 1.25rem',
                    borderRadius: '0.5rem',
                    border: '2px solid rgba(34, 197, 94, 0.5)',
                    backgroundColor: 'rgba(34, 197, 94, 0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: 'white'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e'
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.15)'
                    e.currentTarget.style.transform = 'translateY(-3px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)'
                    e.currentTarget.style.backgroundColor = 'rgba(34, 197, 94, 0.05)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>📞</span>
                  <div>
                    <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.8rem)', color: '#94a3b8' }}>Urgence 24/7</div>
                    <div style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1rem)', fontWeight: 'bold', color: '#22c55e' }}>+225 07 00 00 00 00</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Colonne Droite - Formulaire */}
          <div style={{
            animation: 'slideInRight 0.8s ease-out 0.2s both'
          }}>
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              borderRadius: '1rem',
              padding: 'clamp(1rem, 5vw, 2.5rem)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              animation: 'slideInUp 0.8s ease-out 0.3s both'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.5)'
              e.currentTarget.style.transform = 'translateY(-5px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.2)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-50%',
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
                animation: 'rotate 6s linear infinite'
              }}></div>

              <form onSubmit={handleSubmit} style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 4vw, 3rem)',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'white',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Prenez un renndez-vous
                </h3>
                <p style={{ 
                  color: '#D7DDE6FF', 
                  marginBottom: '1rem', 
                  fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)'
                }}>
                  Des soins immédiats et à long terme sont disponibles pour vous.
                </p>
                
                <input 
                  type="text" 
                  name="name"
                  placeholder="Votre Nom" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    marginBottom: '0.75rem',
                    background: 'rgba(51, 65, 85, 0.5)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e'
                    e.currentTarget.style.background = 'rgba(51, 65, 85, 0.8)'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                    e.currentTarget.style.background = 'rgba(51, 65, 85, 0.5)'
                  }}
                />
                
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="Votre Téléphone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    marginBottom: '0.75rem',
                    background: 'rgba(51, 65, 85, 0.5)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                  }}
                />
                
                <input 
                  type="text" 
                  name="concern"
                  placeholder="Quelle est votre préoccupation?" 
                  value={formData.concern}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    marginBottom: '0.75rem',
                    background: 'rgba(51, 65, 85, 0.5)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#22c55e'
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(34, 197, 94, 0.3)'
                  }}
                />
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}>
                  <input 
                    type="date" 
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(51, 65, 85, 0.5)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box'
                    }}
                  />
                  
                  <select 
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    required
                    style={{
                      padding: '0.75rem 1rem',
                      background: 'rgba(51, 65, 85, 0.5)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      borderRadius: '0.5rem',
                      color: 'white',
                      fontSize: '1.5rem',
                      cursor: 'pointer',
                      boxSizing: 'border-box'
                    }}
                  >
                    <option value="">Département</option>
                    <option value="medical">Services Médicaux</option>
                    <option value="ambulance">Transport Médicalisé</option>
                    <option value="equipment">Matériel Médical</option>
                    <option value="training">Formation</option>
                  </select>
                </div>

                <select 
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    marginBottom: '1rem',
                    background: 'rgba(51, 65, 85, 0.5)',
                    border: '1px solid rgba(34, 197, 94, 0.3)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    boxSizing: 'border-box'
                  }}
                >
                  <option value="Morning 10 AM">Matin 10h00</option>
                  <option value="Morning 11 AM">Matin 11h00</option>
                  <option value="Afternoon 2 PM">Après-midi 14h00</option>
                  <option value="Afternoon 3 PM">Après-midi 15h00</option>
                  <option value="Evening 5 PM">Soir 17h00</option>
                </select>
                
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                    color: 'white',
                    fontWeight: 'bold',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(34, 197, 94, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Prendre Rendez-vous
                </button>

                <p style={{
                  fontSize: '1rem',
                  color: '#64748b',
                  textAlign: 'center',
                  marginTop: '0.75rem'
                }}>
                  Vos données sont sécurisées • Réponse sous 24h
                </p>
              </form>
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

        @keyframes textGradient {
          0%, 100% {
            background: linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          50% {
            background: linear-gradient(135deg, #10b981 0%, #059669 50%, #22c55e 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        input::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }

        @media (max-width: 768px) {
          div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSection