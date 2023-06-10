<script>
	import WeatherIcon from './WeatherIcon.svelte';

	export let hourlyData;

	let timestamp;
	let formattedTimestamp;
</script>

<div class="main-content-section">
	<div class="header">
		<hr />
		<h3>Hourly Forecast</h3>
		<hr />
	</div>
	<div class="btn-box">
		<a class="right-border selected-btn" href="#" role="button">Temperature</a>
		<span class="border" />
		<a class="right-border" href="#" role="button">Precipitation</a>
		<span class="border" />
		<a href="#" role="button">Wind</a>
	</div>
	<div class="hourly-container">
		{#each hourlyData as hourly}
			<div class="hour-container">
				<div class="temp-container">
					<p>
						{Math.round(((+hourly.temp - 32) * 5) / 9)}°C
					</p>
				</div>
				<div class="precip-container">
					<p>{hourly.rain ? hourly.rain : '0%'}</p>
				</div>
				<div class="wind-container">
					<p>
						{Math.round(hourly.wind_speed)} mph
					</p>
				</div>
				<WeatherIcon icon={hourly.weather[0].icon} size={'width: 40px; height: 40px'} />
				<p>
					{((timestamp = new Date(hourly.dt * 1000)),
					(formattedTimestamp = new Intl.DateTimeFormat('en-GB', {
						timeStyle: 'short'
					}).format(timestamp)))}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.border {
		border: 1px solid #fff;
		margin: 0 5px;
	}

	.precip-container,
	.wind-container {
		display: none;
	}
</style>
