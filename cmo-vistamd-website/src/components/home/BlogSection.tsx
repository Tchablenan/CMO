// src/components/home/BlogSection.tsx
import { useState } from 'react'
import { Calendar, User, ArrowRight, Search, ChevronDown } from 'lucide-react'

const BlogSection = () => {
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const categories = ['Tous', 'Santé', 'Urgences', 'Conseils', 'News']

  const articles = [
    {
      id: 1,
      title: 'L\'importance de l\'urgence médicale 24/7',
      category: 'Urgences',
      excerpt: 'Découvrez pourquoi avoir accès à des services d\'urgence 24/7 est crucial pour votre santé et celle de votre famille.',
      date: '15 Nov 2024',
      author: 'Dr. Moustapha',
      image: '/assets/medi.jpg',
      color: '#22c55e'
    },
    {
      id: 2,
      title: 'Transport médicalisé : ce qu\'il faut savoir',
      category: 'Conseils',
      excerpt: 'Guide complet sur le transport médicalisé, ses avantages et comment l\'utiliser en cas de besoin.',
      date: '12 Nov 2024',
      author: 'Équipe CMO',
      image: '/assets/49990.jpg',
      color: '#1075B9'
    },
    {
      id: 3,
      title: 'Prévention et bien-être : nos conseils',
      category: 'Santé',
      excerpt: 'Conseils pratiques pour maintenir une bonne santé et prévenir les maladies courantes.',
      date: '08 Nov 2024',
      author: 'Dr. Smith',
      image: '/assets/ethnic-doctor-working-with-patient.jpg',
      color: '#22c55e'
    },
    {
      id: 4,
      title: 'CMO VISTAMD inaugure un nouveau service',
      category: 'News',
      excerpt: 'Nouvelle section d\'assistance médicale pour renforcer notre engagement envers nos patients.',
      date: '05 Nov 2024',
      author: 'Communication',
      image: '/assets/person-their-job-position.jpg',
      color: '#1075B9'
    },
    {
      id: 5,
      title: 'Gestion des équipements médicaux modernes',
      category: 'Conseils',
      excerpt: 'Tout ce que les professionnels doivent savoir sur la maintenance des équipements médicaux.',
      date: '02 Nov 2024',
      author: 'Équipe Technique',
      image: '/assets/medical.jpg',
      color: '#22c55e'
    },
    {
      id: 6,
      title: 'Formations médicales : nouvelles sessions',
      category: 'News',
      excerpt: 'Inscrivez-vous à nos nouvelles formations en gestion de matériel et dispositifs médicaux.',
      date: '30 Oct 2024',
      author: 'Département Formation',
      image: '/assets/formation.png',
      color: '#1075B9'
    }
  ]

  const filteredArticles = selectedCategory === 'Tous' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory)

  return (
    <div id='blog' className="rts-blog-area rts-section-gap" style={{
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
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem'
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
            Actualités & Blog
          </span>

          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: '#0f172a',
            lineHeight: '1.2',
            marginBottom: '1.5rem',
            animation: 'slideInDown 0.6s ease-out 0.3s both'
          }}>
            Articles et Conseils Médicaux
          </h2>

          <p style={{
            fontSize: '1.15rem',
            color: '#64748b',
            lineHeight: '1.8',
            animation: 'slideInDown 0.6s ease-out 0.4s both'
          }}>
            Restez informé avec nos derniers articles sur la santé, les conseils médicaux et les actualités de CMO VISTAMD
          </p>
        </div>

        {/* Filtres de catégories - Dropdown */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '3rem',
          animation: 'slideInUp 0.6s ease-out 0.5s both'
        }}>
          <div style={{ position: 'relative', minWidth: '200px' }}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              style={{
                width: '100%',
                padding: '0.75rem 1.5rem',
                background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
                color: 'white',
                fontWeight: '600',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: '0.95rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem',
                boxShadow: '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(34, 197, 94, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(34, 197, 94, 0.2)'
              }}
            >
              {selectedCategory}
              <ChevronDown 
                size={18} 
                style={{
                  transition: 'transform 0.3s ease',
                  transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                }}
              />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: 'white',
                border: '2px solid rgba(34, 197, 94, 0.2)',
                borderRadius: '0.75rem',
                marginTop: '0.5rem',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)',
                zIndex: 1000,
                overflow: 'hidden',
                animation: 'slideInUp 0.3s ease-out'
              }}>
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category)
                      setIsDropdownOpen(false)
                    }}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1.5rem',
                      background: selectedCategory === category 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'transparent',
                      color: selectedCategory === category ? '#22c55e' : '#0f172a',
                      fontWeight: selectedCategory === category ? '600' : '500',
                      border: 'none',
                      borderBottom: index < categories.length - 1 ? '1px solid rgba(34, 197, 94, 0.1)' : 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      fontSize: '0.95rem',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(34, 197, 94, 0.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = selectedCategory === category 
                        ? 'rgba(34, 197, 94, 0.1)' 
                        : 'transparent'
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Articles Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {filteredArticles.map((article, index) => (
            <div
              key={article.id}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(34, 197, 94, 0.1)',
                borderRadius: '1rem',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                animation: `slideInUp 0.6s ease-out ${0.6 + index * 0.1}s both`,
                cursor: 'pointer',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={() => setHoveredArticle(index)}
              onMouseLeave={() => setHoveredArticle(null)}
            >
              {/* Image Header */}
              <div style={{
                height: '220px',
                background: `url(${article.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                transform: hoveredArticle === index ? 'scale(1.1)' : 'scale(1)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Fallback si image ne charge pas */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(135deg, ${article.color}, ${article.color}dd)`,
                  display: article.image.includes('http') || article.image.includes('/') ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '80px'
                }}>
                  {article.image}
                </div>
              </div>

              {/* Content */}
              <div style={{
                padding: '1.75rem'
              }}>
                {/* Category Badge */}
                <div style={{
                  display: 'inline-block',
                  background: `${article.color}15`,
                  color: article.color,
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {article.category}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: '#0f172a',
                  marginBottom: '1rem',
                  lineHeight: '1.4',
                  transition: 'color 0.3s ease',
                  color: hoveredArticle === index ? article.color : '#0f172a'
                }}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {article.excerpt}
                </p>

                {/* Meta Info */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(34, 197, 94, 0.1)',
                  marginBottom: '1.5rem',
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={16} style={{ color: article.color }} />
                    {article.date}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <User size={16} style={{ color: article.color }} />
                    {article.author}
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: hoveredArticle === index 
                      ? `linear-gradient(135deg, ${article.color}, ${article.color}dd)` 
                      : `${article.color}15`,
                    color: hoveredArticle === index ? 'white' : article.color,
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem'
                  }}
                >
                  Lire la suite
                  <ArrowRight size={16} style={{
                    transition: 'transform 0.3s ease',
                    transform: hoveredArticle === index ? 'translateX(3px)' : 'translateX(0)'
                  }} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination ou CTA */}
        <div style={{
          textAlign: 'center',
          animation: 'slideInUp 0.6s ease-out 1.2s both'
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#64748b',
            marginBottom: '1.5rem'
          }}>
            Vous voulez voir plus d'articles ?
          </p>
          <button
            style={{
              padding: '0.6rem 1.5rem',
              background: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '0.75rem',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 10px 30px rgba(34, 197, 94, 0.25)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
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
            Voir tous les articles
            <ArrowRight size={20} />
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

export default BlogSection