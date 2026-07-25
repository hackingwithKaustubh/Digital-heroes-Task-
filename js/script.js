
document.addEventListener('DOMContentLoaded', () => {
  
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
      setTimeout(() => {
        preloader.remove();
      }, 500);
    });
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 2500);
  }

  const header = document.getElementById('main-header');
  const scrollProgress = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight > 0) {
      const scrolledPercent = (scrollY / docHeight) * 100;
      scrollProgress.style.width = `${scrolledPercent}%`;
    }

    if (scrollY > 600) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const activeObserverOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
  };

  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, activeObserverOptions);

  sections.forEach(section => {
    activeObserver.observe(section);
  });

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('aria-controls');

      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      tabPanels.forEach(panel => {
        if (panel.getAttribute('id') === targetId) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });

  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterVal === 'all' || itemCategory === filterVal) {
          item.style.display = 'block';
          item.style.animation = 'fade-in 0.4s ease forwards';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  const slider = document.getElementById('testimonials-slider');
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const dotsContainer = document.getElementById('slider-dots');

  let currentSlide = 0;
  const slideCount = slides.length;
  let slideInterval;
  const intervalTime = 5000;

  if (slider && slideCount > 0) {
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('button');
      dot.classList.add('slider-dot');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetTimer();
      });
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(n) {
      currentSlide = (n + slideCount) % slideCount;
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
      
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });

    function startTimer() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }

    function resetTimer() {
      clearInterval(slideInterval);
      startTimer();
    }

    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', startTimer);

    startTimer();
  }

  const revealElements = document.querySelectorAll('.reveal-fade-up, .reveal-fade-left, .reveal-fade-right');
  
  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -8% 0px',
    threshold: 0.15
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    });
  }, revealObserverOptions);

  revealElements.forEach(el => {
    revealObserver.observe(el);
  });

  const counterElements = document.querySelectorAll('.stat-number-anim');
  
  const counterObserverOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.2
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterEl = entry.target;
        const targetVal = parseInt(counterEl.getAttribute('data-target'), 10);
        let currentVal = 0;
        
        const duration = 1500;
        const increment = targetVal / (duration / 16);
        
        const countTimer = setInterval(() => {
          currentVal += increment;
          if (currentVal >= targetVal) {
            counterEl.textContent = targetVal;
            clearInterval(countTimer);
          } else {
            counterEl.textContent = Math.floor(currentVal);
          }
        }, 16);

        observer.unobserve(counterEl);
      }
    });
  }, counterObserverOptions);

  counterElements.forEach(counter => {
    counterObserver.observe(counter);
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const summary = item.querySelector('summary');
    const body = item.querySelector('.faq-body');

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      
      const isOpen = item.hasAttribute('open');

      if (isOpen) {
        body.style.overflow = 'hidden';
        body.style.maxHeight = `${body.scrollHeight}px`;
        body.offsetHeight;
        body.style.transition = 'max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease-out';
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
        
        setTimeout(() => {
          item.removeAttribute('open');
          body.style.maxHeight = '';
          body.style.opacity = '';
          body.style.transition = '';
        }, 250);
      } else {
        item.setAttribute('open', '');
        body.style.overflow = 'hidden';
        body.style.maxHeight = '0px';
        body.style.opacity = '0';
        body.offsetHeight;
        body.style.transition = 'max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease-in';
        body.style.maxHeight = `${body.scrollHeight}px`;
        body.style.opacity = '1';

        setTimeout(() => {
          body.style.maxHeight = '';
          body.style.opacity = '';
          body.style.transition = '';
        }, 250);
      }
    });
  });

  const contactForm = document.getElementById('contact-form');
  const successModal = document.getElementById('contact-success-box');
  const successCloseBtn = document.getElementById('success-close-btn');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?([0-9\-\s\(\)\+]{10,20})$/;

  function validateInput(inputEl, condition, errorElId) {
    const parentGroup = inputEl.closest('.form-group');
    const errorEl = document.getElementById(errorElId);

    if (condition) {
      parentGroup.classList.remove('invalid');
      if (errorEl) errorEl.style.display = 'none';
      return true;
    } else {
      parentGroup.classList.add('invalid');
      if (errorEl) errorEl.style.display = 'block';
      return false;
    }
  }

  if (contactForm) {
    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const phoneInput = document.getElementById('form-phone');
    const serviceInput = document.getElementById('form-service');
    const messageInput = document.getElementById('form-message');

    nameInput.addEventListener('blur', () => validateInput(nameInput, nameInput.value.trim().length > 1, 'error-name'));
    emailInput.addEventListener('blur', () => validateInput(emailInput, emailRegex.test(emailInput.value.trim()), 'error-email'));
    phoneInput.addEventListener('blur', () => {
      const cleanPhone = phoneInput.value.replace(/[\s\-\(\)\+]/g, '');
      validateInput(phoneInput, phoneRegex.test(phoneInput.value.trim()) && cleanPhone.length >= 10, 'error-phone');
    });
    serviceInput.addEventListener('change', () => validateInput(serviceInput, serviceInput.value !== '', 'error-service'));
    messageInput.addEventListener('blur', () => validateInput(messageInput, messageInput.value.trim().length >= 10, 'error-message'));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateInput(nameInput, nameInput.value.trim().length > 1, 'error-name');
      const isEmailValid = validateInput(emailInput, emailRegex.test(emailInput.value.trim()), 'error-email');
      
      const cleanPhone = phoneInput.value.replace(/[\s\-\(\)\+]/g, '');
      const isPhoneValid = validateInput(phoneInput, phoneRegex.test(phoneInput.value.trim()) && cleanPhone.length >= 10, 'error-phone');
      
      const isServiceValid = validateInput(serviceInput, serviceInput.value !== '', 'error-service');
      const isMessageValid = validateInput(messageInput, messageInput.value.trim().length >= 10, 'error-message');

      if (isNameValid && isEmailValid && isPhoneValid && isServiceValid && isMessageValid) {
        const submitBtn = document.getElementById('form-submit-btn');
        const origText = submitBtn.textContent;
        submitBtn.textContent = 'Sending Request...';
        submitBtn.disabled = true;

        setTimeout(() => {
          submitBtn.textContent = origText;
          submitBtn.disabled = false;
          
          successModal.removeAttribute('hidden');
          
          contactForm.reset();
        }, 1200);
      }
    });
  }

  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener('click', () => {
      successModal.setAttribute('hidden', '');
    });
  }

  const newsForm = document.getElementById('newsletter-form');
  const newsError = document.getElementById('news-error');
  const newsSuccess = document.getElementById('newsletter-success');

  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = document.getElementById('news-email');
      const isValid = emailRegex.test(emailInput.value.trim());

      if (isValid) {
        newsError.style.display = 'none';
        newsSuccess.removeAttribute('hidden');
        emailInput.value = '';
        setTimeout(() => {
          newsSuccess.setAttribute('hidden', '');
        }, 5000);
      } else {
        newsError.style.display = 'block';
        newsSuccess.setAttribute('hidden', '');
      }
    });
  }

  const rippleButtons = document.querySelectorAll('.btn-ripple');

  rippleButtons.forEach(btn => {
    btn.addEventListener('click', function (e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-circle');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
});
