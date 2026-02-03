// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://risemsr.github.io',
	integrations: [
		starlight({
			title: 'RiSE MSR',
			description: 'News from the RiSE MSR team! This blog covers research, new developments, technical discussions, and the work of the RiSE MSR group.',
			social: {
				github: 'https://github.com/risemsr',
			},
			sidebar: [
				{
					label: 'Blog',
					autogenerate: { directory: 'blog' },
				},
			],
		}),
	],
});
