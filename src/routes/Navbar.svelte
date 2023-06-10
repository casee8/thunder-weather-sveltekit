<script>
	import Search from './Search.svelte';
</script>

<div class="navbar">
	<div class="search-box">
		<Search />
		<span class="material-symbols-outlined"> menu </span>
	</div>
	<div class='btn-box'>
		<a href="#" class='selected-btn'>Today</a>
		<a href="#">Forecast</a>
		<a href="#">C&N Blog</a>
	</div>
</div>

<style>
	.navbar {
		display: flex;
		flex-direction: column;
		padding: 0.7rem 1rem;
		z-index: 1;
		width: 100%;
		opacity: 0.9;
		background: var(--dark-color);
		color: var(--primary-color);
	}

	.search-box {
		display: flex;
		justify-content: space-between;
	}

	a {
		text-decoration: none;
	}

	.material-symbols-outlined {
		font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
	}
</style>
