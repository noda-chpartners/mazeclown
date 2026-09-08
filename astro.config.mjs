// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	site: process.env.PUBLIC_SITE_URL,
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
