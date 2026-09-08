// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: 'https://mazera-clown.pages.dev',
	integrations: [
		icon({
			include: {
				lucide: [
					'menu',
					'x',
					'map-pin',
					'clock',
					'bus',
					'users',
					'arrow-down',
					'external-link',
					'utensils',
					'calendar-off',
					'chevron-right',
				],
				'simple-icons': ['instagram', 'google'],
			},
		}),
	],
});
