/* ============================================
   NovaTech Studio - Premium Landing Page
   JavaScript - GSAP Animations & Interactions
   ============================================ */

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all modules
    initPreloader();
    initCustomCursor();
    initHeader();
    initMobileMenu();
    initHeroAnimations();
    initScrollAnimations();
    initTechTabs();
    initContactForm();
    initSmoothScroll();
    initParallax();
    initCounterAnimation();
});

// ============================================
// Preloader
// ============================================

function initPreloader() {
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        // Add small delay for smoother transition
        setTimeout(() => {
            preloader.classList.add('hidden');
            document.body.classList.remove('loading');

            // Start hero animations after preloader
            animateHeroEntrance();
        }, 1800);
    });
}

// ============================================
// Custom Cursor
// ============================================

function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursor-follower');

    if (!cursor || !follower) return;

    // Check if touch device
    if ('ontouchstart' in window) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.classList.add('visible');
        follower.classList.add('visible');
    });

    // Smooth cursor animation
    function animateCursor() {
        // Cursor follows immediately
        cursorX += (mouseX - cursorX) * 0.5;
        cursorY += (mouseY - cursorY) * 0.5;

        // Follower follows with delay
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;

        cursor.style.transform = `translate(${cursorX - 4}px, ${cursorY - 4}px)`;
        follower.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects on interactive elements
    const hoverElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, .tech-item');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            follower.classList.remove('hover');
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.classList.remove('visible');
        follower.classList.remove('visible');
    });
}

// ============================================
// Header
// ============================================

function initHeader() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// Mobile Menu
// ============================================

function initMobileMenu() {
    const burger = document.getElementById('burger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    if (!burger || !mobileMenu) return;

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu on link click
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });
}

// ============================================
// Hero Animations
// ============================================

function initHeroAnimations() {
    // Particles animation
    createParticles();
}

function animateHeroEntrance() {
    const tl = gsap.timeline();

    tl.from('.hero-badge', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
    })
    .from('.title-line', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.hero-actions .btn', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.stat-item', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-phone', {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.8')
    .from('.float-card', {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)'
    }, '-=0.5')
    .from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power3.out'
    }, '-=0.3');
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(139, 92, 246, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
        `;
        particlesContainer.appendChild(particle);

        // Animate each particle
        gsap.to(particle, {
            y: Math.random() * 100 - 50,
            x: Math.random() * 100 - 50,
            opacity: Math.random() * 0.5,
            duration: Math.random() * 5 + 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// ============================================
// Scroll Animations
// ============================================

function initScrollAnimations() {
    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                once: true
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    });

    // About section
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 70%',
            once: true
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.about-visual', {
        scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 70%',
            once: true
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.fromTo('.feature-item',
        {
            opacity: 0,
            x: -30
        },
        {
            scrollTrigger: {
                trigger: '.about-features',
                start: 'top 80%',
                once: true
            },
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            clearProps: 'all'
        }
    );

    // Service cards
    gsap.fromTo('.service-card',
        {
            opacity: 0,
            y: 60
        },
        {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 70%',
                once: true
            },
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                amount: 0.6,
                from: 'start'
            },
            ease: 'power3.out',
            clearProps: 'all'
        }
    );

    // Tech items
    gsap.fromTo('.tech-panel.active .tech-item',
        {
            opacity: 0,
            scale: 0.8
        },
        {
            scrollTrigger: {
                trigger: '.tech-content',
                start: 'top 80%',
                once: true
            },
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: {
                amount: 0.5,
                from: 'center'
            },
            ease: 'back.out(1.7)',
            clearProps: 'all'
        }
    );

    // Portfolio items
    gsap.from('.portfolio-item', {
        scrollTrigger: {
            trigger: '.portfolio-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
    });

    // Process timeline animation handled separately
    initProcessTimeline();

    // Contact section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 0.8,
        ease: 'power3.out'
    });

    gsap.from('.contact-form-wrapper', {
        scrollTrigger: {
            trigger: '.contact-wrapper',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 0.8,
        ease: 'power3.out'
    });
}

// ============================================
// Tech Tabs
// ============================================

function initTechTabs() {
    const tabs = document.querySelectorAll('.tech-tab');
    const panels = document.querySelectorAll('.tech-panel');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPanel = tab.dataset.tab;

            // Remove active from all tabs and panels
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active to clicked tab and corresponding panel
            tab.classList.add('active');
            document.querySelector(`[data-panel="${targetPanel}"]`).classList.add('active');

            // Animate new panel items
            gsap.fromTo(`[data-panel="${targetPanel}"] .tech-item`,
                {
                    opacity: 0,
                    scale: 0.8
                },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    stagger: {
                        amount: 0.3,
                        from: 'center'
                    },
                    ease: 'back.out(1.7)',
                    clearProps: 'all'
                }
            );
        });
    });
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const inputs = form.querySelectorAll('.form-input, .form-select, .form-textarea');

    // Add focus animations
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                duration: 0.2,
                ease: 'power2.out'
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2,
                ease: 'power2.out'
            });
        });
    });

    // Phone mask
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            // Always start with 7
            if (value.length === 0) {
                value = '7';
            } else if (value[0] !== '7') {
                value = '7' + value;
            }

            let formatted = '+7 (';

            if (value.length > 1) {
                formatted += value.substring(1, 4);
            }
            if (value.length >= 4) {
                formatted += ') ' + value.substring(4, 7);
            }
            if (value.length >= 7) {
                formatted += '-' + value.substring(7, 9);
            }
            if (value.length >= 9) {
                formatted += '-' + value.substring(9, 11);
            }

            e.target.value = formatted;
        });

        phoneInput.addEventListener('focus', () => {
            if (phoneInput.value === '') {
                phoneInput.value = '+7 (';
            }
        });

        phoneInput.addEventListener('keydown', (e) => {
            // Prevent deleting +7 (
            if (e.key === 'Backspace' && phoneInput.value.length <= 4) {
                e.preventDefault();
            }
        });
    }

    // Form submission - show loading state, then submit to FormSubmit
    form.addEventListener('submit', () => {
        const submitBtn = form.querySelector('.form-submit');

        // Button loading state
        submitBtn.innerHTML = `
            <span>Отправка...</span>
            <svg class="btn-icon" style="animation: spin 1s linear infinite" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 12a9 9 0 11-6.219-8.56"/>
            </svg>
        `;
        submitBtn.disabled = true;
    });
}

// Add spin animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                gsap.to(window, {
                    scrollTo: targetPosition,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    });
}

// ============================================
// Parallax Effects
// ============================================

function initParallax() {
    // Hero gradient parallax
    gsap.to('.hero-gradient', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.5
    });

    // Hero phone parallax
    gsap.to('.hero-phone', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100
    });

    // Floating cards parallax
    gsap.to('.float-card-1', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 50
    });

    gsap.to('.float-card-2', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 80
    });

    gsap.to('.float-card-3', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 60
    });
}

// ============================================
// Counter Animation
// ============================================

function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.count);

        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: 'power2.out'
                });
            },
            once: true
        });
    });
}

// ============================================
// Hover Effects Enhancement
// ============================================

// Service cards magnetic effect
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(card, {
            rotateX: -y / 20,
            rotateY: x / 20,
            duration: 0.3,
            ease: 'power2.out',
            transformPerspective: 1000
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Portfolio items hover
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('.portfolio-placeholder'), {
            scale: 1.05,
            duration: 0.5,
            ease: 'power2.out'
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('.portfolio-placeholder'), {
            scale: 1,
            duration: 0.5,
            ease: 'power2.out'
        });
    });
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: translate(-50%, -50%);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
        `;

        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.appendChild(ripple);

        gsap.to(ripple, {
            width: 300,
            height: 300,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    });
});

// ============================================
// Performance Optimization
// ============================================

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Refresh ScrollTrigger on resize
window.addEventListener('resize', debounce(() => {
    ScrollTrigger.refresh();
}, 250));

// ============================================
// Accessibility
// ============================================

// Handle reduced motion preference
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.globalTimeline.timeScale(0);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// Keyboard navigation for sliders
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        document.getElementById('slider-prev')?.click();
    }
    if (e.key === 'ArrowRight') {
        document.getElementById('slider-next')?.click();
    }
});

// Focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard nav styles
const keyboardStyles = document.createElement('style');
keyboardStyles.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid var(--color-accent-primary) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyles);

// ============================================
// Process Timeline Animation
// ============================================

function initProcessTimeline() {
    const timeline = document.getElementById('process-timeline');
    const progressLine = document.querySelector('.timeline-line-progress');
    const steps = document.querySelectorAll('.process-step');

    if (!timeline || !steps.length || window.innerWidth <= 768) return;

    // Create ScrollTrigger for the entire timeline section
    ScrollTrigger.create({
        trigger: timeline,
        start: 'top 40%',
        end: 'bottom 60%',
        onUpdate: (self) => {
            // Update progress line height based on scroll progress
            const progress = self.progress;
            if (progressLine) {
                progressLine.style.height = `${progress * 100}%`;
            }
        }
    });

    // Create individual triggers for each step - activate when step reaches center of screen
    steps.forEach((step, index) => {
        ScrollTrigger.create({
            trigger: step,
            start: 'top 55%',
            end: 'bottom 45%',
            onEnter: () => step.classList.add('active'),
            onLeave: () => {
                // Keep active if it's not the last step
                if (index < steps.length - 1) {
                    step.classList.add('active');
                }
            },
            onEnterBack: () => step.classList.add('active'),
            onLeaveBack: () => {
                // Remove active only when scrolling back up past it
                if (index > 0) {
                    step.classList.remove('active');
                }
            }
        });
    });
}
