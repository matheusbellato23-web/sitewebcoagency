document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Sticky Header
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

  // 2. Hamburger Mobile Menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      hamburgerBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });

    // Close menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // 3. Simple Dynamic Keyword Rotation/Typing
  const dynamicTextEl = document.querySelector('.hero-dynamic-text');
  if (dynamicTextEl) {
    const words = ["VENDAS", "RESULTADOS", "LUCROS"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 150;

    function typeEffect() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        dynamicTextEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 80;
      } else {
        dynamicTextEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 150;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pause at full word
        isDeleting = true;
        delay = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
      }

      setTimeout(typeEffect, delay);
    }

    // Start typewriter effect
    setTimeout(typeEffect, 1000);
  }

  // 4. Scroll Reveal Observer
  const revealElements = document.querySelectorAll('.scroll-reveal');
  if (revealElements.length > 0) {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, no need to track it anymore
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      revealObserver.observe(el);
    });
  }

  // 5. Hero Mockup Animations are handled natively in CSS (pulse-cta and move-cursor animations)

  // 6. Contact Form lead capturing handler with Toast Notifications
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName').value;
      const email = document.getElementById('formEmail').value;
      const service = document.getElementById('formService').value;
      const message = document.getElementById('formMessage').value;

      // Simple local simulation of form submission
      if (!name || !email) {
        showToast('Por favor, preencha os campos obrigatórios.', 'error');
        return;
      }

      // Simulate network request
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Enviando...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Show success notification
        showToast(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve!`, 'success');
        
        // Reset form
        contactForm.reset();
      }, 1500);
    });
  }

  // 7. Interactive Website Simulator Controller
  const simSiteCanvas = document.getElementById('simSiteCanvas');
  const simLayoutSelect = document.getElementById('simLayoutSelect');
  const simNicheSelect = document.getElementById('simNicheSelect');
  const simFontSelect = document.getElementById('simFontSelect');
  const paletteBtns = document.querySelectorAll('.palette-btn');
  const customPrimaryInput = document.getElementById('customPrimary');
  const customSecondaryInput = document.getElementById('customSecondary');
  
  const logoUploadInput = document.getElementById('logoUploadInput');
  const resetLogoBtn = document.getElementById('resetLogoBtn');
  const simPreviewLogoImg = document.getElementById('simPreviewLogoImg');
  const simPreviewLogoText = document.getElementById('simPreviewLogoText');

  const simBusinessName = document.getElementById('simBusinessName');
  const simHeadlineInput = document.getElementById('simHeadlineInput');
  const simSubtitleInput = document.getElementById('simSubtitleInput');
  const simCtaText = document.getElementById('simCtaText');

  const simPreviewTag = document.getElementById('simPreviewTag');
  const simPreviewHeadline = document.getElementById('simPreviewHeadline');
  const simPreviewSubtitleDisplay = document.getElementById('simPreviewSubtitleDisplay');
  const simFooterName = document.getElementById('simFooterName');
  
  const simPreviewHeaderCta = document.getElementById('simPreviewHeaderCta');
  const simPreviewHeroCta = document.getElementById('simPreviewHeroCta');
  const simPreviewFormBtn = document.getElementById('simPreviewFormBtn');

  // Checkboxes
  const toggleReviewsCheck = document.getElementById('toggleReviewsCheck');
  const toggleMapCheck = document.getElementById('toggleMapCheck');
  const toggleGalleryCheck = document.getElementById('toggleGalleryCheck');
  const toggleFaqCheck = document.getElementById('toggleFaqCheck');
  const toggleStatsCheck = document.getElementById('toggleStatsCheck');
  const toggleTestimonialsCheck = document.getElementById('toggleTestimonialsCheck');
  const togglePricingCheck = document.getElementById('togglePricingCheck');
  const toggleFormCheck = document.getElementById('toggleFormCheck');
  const toggleWhatsappCheck = document.getElementById('toggleWhatsappCheck');

  // Canvas Section Elements
  const simGoogleReviewsBadge = document.getElementById('simGoogleReviewsBadge');
  const simPreviewMapSection = document.getElementById('simPreviewMapSection');
  const simPreviewGallery = document.getElementById('simPreviewGallery');
  const simPreviewFaq = document.getElementById('simPreviewFaq');
  const simPreviewStatsBar = document.getElementById('simPreviewStatsBar');
  const simPreviewTestimonials = document.getElementById('simPreviewTestimonials');
  const simPreviewPricing = document.getElementById('simPreviewPricing');
  const simPreviewFormSection = document.getElementById('simPreviewFormSection');
  const simPreviewWhatsapp = document.getElementById('simPreviewWhatsapp');

  // Feature Card Element Targets
  const simFeatIcon1 = document.getElementById('simFeatIcon1');
  const simFeatTitle1 = document.getElementById('simFeatTitle1');
  const simFeatDesc1 = document.getElementById('simFeatDesc1');

  const simFeatIcon2 = document.getElementById('simFeatIcon2');
  const simFeatTitle2 = document.getElementById('simFeatTitle2');
  const simFeatDesc2 = document.getElementById('simFeatDesc2');

  const simFeatIcon3 = document.getElementById('simFeatIcon3');
  const simFeatTitle3 = document.getElementById('simFeatTitle3');
  const simFeatDesc3 = document.getElementById('simFeatDesc3');

  const deviceBtns = document.querySelectorAll('.device-btn');
  const previewCanvasWrapper = document.getElementById('previewCanvasWrapper');
  const sendConfigWhatsappBtn = document.getElementById('sendConfigWhatsappBtn');

  const simScrollUpBtn = document.getElementById('simScrollUpBtn');
  const simScrollDownBtn = document.getElementById('simScrollDownBtn');

  // Preset Niche Definitions
  const nichePresets = {
    geral: {
      tag: "SITE DE ALTA CONVERSÃO",
      headline: "Leve a ",
      headlineSuffix: " ao Topo do Mercado",
      subtitle: "Desenvolvimento de soluções web premium ultra-rápidas e pensadas para gerar resultados diários.",
      f1: { icon: "⚡", title: "Alta Velocidade", desc: "Carregamento ultrarrápido validado no Google." },
      f2: { icon: "📱", title: "100% Responsivo", desc: "Perfeito em celulares, tablets e computadores." },
      f3: { icon: "🎯", title: "Foco em Vendas", desc: "Estrutura focada na conversão de visitantes." }
    },
    saude: {
      tag: "CLÍNICA & SAÚDE DIGITAL",
      headline: "Agende Consultas na ",
      headlineSuffix: " com Agilidade",
      subtitle: "Atraia novos pacientes com um site moderno, elegante e integrado diretamente ao agendamento de consultas.",
      f1: { icon: "🩺", title: "Agendamento Fácil", desc: "Pacientes marcam horários em segundos." },
      f2: { icon: "🏥", title: "Especialidades", desc: "Apresentação clara da equipe e tratamentos." },
      f3: { icon: "⭐", title: "Avaliações Reais", desc: "Depoimentos de pacientes satisfeitos." }
    },
    advocacia: {
      tag: "ADVOCACIA & CONSULTORIA",
      headline: "Defenda Seus Direitos com a ",
      headlineSuffix: "",
      subtitle: "Posicione seu escritório de advocacia com autoridade, sobriedade e captação qualificada de clientes.",
      f1: { icon: "⚖️", title: "Autoridade Jurídica", desc: "Apresentação institucional impecável." },
      f2: { icon: "🔒", title: "Sigilo & Confiança", desc: "Canais seguros de envio de documentos." },
      f3: { icon: "💬", title: "Consulta Rápida", desc: "Atendimento direto via WhatsApp corporativo." }
    },
    ecommerce: {
      tag: "LOJA VIRTUAL PRO",
      headline: "Compre Online na ",
      headlineSuffix: " com Segurança",
      subtitle: "Venda seus produtos 24 horas por dia com catálogo automatizado, frete rápido e meios de pagamento integrados.",
      f1: { icon: "🛒", title: "Checkout Rápido", desc: "Pagamentos via Pix, cartão e boleto." },
      f2: { icon: "📦", title: "Cálculo de Frete", desc: "Integração automática com Correios e transportadoras." },
      f3: { icon: "🔥", title: "Ofertas em Destaque", desc: "Banners promocionais e cupom de desconto." }
    },
    beleza: {
      tag: "ESTÉTICA & BELEZA",
      headline: "Realce sua Beleza na ",
      headlineSuffix: "",
      subtitle: "Transforme visitantes em clientes fiéis com uma galeria de fotos deslumbrante e tabela de tratamentos.",
      f1: { icon: "✨", title: "Procedimentos Premium", desc: "Catálogo completo de tratamentos estéticos." },
      f2: { icon: "📸", title: "Galeria Antes/Depois", desc: "Demonstração visual do seu trabalho." },
      f3: { icon: "📅", title: "Reserva de Horários", desc: "Agendamento prático para clientes." }
    },
    gastronomia: {
      tag: "GASTRONOMIA & CARDÁPIO",
      headline: "Saboreie o Melhor na ",
      headlineSuffix: "",
      subtitle: "Cardápio digital interativo, fotos apetitosas e pedidos diretos para mesa ou delivery.",
      f1: { icon: "🍕", title: "Cardápio Digital", desc: "Menu atualizado com fotos e preços." },
      f2: { icon: "🛵", title: "Pedidos via WhatsApp", desc: "Delivery direto sem taxas abusivas de aplicativos." },
      f3: { icon: "📍", title: "Localização & Mapa", desc: "Fácil acesso e reservas de mesa." }
    }
  };

  if (simSiteCanvas) {
    // 7.1 Layout Type Selection
    if (simLayoutSelect) {
      simLayoutSelect.addEventListener('change', (e) => {
        const layoutMode = e.target.value;
        if (layoutMode === 'landing') {
          if (toggleStatsCheck) toggleStatsCheck.checked = true;
          if (togglePricingCheck) togglePricingCheck.checked = false;
          if (toggleFormCheck) toggleFormCheck.checked = true;
          if (toggleMapCheck) toggleMapCheck.checked = false;
        } else if (layoutMode === 'institucional') {
          if (toggleStatsCheck) toggleStatsCheck.checked = true;
          if (togglePricingCheck) togglePricingCheck.checked = true;
          if (toggleMapCheck) toggleMapCheck.checked = true;
          if (toggleFormCheck) toggleFormCheck.checked = true;
        } else if (layoutMode === 'ecommerce') {
          if (togglePricingCheck) togglePricingCheck.checked = true;
          if (toggleGalleryCheck) toggleGalleryCheck.checked = true;
          if (toggleFormCheck) toggleFormCheck.checked = false;
        } else if (layoutMode === 'portfolio') {
          if (toggleGalleryCheck) toggleGalleryCheck.checked = true;
          if (toggleTestimonialsCheck) toggleTestimonialsCheck.checked = true;
          if (toggleFormCheck) toggleFormCheck.checked = true;
        }
        triggerAllCheckboxes();
      });
    }

    function triggerAllCheckboxes() {
      if (simGoogleReviewsBadge && toggleReviewsCheck) simGoogleReviewsBadge.style.display = toggleReviewsCheck.checked ? 'flex' : 'none';
      if (simPreviewMapSection && toggleMapCheck) simPreviewMapSection.style.display = toggleMapCheck.checked ? 'block' : 'none';
      if (simPreviewGallery && toggleGalleryCheck) simPreviewGallery.style.display = toggleGalleryCheck.checked ? 'block' : 'none';
      if (simPreviewFaq && toggleFaqCheck) simPreviewFaq.style.display = toggleFaqCheck.checked ? 'block' : 'none';
      if (simPreviewStatsBar && toggleStatsCheck) simPreviewStatsBar.style.display = toggleStatsCheck.checked ? 'flex' : 'none';
      if (simPreviewTestimonials && toggleTestimonialsCheck) simPreviewTestimonials.style.display = toggleTestimonialsCheck.checked ? 'block' : 'none';
      if (simPreviewPricing && togglePricingCheck) simPreviewPricing.style.display = togglePricingCheck.checked ? 'block' : 'none';
      if (simPreviewFormSection && toggleFormCheck) simPreviewFormSection.style.display = toggleFormCheck.checked ? 'block' : 'none';
      if (simPreviewWhatsapp && toggleWhatsappCheck) simPreviewWhatsapp.style.display = toggleWhatsappCheck.checked ? 'flex' : 'none';
    }

    // 7.2 Palette Selection
    paletteBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        paletteBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const primary = btn.getAttribute('data-primary');
        const secondary = btn.getAttribute('data-secondary');

        simSiteCanvas.style.setProperty('--sim-primary', primary);
        simSiteCanvas.style.setProperty('--sim-secondary', secondary);

        if (customPrimaryInput) customPrimaryInput.value = primary;
        if (customSecondaryInput) customSecondaryInput.value = secondary;
      });
    });

    // 7.3 Custom Color Pickers
    if (customPrimaryInput) {
      customPrimaryInput.addEventListener('input', (e) => {
        paletteBtns.forEach(b => b.classList.remove('active'));
        simSiteCanvas.style.setProperty('--sim-primary', e.target.value);
      });
    }

    if (customSecondaryInput) {
      customSecondaryInput.addEventListener('input', (e) => {
        paletteBtns.forEach(b => b.classList.remove('active'));
        simSiteCanvas.style.setProperty('--sim-secondary', e.target.value);
      });
    }

    // 7.4 Typography Font Style Selection
    if (simFontSelect) {
      simFontSelect.addEventListener('change', (e) => {
        simSiteCanvas.style.setProperty('--sim-font', e.target.value);
      });
    }

    // 7.5 Niche Segment Preset Selection
    if (simNicheSelect) {
      simNicheSelect.addEventListener('change', (e) => {
        const nicheKey = e.target.value;
        const preset = nichePresets[nicheKey] || nichePresets.geral;
        const bName = simBusinessName ? simBusinessName.value.trim() : 'Sua Empresa Aqui';

        if (simPreviewTag) simPreviewTag.textContent = preset.tag;
        
        // Update Headline Input & Display
        const fullHeadline = `${preset.headline}${bName}${preset.headlineSuffix}`;
        if (simHeadlineInput) simHeadlineInput.value = fullHeadline;
        if (simSubtitleInput) simSubtitleInput.value = preset.subtitle;

        updateHeadlineDOM();

        // Update Features
        if (simFeatIcon1) simFeatIcon1.textContent = preset.f1.icon;
        if (simFeatTitle1) simFeatTitle1.textContent = preset.f1.title;
        if (simFeatDesc1) simFeatDesc1.textContent = preset.f1.desc;

        if (simFeatIcon2) simFeatIcon2.textContent = preset.f2.icon;
        if (simFeatTitle2) simFeatTitle2.textContent = preset.f2.title;
        if (simFeatDesc2) simFeatDesc2.textContent = preset.f2.desc;

        if (simFeatIcon3) simFeatIcon3.textContent = preset.f3.icon;
        if (simFeatTitle3) simFeatTitle3.textContent = preset.f3.title;
        if (simFeatDesc3) simFeatDesc3.textContent = preset.f3.desc;
      });
    }

    // Helper to format headline with colored company name
    function updateHeadlineDOM() {
      const bName = simBusinessName ? simBusinessName.value.trim() || 'Sua Empresa Aqui' : 'Sua Empresa Aqui';
      const rawHeadline = simHeadlineInput ? simHeadlineInput.value : `Leve a ${bName} ao Topo do Mercado`;
      
      if (simPreviewHeadline) {
        if (rawHeadline.includes(bName)) {
          const parts = rawHeadline.split(bName);
          simPreviewHeadline.innerHTML = `${parts[0]}<span class="sim-highlight-text" id="simPreviewTitleName">${bName}</span>${parts.slice(1).join(bName)}`;
        } else {
          simPreviewHeadline.textContent = rawHeadline;
        }
      }
      if (simPreviewSubtitleDisplay && simSubtitleInput) {
        simPreviewSubtitleDisplay.textContent = simSubtitleInput.value;
      }
    }

    // 7.6 Logo File Upload & Reset
    if (logoUploadInput) {
      logoUploadInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(evt) {
            simPreviewLogoImg.src = evt.target.result;
            simPreviewLogoImg.style.display = 'block';
            simPreviewLogoText.style.display = 'none';
            if (resetLogoBtn) resetLogoBtn.style.display = 'inline-block';
            showToast('Logo aplicada com sucesso no cabeçalho!', 'success');
          };
          reader.readAsDataURL(file);
        }
      });
    }

    if (resetLogoBtn) {
      resetLogoBtn.addEventListener('click', () => {
        if (logoUploadInput) logoUploadInput.value = '';
        simPreviewLogoImg.src = '';
        simPreviewLogoImg.style.display = 'none';
        simPreviewLogoText.style.display = 'inline';
        resetLogoBtn.style.display = 'none';
        showToast('Logo removida da pré-visualização.', 'info');
      });
    }

    // 7.7 Live Text Inputs Updating
    if (simBusinessName) {
      simBusinessName.addEventListener('input', () => {
        const val = simBusinessName.value.trim() || 'Sua Empresa Aqui';
        if (simPreviewLogoText) simPreviewLogoText.textContent = val.toUpperCase();
        if (simFooterName) simFooterName.textContent = val;
        updateHeadlineDOM();
      });
    }

    if (simHeadlineInput) {
      simHeadlineInput.addEventListener('input', updateHeadlineDOM);
    }

    if (simSubtitleInput) {
      simSubtitleInput.addEventListener('input', () => {
        if (simPreviewSubtitleDisplay) simPreviewSubtitleDisplay.textContent = simSubtitleInput.value;
      });
    }

    if (simCtaText) {
      simCtaText.addEventListener('input', (e) => {
        const val = e.target.value.trim() || 'Solicitar Orçamento';
        if (simPreviewHeaderCta) simPreviewHeaderCta.textContent = val;
        if (simPreviewHeroCta) simPreviewHeroCta.textContent = val + ' →';
        if (simPreviewFormBtn) simPreviewFormBtn.textContent = val + ' →';
      });
    }

    // 7.8 Checkbox Section Toggles
    if (toggleReviewsCheck && simGoogleReviewsBadge) {
      toggleReviewsCheck.addEventListener('change', (e) => {
        simGoogleReviewsBadge.style.display = e.target.checked ? 'flex' : 'none';
      });
    }

    if (toggleMapCheck && simPreviewMapSection) {
      toggleMapCheck.addEventListener('change', (e) => {
        simPreviewMapSection.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (toggleGalleryCheck && simPreviewGallery) {
      toggleGalleryCheck.addEventListener('change', (e) => {
        simPreviewGallery.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (toggleFaqCheck && simPreviewFaq) {
      toggleFaqCheck.addEventListener('change', (e) => {
        simPreviewFaq.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (toggleStatsCheck && simPreviewStatsBar) {
      toggleStatsCheck.addEventListener('change', (e) => {
        simPreviewStatsBar.style.display = e.target.checked ? 'flex' : 'none';
      });
    }

    if (toggleTestimonialsCheck && simPreviewTestimonials) {
      toggleTestimonialsCheck.addEventListener('change', (e) => {
        simPreviewTestimonials.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (togglePricingCheck && simPreviewPricing) {
      togglePricingCheck.addEventListener('change', (e) => {
        simPreviewPricing.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (toggleFormCheck && simPreviewFormSection) {
      toggleFormCheck.addEventListener('change', (e) => {
        simPreviewFormSection.style.display = e.target.checked ? 'block' : 'none';
      });
    }

    if (toggleWhatsappCheck && simPreviewWhatsapp) {
      toggleWhatsappCheck.addEventListener('change', (e) => {
        simPreviewWhatsapp.style.display = e.target.checked ? 'flex' : 'none';
      });
    }

    // 7.9 Device Modes (Desktop / Mobile)
    deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        deviceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const mode = btn.getAttribute('data-device');
        if (mode === 'mobile') {
          previewCanvasWrapper.classList.add('mobile-mode');
        } else {
          previewCanvasWrapper.classList.remove('mobile-mode');
        }
      });
    });

    // 7.10 Send Simulator Configuration to WhatsApp
    if (sendConfigWhatsappBtn) {
      sendConfigWhatsappBtn.addEventListener('click', () => {
        const companyName = simBusinessName ? simBusinessName.value : 'Minha Empresa';
        const layoutText = simLayoutSelect ? simLayoutSelect.options[simLayoutSelect.selectedIndex].text : 'Landing Page';
        const nicheText = simNicheSelect ? simNicheSelect.options[simNicheSelect.selectedIndex].text : 'Serviços Gerais';
        const primaryColor = getComputedStyle(simSiteCanvas).getPropertyValue('--sim-primary').trim();
        
        const hasReviews = toggleReviewsCheck && toggleReviewsCheck.checked ? 'Sim' : 'Não';
        const hasMap = toggleMapCheck && toggleMapCheck.checked ? 'Sim' : 'Não';
        const hasGallery = toggleGalleryCheck && toggleGalleryCheck.checked ? 'Sim' : 'Não';
        const hasFaq = toggleFaqCheck && toggleFaqCheck.checked ? 'Sim' : 'Não';
        const hasStats = toggleStatsCheck && toggleStatsCheck.checked ? 'Sim' : 'Não';
        const hasPricing = togglePricingCheck && togglePricingCheck.checked ? 'Sim' : 'Não';
        const hasTestimonials = toggleTestimonialsCheck && toggleTestimonialsCheck.checked ? 'Sim' : 'Não';
        const hasForm = toggleFormCheck && toggleFormCheck.checked ? 'Sim' : 'Não';
        const hasWhatsapp = toggleWhatsappCheck && toggleWhatsappCheck.checked ? 'Sim' : 'Não';

        const textMsg = `Olá Web Co Agency! Montei um pré-projeto no simulador do site:\n` +
          `• *Empresa:* ${companyName}\n` +
          `• *Estrutura de Layout:* ${layoutText}\n` +
          `• *Segmento:* ${nicheText}\n` +
          `• *Cor Principal:* ${primaryColor}\n` +
          `• *Avaliações Google:* ${hasReviews}\n` +
          `• *Google Maps:* ${hasMap}\n` +
          `• *Galeria de Fotos:* ${hasGallery}\n` +
          `• *Perguntas Frequentes (FAQ):* ${hasFaq}\n` +
          `• *Tabela de Preços:* ${hasPricing}\n` +
          `• *Depoimentos:* ${hasTestimonials}\n` +
          `• *Formulário:* ${hasForm}\n` +
          `• *Botão WhatsApp:* ${hasWhatsapp}\n\n` +
          `Gostaria de solicitar uma proposta comercial para criar este projeto!`;

        const encodedMsg = encodeURIComponent(textMsg);
        window.open(`https://wa.me/5511975702321?text=${encodedMsg}`, '_blank');
      });
    }
  }

  // 8. Toast Notification Creator Helper
  function showToast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✓' : '⚠'}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Trigger visual reflow for transitions
    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    // Remove toast after duration
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.remove();
        if (container.children.length === 0) {
          container.remove();
        }
      }, 400);
    }, 4000);
  }

  // 9. Ambient Moving Particle Background (Antigravity Style)
  const bgCanvas = document.getElementById('ambientParticleCanvas');
  if (bgCanvas) {
    const ctx = bgCanvas.getContext('2d');
    let width = bgCanvas.width = window.innerWidth;
    let height = bgCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = bgCanvas.width = window.innerWidth;
      height = bgCanvas.height = window.innerHeight;
    });

    const numParticles = Math.min(65, Math.floor(width / 20));
    const particles = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 3 + 1.5,
        alpha: Math.random() * 0.5 + 0.4
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 140, 255, ${p.alpha})`;
        ctx.fill();

        // Connect nearby particles with subtle glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 140, 255, ${0.35 * (1 - dist / 160)})`;
            ctx.lineWidth = 1.0;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // 10. Interactive ROI Calculator
  const roiSlider = document.getElementById('roiSlider');
  const roiInvestText = document.getElementById('roiInvestText');
  const roiClicksVal = document.getElementById('roiClicksVal');
  const roiLeadsVal = document.getElementById('roiLeadsVal');
  const roiProfitVal = document.getElementById('roiProfitVal');
  const chartProfitLine = document.getElementById('chartProfitLine');
  const chartProfitArea = document.getElementById('chartProfitArea');

  if (roiSlider) {
    roiSlider.addEventListener('input', (e) => {
      const invest = parseInt(e.target.value);
      roiInvestText.textContent = `R$ ${invest.toLocaleString('pt-BR')}`;
      
      const clicks = Math.floor(invest * 2.5);
      roiClicksVal.textContent = clicks.toLocaleString('pt-BR');
      
      const leads = Math.floor(clicks * 0.07);
      roiLeadsVal.textContent = leads.toLocaleString('pt-BR');
      
      const profit = Math.floor(leads * 42); // 4.2x ROI
      roiProfitVal.textContent = `R$ ${profit.toLocaleString('pt-BR')}`;

      // Dynamically adjust SVG path for visual feedback
      const scale = (invest - 1000) / 19000; // 0 to 1
      const yVal = 140 - (scale * 110);
      const yVal2 = 80 - (scale * 60);
      const yEnd = 30 - (scale * 20);
      
      if (chartProfitLine) {
        chartProfitLine.setAttribute('d', `M 0 200 Q 150 ${yVal} 300 ${yVal2} T 500 ${yEnd}`);
      }
      if (chartProfitArea) {
        chartProfitArea.setAttribute('d', `M 0 200 Q 150 ${yVal} 300 ${yVal2} T 500 ${yEnd} L 500 200 Z`);
      }
    });
  }

  // 11. Interactive Cases switcher (Dperrone Style)
  const caseMenuItems = document.querySelectorAll('.case-menu-item');
  const caseScreenContents = document.querySelectorAll('.case-screen-content');
  const caseBrowserAddress = document.getElementById('caseBrowserAddress');

  if (caseMenuItems.length > 0) {
    caseMenuItems.forEach(item => {
      const handleSwitch = () => {
        caseMenuItems.forEach(mi => mi.classList.remove('active'));
        item.classList.add('active');

        const selectedCase = item.getAttribute('data-case');

        caseScreenContents.forEach(screen => {
          screen.classList.remove('active');
        });

        const activeScreen = document.getElementById(`case-${selectedCase}`);
        if (activeScreen) {
          activeScreen.classList.add('active');
        }

        if (caseBrowserAddress) {
          if (selectedCase === 'morais') caseBrowserAddress.textContent = 'moraisdecastro.com.br';
          else if (selectedCase === 'henrimar') caseBrowserAddress.textContent = 'henrimar.com.br';
          else if (selectedCase === 'siamac') caseBrowserAddress.textContent = 'siamac.com.br';
          else if (selectedCase === 'transpiraja') caseBrowserAddress.textContent = 'transpiraja.com.br';
          else if (selectedCase === 'nadier') caseBrowserAddress.textContent = 'nadieradvogados.com.br';
          else if (selectedCase === 'biomedical') caseBrowserAddress.textContent = 'biomedicalprodutos.com.br';
        }
      };

      item.addEventListener('click', handleSwitch);
      item.addEventListener('mouseenter', handleSwitch);
    });
  }
});



