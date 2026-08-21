/* ====================================================
   Al Huda eQuran ACADEMY - JAVASCRIPT
   ==================================================== */

// Mobile Navigation Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Back To Top Button logic
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form Submission with Web3Forms & Confetti Effect
const admissionForm = document.getElementById('admission-form');
const successBox = document.getElementById('form-success-box');

if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = admissionForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = "Submitting Application...";
        submitBtn.disabled = true;

        const formData = new FormData(admissionForm);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            if (response.status == 200) {
                admissionForm.style.display = 'none';
                successBox.style.display = 'block';

                if (typeof confetti === 'function') {
                    confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } });
                }
            } else {
                alert("Submission failed. Please contact us via WhatsApp.");
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        })
        .catch(error => {
            console.error(error);
            alert("Network error. Please try again.");
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
}
// Course Selection Auto-Show Syllabus Info
document.addEventListener("DOMContentLoaded", function () {
    const courseSelect = document.getElementById("courseSelect");
    const includesBox = document.getElementById("courseIncludesBox");

    if (courseSelect && includesBox) {
        courseSelect.addEventListener("change", function () {
            const selectedValue = this.value;

            if (
                selectedValue === "Noorani Qaida" ||
                selectedValue === "Quran Reading" ||
                selectedValue === "Tajweed Course"
            ) {
                includesBox.style.display = "flex";
            } else {
                includesBox.style.display = "none";
            }
        });
    }
});
// FAQ Accordion Toggle Script
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // اگر دوسرا کوئی کھولا ہوا ہے تو اسے بند کر دے
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // موجودہ سوال کو کھولے یا بند کرے
        faqItem.classList.toggle('active');
    });
});

// Automatically load Confetti Library
const confettiScript = document.createElement('script');
confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
document.head.appendChild(confettiScript);

// Course Select Auto Info Box Toggle
const courseSelect = document.getElementById('courseSelect');
const courseIncludesBox = document.getElementById('courseIncludesBox');

if (courseSelect) {
    courseSelect.addEventListener('change', function() {
        if (this.value !== '') {
            courseIncludesBox.style.display = 'flex';
        } else {
            courseIncludesBox.style.display = 'none';
        }
    });
}

// ==========================================
// FAQ TOGGLE FUNCTION (100% WORKING)
// ==========================================
function toggleFAQ(button) {
    // Button ke main container (.faq-item) ko pakro
    const faqItem = button.parentElement;
    
    // Check karo ke kya ye pehle se khula hua hai?
    const isActive = faqItem.classList.contains('active');

    // Pehle baaki tamaam FAQ items ko close kar do
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });

    // Agar pehle khula nahi tha, to ab ise khol do
    if (!isActive) {
        faqItem.classList.add('active');
    }
}
// Form Submission with Web3Forms & Confetti
const admissionForm = document.getElementById('admission-form');
if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Trigger Confetti Popper Effect
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 120,
                        spread: 80,
                        origin: { y: 0.6 }
                    });
                }

                // Show Success Modal
                document.getElementById('successModal').classList.add('active');
                admissionForm.reset();
                if(courseIncludesBox) courseIncludesBox.style.display = 'none';
            } else {
                alert('Something went wrong. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        });
    });
}

// Close Success Popup Modal
function closeSuccessModal() {
    document.getElementById('successModal').classList.remove('active');
}
// Automatically load Confetti Library (شرلیوں اور پٹاخوں والا ایفیکٹ)
if (!document.getElementById('confettiScript')) {
    const confettiScript = document.createElement('script');
    confettiScript.id = 'confettiScript';
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    document.head.appendChild(confettiScript);
}
// Confetti Script Injection
if (!document.getElementById('confettiScript')) {
    const confettiScript = document.createElement('script');
    confettiScript.id = 'confettiScript';
    confettiScript.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
    document.head.appendChild(confettiScript);
}

// 1. COURSE SELECT TOGGLE LOGIC
const courseSelect = document.getElementById('courseSelect');
const courseIncludesBox = document.getElementById('courseIncludesBox');

function updateSyllabusBox() {
    if (!courseSelect || !courseIncludesBox) return;
    
    const selectedValue = courseSelect.value.trim().toLowerCase();
    
    // صرف انہی 3 کورسز پر شو ہوگا
    if (
        selectedValue.includes("noorani") || 
        selectedValue.includes("reading") || 
        selectedValue.includes("tajweed")
    ) {
        courseIncludesBox.style.setProperty('display', 'flex', 'important');
    } else {
        courseIncludesBox.style.setProperty('display', 'none', 'important');
    }
}

if (courseSelect) {
    courseSelect.addEventListener('change', updateSyllabusBox);
    // Page load Check
    updateSyllabusBox();
}

// Close Button inside Box
function hideCourseBenefits() {
    if (courseIncludesBox) {
        courseIncludesBox.style.setProperty('display', 'none', 'important');
    }
}

// 2. FORM SUBMIT & POPUP LOGIC
const admissionForm = document.getElementById('admission-form');
const successModal = document.getElementById('successModal');

if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Trigger Confetti
                if (typeof confetti === 'function') {
                    confetti({
                        particleCount: 120,
                        spread: 70,
                        origin: { y: 0.6 }
                    });
                }

                // Show Success Popup
                if (successModal) {
                    successModal.classList.add('active');
                }

                admissionForm.reset();
                if (courseIncludesBox) {
                    courseIncludesBox.style.setProperty('display', 'none', 'important');
                }
            } else {
                alert('Form submission failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Something went wrong. Please check your internet connection.');
        });
    });
}

// CLOSE POPUP FUNCTION
function closeSuccessModal() {
    if (successModal) {
        successModal.classList.remove('active');
    }
}
// FAQ Toggle Function
function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    
    // Baaki sab ko close kar dega
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Click wale ko Open/Close karega
    faqItem.classList.toggle('active');
}