// Initialize particles.js
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#ffffff'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            }
        },
        opacity: {
            value: 0.5,
            random: true,
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            animation: {
                enable: true,
                speed: 2,
                minimumValue: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

// Function to open portfolio when clicking the hello button
function openPortfolio() {
    const landingPage = document.getElementById('landing');
    const portfolioContent = document.getElementById('portfolio');
    
    // Add transition class to trigger the color change
    landingPage.classList.add('transition-active');
    
    // Add fade-in animation to portfolio content
    portfolioContent.style.opacity = '0';
    portfolioContent.style.transition = 'opacity 0.5s ease';
    
    // Wait for the transition to complete before showing the portfolio
    setTimeout(() => {
        landingPage.style.display = 'none';
        portfolioContent.style.display = 'block';
        
        // Trigger reflow
        portfolioContent.offsetHeight;
        
        // Fade in portfolio content
        portfolioContent.style.opacity = '1';
        
        // Initialize particles with new configuration
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#ffffff'
                    },
                    shape: {
                        type: 'circle'
                    },
                    opacity: {
                        value: 0.3,
                        random: true
                    },
                    size: {
                        value: 2,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.2,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: 'none',
                        random: true,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'push'
                        },
                        resize: true
                    }
                },
                retina_detect: true
            });
        }
    }, 1500);
}

// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Add smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial styles for animation
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    // Add animation to form inputs
    const formGroups = contactForm.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        const input = group.querySelector('input, select, textarea');
        const label = group.querySelector('label');
        
        // Handle initial state
        if (input.value) {
            label.classList.add('active');
        }
        
        // Handle focus/blur
        input.addEventListener('focus', () => {
            label.classList.add('active');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                label.classList.remove('active');
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Disable form during submission
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Show success message
            const status = contactForm.querySelector('.form-status');
            status.classList.add('active');
            
            // Reset form
            contactForm.reset();
            formGroups.forEach(group => {
                group.querySelector('label').classList.remove('active');
            });
            
            // Reset submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
            
            // Hide success message after 3 seconds
            setTimeout(() => {
                status.classList.remove('active');
            }, 3000);
        }, 1500);
    });
}

// Handle window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = 'flex';
    } else {
        navLinks.style.display = 'none';
    }
});

// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const langButtons = document.querySelectorAll('.lang-btn');
    const navLinks = document.querySelectorAll('.nav-link span');
    
    // Language content
    const translations = {
        en: {
            about: 'About',
            fullstack: 'Full Stack',
            dataAnalysis: 'Data Analysis',
            skills: 'Skills',
            contact: 'Contact'
        },
        ar: {
            about: 'نبذة عني',
            fullstack: 'تطوير الويب',
            dataAnalysis: 'تحليل البيانات',
            skills: 'المهارات',
            contact: 'اتصل بي'
        }
    };

    // Handle language switching
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get selected language
            const lang = this.dataset.lang;
            
            // Update text content
            navLinks[0].textContent = translations[lang].about;
            navLinks[1].textContent = translations[lang].fullstack;
            navLinks[2].textContent = translations[lang].dataAnalysis;
            navLinks[3].textContent = translations[lang].skills;
            navLinks[4].textContent = translations[lang].contact;
            
            // Update document direction
            document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        });
    });
});

// CV Download functionality
document.getElementById('downloadCV').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = 'assetscvAwab_Hamedalneel_CV.pdf.pdf'; // Your CV file name
    link.download = 'assetscvAwab_Hamedalneel_CV.pdf.pdf'; // Name of the downloaded file
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show download confirmation
    const downloadConfirmation = document.createElement('div');
    downloadConfirmation.className = 'download-confirmation';
    downloadConfirmation.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>CV download started!</span>
    `;
    document.body.appendChild(downloadConfirmation);
    
    // Remove confirmation after 3 seconds
    setTimeout(() => {
        downloadConfirmation.remove();
    }, 3000);
});

// Add styles for download confirmation
const style = document.createElement('style');
style.textContent = `
    .download-confirmation {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #00ff9d;
        color: #1a1a2e;
        padding: 15px 25px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 5px 15px rgba(0, 255, 157, 0.3);
        animation: slideIn 0.3s ease;
        z-index: 1000;
    }
    
    .download-confirmation i {
        font-size: 1.2rem;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 