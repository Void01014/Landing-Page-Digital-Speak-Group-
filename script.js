gsap.registerPlugin(ScrollTrigger);

// Helper function to reduce repetitive animation code
function createScrollAnimation(selector, animProps, scrollStart = "top 80%", duration = 1, clearProps = false) {
    const config = {
        ...animProps,
        duration,
        scrollTrigger: {
            trigger: selector,
            start: scrollStart,
        }
    };
    if (clearProps) config.clearProps = "all";
    return gsap.from(selector, config);
}

// Hero timeline
const tl = gsap.timeline();

tl.from(".bg-circle", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
})

    .from(".todo", {
        x: -100,
        y: 50,
        opacity: 0,
        rotation: -8,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")

    .from(".tasks", {
        x: 100,
        y: -30,
        opacity: 0,
        rotation: 6,
        duration: 1,
        ease: "power3.out"
    }, "-=0.8")

    .from(".chart", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")

    .from(".duration", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7")

    .from(".completed", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7");

// Busy section timeline
const stl = gsap.timeline({
    scrollTrigger: {
        trigger: ".bg-circle2",
        start: "top 80%",
    }
});

stl.from(".bg-circle2", {
    scale: 0.8,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
})
    .from(".todo-list", {
        opacity: 0,
        x: 40,
        duration: 0.9,
        ease: "power3.out",
    }, "-=0.8")
    .from(".reports", {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: "power3.out",
    }, "-=0.3")
    .from(".timesheets", {
        opacity: 0,
        x: -80,
        duration: 1.2,
        ease: "power3.out",
    }, "-=0.3");

// Excellent section
createScrollAnimation(".excellent", { opacity: 0, y: 100 }, "top 80%", 1);

// Functionalities timeline
const funcTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".functionalities",
        start: "top 50%",
    }
});

funcTl.from(".functionalities h2", {
    opacity: 0,
    y: 40,
    duration: 0.9,
    clearProps: "all",
    ease: "power3.out"
})
    .from(".func-card", {
        opacity: 0,
        y: 70,
        scale: 0.94,
        rotation: 6,
        transformOrigin: "center center",
        duration: 0.9,
        stagger: 0.18,
        ease: "back.out(1.6)",
        clearProps: "all",
    }, "-=0.5")
    .from(".func-card .ui-preview", {
        opacity: 0,
        scale: 0,
        duration: 0.8,
        stagger: 0.18,
        clearProps: "all",
        ease: "bounce.out"
    }, "-=1.8");

// Split feature section
createScrollAnimation(".content-side h2", { opacity: 0, x: -50 }, "top 80%", 1);

createScrollAnimation(".content-side p", { opacity: 0, x: -50, stagger: 0.2 }, "top 80%", 1);

// Image side timeline
const otl = gsap.timeline({
    scrollTrigger: {
        trigger: ".image-side",
        start: "top 80%",
    }
});

otl.from(".main-task-card", {
    opacity: 0,
    scale: 0.3,
    duration: 1.1,
    x: 100,
    stagger: 0.2,
    ease: "back.out(1)",
})
    .from(".progress-card", {
        opacity: 0,
        scale: 0.3,
        duration: 1.1,
        x: -70,
        y: 70,
        stagger: 0.2,
        ease: "back.out(1)",
    }, "-=.85")
    .from(".stats-card", {
        opacity: 0,
        scale: 0.3,
        duration: 1.1,
        x: -70,
        y: -70,
        stagger: 0.2,
        ease: "back.out(1)",
    }, "-=.85");

// Testimonials section
createScrollAnimation(".title-main", { opacity: 0, y: 30 }, "top 80%", 1);

createScrollAnimation(".testimonial-item", { opacity: 0, y: 50, stagger: 0.3 }, "top 80%", 0.8);

createScrollAnimation(".trusted-text", { opacity: 0, y: 20 }, "top 80%", 1);

createScrollAnimation(".logo-item", { opacity: 0, x: -30, stagger: 0.1 }, "top 80%", 0.6);

// Blog section
createScrollAnimation(".blog-header h2", { opacity: 0, y: 30 }, "top 80%", 1);

createScrollAnimation(".blog-header p", { opacity: 0, y: 20 }, "top 80%", 1);

createScrollAnimation(".blog-card", { opacity: 0, y: 50, stagger: 0.2 }, "top 80%", 0.8);

// CTA section
createScrollAnimation(".cta-section h2", { opacity: 0, scale: 0.9, ease: "back.out(1.7)" }, "top 80%", 1);

createScrollAnimation(".cta-section .sub", { opacity: 0, y: 20 }, "top 80%", 1);

createScrollAnimation(".email-row input", { opacity: 0, x: -30 }, "top 80%", 0.8);

createScrollAnimation(".email-row button", { opacity: 0, x: 30 }, "top 80%", 0.8);

createScrollAnimation(".fine-print", { opacity: 0, y: 10 }, "top 80%", 0.8);

// Footer section
createScrollAnimation(".footer-brand h2", { opacity: 0, y: 20 }, "top 80%", 1);

createScrollAnimation(".footer-brand p", { opacity: 0, y: 20 }, "top 80%", 1);

createScrollAnimation(".chat-btn", { opacity: 0, scale: 0.8, ease: "back.out(1.7)" }, "top 80%", 0.8);

createScrollAnimation(".footer-column", { opacity: 0, x: -30, stagger: 0.2 }, "top 80%", 0.8);

createScrollAnimation(".footer-bottom p", { opacity: 0, y: 10 }, "top 100%", 0.8);

createScrollAnimation(".socials a", { opacity: 0, x: -20, stagger: 0.15, ease: "power3.out", clearProps: "all" }, "top 100%", 0.4);