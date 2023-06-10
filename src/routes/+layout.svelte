<script>
	import '../styles.css';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';

	import Geolocation from 'svelte-geolocation';

	let coords = [];
</script>

<div class='overall-container'>
	<Navbar />

	<main>
		<Geolocation getPosition bind:coords />
		<slot />
	</main>

	<Footer />
</div>
