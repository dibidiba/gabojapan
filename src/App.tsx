import { useEffect, useState } from 'react';
import { Plane, Map, Car, Shield, Phone, ChevronRight, Star, MapPin, CheckCircle, Mail, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './index.css';

const heroImages = [
  'sakura_fuji_composite.png',
  'cherry-blossom.png',
  'sakura_2.png',
  'sakura_3.png',
  'sakura_4.png'
];

const SakuraPetals = () => {
  return (
    <div className="sakura-container">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="petal"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 10 + 8}px`,
            height: `${Math.random() * 10 + 8}px`,
            animationDuration: `${Math.random() * 8 + 7}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.5 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLineQR, setShowLineQR] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <Plane size={28} className="logo-icon" />
            <span>GaboJapan</span>
          </div>
          <div className="nav-links">
            <a href="#services">서비스 안내</a>
            <a href="#about">특장점</a>
            <a href="#pricing">이용요금</a>
            <Link to="/contact" className="btn btn-primary btn-sm">문의하기</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          {heroImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Japan Sakura Travel ${index + 1}`}
              className={`hero-img ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
          <div className="hero-overlay"></div>
          <SakuraPetals />
        </div>

        <div className="container hero-content animate-fade-in">
          <span className="badge glass">🌸 프리미엄 일본 여행의 시작</span>
          <h1 className="hero-title">
            벚꽃 흩날리는 여행,<br />
            <span className="highlight">가보자재팬</span>이 함께합니다.
          </h1>
          <p className="hero-subtitle">
            도쿄 공항 송영부터 후지산, 하코네, 디즈니랜드까지.<br />신뢰할 수 있는 전문 단독 픽업 서비스로 편안한 여행을 만드세요.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary btn-lg">
              간편 예약하기 <ChevronRight size={20} />
            </Link>
            <a href="#services" className="btn btn-glass btn-lg">
              서비스 둘러보기
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <div className="container relative trust-bar-wrapper animate-fade-in delay-200">
        <div className="trust-bar glass">
          <div className="stat">
            <h3>98%</h3>
            <p>고객 만족도</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>정식 허가 차량</p>
          </div>
          <div className="stat">
            <h3>0원</h3>
            <p>숨겨진 추가비용</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">가보자재팬과 함께하는 여행</h2>
          <p className="section-description">공항 픽업부터 당일치기 근교 투어까지 완벽하게 준비되어 있습니다.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><Plane size={32} /></div>
              <h3>도쿄 공항 송영</h3>
              <p>나리타/하네다 공항에서 호텔까지 프라이빗한 이동. 무거운 짐도 걱정 없습니다.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><MapPin size={32} /></div>
              <h3>후지산 / 하코네 투어</h3>
              <p>벚꽃과 어우러진 후지산의 절경, 따뜻한 하코네 온천을 전용차로 편안하게 즐기세요.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Star size={32} /></div>
              <h3>디즈니 리조트 픽업</h3>
              <p>도쿄 디즈니랜드 / 디즈니씨 방문 시 피로를 덜어드리는 왕복 쾌적 픽업 서비스.</p>
            </div>
            <div className="service-card">
              <div className="service-icon"><Car size={32} /></div>
              <h3>도쿄 시내/맞춤 투어</h3>
              <p>가족, 친구와 함께 가고 싶은 곳만 골라서 다니는 나만의 프라이빗 맞춤 투어입니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="section features-section">
        <div className="container features-content">
          <div className="features-text">
            <h2 className="section-title text-left">왜 가보자재팬인가요?</h2>
            <ul className="feature-list">
              <li>
                <div className="feature-list-icon"><Shield size={24} /></div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    합법적인 운행 및 안심보험
                    <span style={{ fontSize: '0.75rem', background: 'rgba(6, 199, 85, 0.1)', color: '#06C755', padding: '4px 10px', borderRadius: '20px', fontWeight: '800' }}>정식 인가</span>
                  </h4>
                  <p style={{ background: 'rgba(6, 199, 85, 0.05)', padding: '12px 16px', borderRadius: '12px', borderLeft: '4px solid #06C755', marginTop: '8px' }}>
                    <strong style={{ color: '#06C755', fontWeight: '700' }}>공식 허가를 받은 청록색 번호판 영업용 차량</strong>만을 운행하며, <strong style={{ fontWeight: '700' }}>승객 보험이 가입</strong>되어 있습니다.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-list-icon"><Star size={24} /></div>
                <div>
                  <h4>합리적인 요금과 명확한 기준</h4>
                  <p>중간 단계 거품을 빼 합리적인 요금을 제시하며, 예약 전 모든 포함사항을 투명하게 안내합니다.</p>
                </div>
              </li>
              <li>
                <div className="feature-list-icon"><Map size={24} /></div>
                <div>
                  <h4>한국어 전문 드라이버</h4>
                  <p>현지 길에 밝고 소통이 원활한 재일교포 / 한국인 베테랑 기사님이 편안하게 모십니다.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="features-image-wrapper">
            <div className="glass image-card">
              <img src="kind-driver.png" alt="Kind Japanese Driver" className="feature-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles" className="section bg-light">
        <div className="container text-center">
          <h2 className="section-title">프리미엄 운행 차량</h2>
          <p className="section-description">최신형 알파드와 하이에이스로 편안하게 모십니다.</p>
          <div className="vehicles-grid">
            <div className="vehicle-card glass">
              <div className="vehicle-img-wrapper">
                <img src="https://tyopickup.com/wp-content/uploads/2025/06/car-alphado.jpg" alt="Alphard" className="vehicle-img" />
              </div>
              <div className="vehicle-info">
                <h3>토요타 알파드 (Alphard)</h3>
                <p>최대 탑승: 5인 / 수하물: 4개</p>
                <div className="vehicle-features">
                  <span className="v-badge"><CheckCircle size={14} className="mr-1" /> VIP 의전</span>
                </div>
              </div>
            </div>
            <div className="vehicle-card glass">
              <div className="vehicle-img-wrapper">
                <img src="https://tyopickup.com/wp-content/uploads/2025/07/car-hiace-grandcavin.jpg" alt="Hiace" className="vehicle-img" />
              </div>
              <div className="vehicle-info">
                <h3>토요타 하이에이스 (Hiace)</h3>
                <p>최대 탑승: 9인 / 수하물: 10개</p>
                <div className="vehicle-features">
                  <span className="v-badge"><CheckCircle size={14} className="mr-1" /> 대가족 추천</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container text-center">
          <h2 className="section-title">합리적이고 투명한 요금</h2>
          <p className="section-description">추가 비용 없이 모든 것을 포함한 안심 요금제입니다.</p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>하네다 공항 픽업</h3>
              <div className="price"><span>¥</span>25,000<span>~</span></div>
              <ul className="pricing-features text-left">
                <li><CheckCircle size={16} /> 도쿄 23구 내 편도 이동</li>
                <li><CheckCircle size={16} /> 무료 대기 90분</li>
                <li><CheckCircle size={16} /> 통행료 등 포함</li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full mt-4">예약 문의</Link>
            </div>
            <div className="pricing-card popular">
              <div className="popular-badge">가장 인기</div>
              <h3>나리타 공항 픽업</h3>
              <div className="price"><span>¥</span>35,000<span>~</span></div>
              <ul className="pricing-features text-left">
                <li><CheckCircle size={16} /> 도쿄 23구 내 편도 이동</li>
                <li><CheckCircle size={16} /> 무료 대기 90분</li>
                <li><CheckCircle size={16} /> 통행료 등 포함</li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full mt-4">예약 문의</Link>
            </div>
            <div className="pricing-card">
              <h3>맞춤 일일 투어</h3>
              <div className="price"><span>¥</span>55,000<span>~</span></div>
              <ul className="pricing-features text-left">
                <li><CheckCircle size={16} /> 도쿄/후지산/하코네 (10h)</li>
                <li><CheckCircle size={16} /> 일정 자유 조정</li>
                <li><CheckCircle size={16} /> 전용차 단독 운영</li>
              </ul>
              <Link to="/contact" className="btn btn-primary w-full mt-4">예약 문의</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <div className="logo mb-4">
              <Plane size={24} className="logo-icon white" />
              <span>GaboJapan</span>
            </div>
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
            <p className="flex-align" style={{ color: 'rgba(255,255,255,0.7)', marginTop: '8px' }}><Mail size={18} className="mr-2" /> 이메일: <a href="mailto:gabojapan@outlook.jp" style={{ color: 'inherit', textDecoration: 'underline', marginLeft: '4px' }}>gabojapan@outlook.jp</a></p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 GaboJapan. All Rights Reserved.</p>
        </div>
      </footer>

      {/* Floating Chat Buttons */}
      <div className="floating-actions">
        {/* LINE Chat Button */}
        <button
          onClick={() => setShowLineQR(true)}
          className="floating-btn line-btn"
          style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0 }}
        >
          <span className="floating-text">LINE 상담</span>
          <div className="floating-icon">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.5 10.5C22.5 5.53 17.79 1.5 12 1.5C6.21 1.5 1.5 5.53 1.5 10.5C1.5 15.01 5.48 18.79 10.45 19.38C10.84 19.46 11.16 19.72 11.23 20.12C11.3 20.5 11.23 21.05 11.23 21.05C11.23 21.05 11.1 22.13 11.05 22.52C10.95 23.33 11.51 22.86 11.83 22.63C12.15 22.4 17.38 18.42 19.98 15.11C21.6 13.06 22.5 11.84 22.5 10.5Z" />
            </svg>
          </div>
        </button>

        {/* KakaoTalk Chat Button */}
        <a
          href="https://pf.kakao.com/_airi1234/chat"
          target="_blank"
          rel="noreferrer"
          className="floating-btn kakao-btn"
        >
          <span className="floating-text">카톡 상담</span>
          <div className="floating-icon">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="#191919" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C6.477 3 2 6.582 2 11C2 13.84 3.83 16.34 6.613 17.81C6.73 17.85 6.84 17.9 6.94 17.97L5.46 22.11C5.38 22.42 5.68 22.68 5.96 22.51L10.42 18.88C10.93 18.96 11.46 19 12 19C17.523 19 22 15.418 22 11C22 6.582 17.523 3 12 3Z" />
            </svg>
          </div>
        </a>
      </div>

      {/* LINE QR Modal */}
      {showLineQR && (
        <div className="modal-overlay" onClick={() => setShowLineQR(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLineQR(false)}>
              <X size={20} />
            </button>
            <h2 className="modal-title">LINE 상담 안내</h2>
            <p className="modal-subtitle">아래 QR코드를 스캔하여 친구 추가 후<br />무엇이든 문의해 주세요!</p>
            <img src="/line-qr.png" alt="LINE QR Code" className="qr-image" />
            <a 
              href="https://line.me/R/ti/p/@airi1234" 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-primary w-full"
              style={{ background: '#06C755', borderColor: '#06C755' }}
            >
              LINE 앱으로 열기
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
