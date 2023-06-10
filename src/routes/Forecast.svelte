<script>
	import WeatherIcon from './WeatherIcon.svelte';

	export let dailyData;

	let timestamp;
	let formattedTimestamp;
	console.log(dailyData[0]);
</script>

<div class="main-content-section">
	<div class="header">
		<hr />
		<h3>Forecast</h3>
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
		{#each dailyData as daily}
			<div class="day-container">
				<div class="temp-container">
					<p>
						{Math.round(((+daily.temp.max - 32) * 5) / 9)}°C
						<span>{Math.round(((+daily.temp.min - 32) * 5) / 9)}°C</span>
					</p>
				</div>
				<div class="precip-container hidden">
					<p>{daily.rain ? `${Math.round(daily.rain)}%` : '0%'}</p>
				</div>
				<div class="wind-container hidden">
					<p>
						{Math.round(daily.wind_speed)} mph
					</p>
				</div>
				<WeatherIcon icon={daily.weather[0].icon} size={'width: 40px; height: 40px'} />
				<!-- <p>
					{((timestamp = new Date(daily.dt * 1000)),
					(formattedTimestamp = new Intl.DateTimeFormat('en-GB', {
						timeStyle: 'short'
					}).format(timestamp)))}
				</p> -->
			</div>
		{/each}
	</div>
</div>
