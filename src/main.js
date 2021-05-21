import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		countersName: ['Amy', 'Bob', 'Cory', 'Dora'],
	}
});

export default app;