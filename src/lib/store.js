import { writable, readable } from 'svelte/store';

export const socials = readable({
	twitter: 'https://twitter.com/BTCMapDotOrg',
	discord: 'https://discord.gg/wPqva83uzq',
	github: 'https://github.com/teambtcmap'
});

export const fdroid = readable('https://f-droid.org/en/packages/org.btcmap/');