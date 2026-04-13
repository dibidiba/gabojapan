import { useState, useEffect } from 'react';
import { Plane, MapPin, Phone, Mail, Clock, ChevronRight, Send, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    sessionStorage.setItem('scrollTo', id);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    fetch("https://formsubmit.co/ajax/gaboja@gabojapan.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        이름: formData.name,
        이메일: formData.email,
        전화번호: formData.phone,
        문의제목: formData.subject,
        문의내용: formData.message
      })
    })
      .then(response => response.json())
      .then(() => {
        setSubmitted(true);
        // 제출 성공 후 폼 초기화
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 4000);
      })
      .catch(error => {
        console.error("전송 에러:", error);
        alert("이메일 전송에 실패했습니다. 잠시 후 다시 시도해주세요.");
      });
  };

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <Link to="/" className="logo">
            <Plane size={28} className="logo-icon" />
            <span>GaboJapan</span>
          </Link>
          <div className="nav-links">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>서비스 안내</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>특장점</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')}>이용요금</a>
            <Link to="/contact" className="btn btn-primary btn-sm">문의하기</Link>
          </div>
        </div>
      </nav>

      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <img src="sakura_fuji_composite.png" alt="Contact Hero" className="contact-hero-img" />
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">문의 및 예약하기</h1>
          <div className="contact-breadcrumb">
            <Link to="/">Home</Link>
            <ChevronRight size={16} />
            <span>문의 및 예약하기</span>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container contact-layout">
          {/* Left: Contact Info */}
          <div className="contact-info-side">
            <span className="contact-label">Get in Touch</span>
            <h2 className="contact-info-title">GaboJapan 안내</h2>

            <div className="contact-info-grid">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4>회사위치</h4>
                  <p>도쿄도 에도가와구 나카카사이 6-3-5</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Phone size={22} />
                </div>
                <div>
                  <h4>연락전화</h4>
                  <p>
                    휴대폰: <a href="tel:+81-90-6560-3736">+81-90-6560-3736</a><br />
                    카톡아이디: airi1234
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={22} />
                </div>
                <div>
                  <h4>이메일</h4>
                  <p><a href="mailto:gaboja@gabojapan.com">gaboja@gabojapan.com</a></p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock size={22} />
                </div>
                <div>
                  <h4>영업시간</h4>
                  <p>AM 09:00 ~ PM 19:00</p>
                  <p className="contact-note">
                    전화 상담 및 안내는 영업시간 내에만 가능합니다.<br />
                    영업시간 외 문의는 문의하기 폼을 이용해 주세요.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-kakao-tip">
              <CheckCircle size={18} />
              <span>카카오톡 아이디를 추가하시면, 카카오톡 무료 통화로 전화요금 부담 없이 상담이 가능합니다.</span>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="contact-form-card">
            <span className="contact-label">Send Message</span>
            <h2 className="contact-form-title">문의 및 예약하기</h2>
            <p className="contact-form-desc">
              편리하고 신속한 문의 및 예약 서비스로, 궁금한 점이나 예약 요청을 편하게 접수하실 수 있습니다.
            </p>
            <p className="contact-required-note">＊마크는 필수입력란 입니다.</p>

            {submitted ? (
              <div className="contact-success">
                <CheckCircle size={48} />
                <h3>문의가 접수되었습니다!</h3>
                <p>빠른 시일 내에 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="이름*"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="이메일"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="전화번호*"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="문의제목"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group full-width">
                  <textarea
                    name="message"
                    placeholder="문의내용*"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-submit">
                  <Send size={18} />
                  문의하기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <Link to="/" className="logo mb-4">
              <Plane size={24} className="logo-icon white" />
              <span>GaboJapan</span>
            </Link>
            <p className="footer-desc">당신의 편안하고 아름다운 일본 여행을 책임집니다.</p>
          </div>
          <div className="footer-contact">
            <h4>예약 및 문의</h4>
            <div style={{ marginBottom: '16px' }}>
              <a
                href="https://pf.kakao.com/_airi1234/chat"
                target="_blank"
                rel="noreferrer"
                className="flex-align"
                style={{ display: 'inline-flex', padding: '12px 24px', background: '#FEE500', color: '#191919', borderRadius: '30px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 15px rgba(254, 229, 0, 0.3)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#191919" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M12 3C6.477 3 2 6.582 2 11C2 13.84 3.83 16.34 6.613 17.81C6.73 17.85 6.84 17.9 6.94 17.97L5.46 22.11C5.38 22.42 5.68 22.68 5.96 22.51L10.42 18.88C10.93 18.96 11.46 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z" />
                </svg>
                카카오톡 상담하기 (ID: airi1234)
              </a>
            </div>
            <p className="flex-align" style={{ color: 'rgba(255,255,255,0.7)' }}><Phone size={18} className="mr-2" /> 고객센터: +81-90-6560-3736 (09:00 - 18:00 연중무휴)</p>
            <p className="flex-align" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}><Mail size={18} className="mr-2" /> 이메일: <a href="mailto:gaboja@gabojapan.com" style={{ color: 'inherit', textDecoration: 'underline', marginLeft: '4px' }}>gaboja@gabojapan.com</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 GaboJapan. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactPage;
