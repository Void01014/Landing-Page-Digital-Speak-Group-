// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".excellent", {
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".excellent",
        start: "top 80%",
        // markers: true,
    }
});

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
    }, "-=0.3")