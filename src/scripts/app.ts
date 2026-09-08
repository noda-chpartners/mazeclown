import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const header = document.querySelector<HTMLElement>('[data-header]');
const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const nav = document.querySelector<HTMLElement>('[data-nav]');
const navLinks = nav?.querySelectorAll('a') ?? [];

const lenis = new Lenis({
	autoRaf: false,
	lerp: 0.09,
});

if (!reduceMotion) {
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => {
		lenis.raf(time * 1000);
	});
	gsap.ticker.lagSmoothing(0);
} else {
	lenis.destroy();
}

const setMenuOpen = (open: boolean) => {
	document.body.classList.toggle('is-menu-open', open);
	toggle?.setAttribute('aria-expanded', String(open));
	const label = toggle?.querySelector('.visually-hidden');
	if (label) {
		label.textContent = open ? 'メニューを閉じる' : 'メニューを開く';
	}
	if (!reduceMotion) {
		if (open) {
			lenis.stop();
		} else {
			lenis.start();
		}
	}
};

toggle?.addEventListener('click', () => {
	setMenuOpen(!document.body.classList.contains('is-menu-open'));
});

navLinks.forEach((link) => {
	link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		setMenuOpen(false);
	}
});

const onScrollChrome = () => {
	header?.classList.toggle('is-scrolled', window.scrollY > 16);
};

onScrollChrome();
window.addEventListener('scroll', onScrollChrome, { passive: true });

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', (event) => {
		const id = anchor.getAttribute('href');
		if (!id || id === '#') return;
		const target = document.querySelector<HTMLElement>(id);
		if (!target) return;
		event.preventDefault();
		if (reduceMotion) {
			target.scrollIntoView();
			return;
		}
		lenis.scrollTo(target, { offset: -72 });
	});
});

if (!reduceMotion) {
	const heroItems = document.querySelectorAll('[data-hero-item]');
	gsap.from(heroItems, {
		y: 36,
		opacity: 0,
		duration: 0.9,
		ease: 'power3.out',
		stagger: 0.12,
		delay: 0.15,
	});

	document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
		gsap.from(el, {
			scrollTrigger: {
				trigger: el,
				start: 'top 86%',
			},
			y: 40,
			opacity: 0,
			duration: 0.8,
			ease: 'power3.out',
		});
	});

	document.querySelectorAll<HTMLElement>('[data-stagger]').forEach((group) => {
		const items = group.querySelectorAll('[data-stagger-item]');
		gsap.from(items, {
			scrollTrigger: {
				trigger: group,
				start: 'top 84%',
			},
			y: 32,
			opacity: 0,
			duration: 0.7,
			ease: 'power3.out',
			stagger: 0.12,
		});
	});
}
