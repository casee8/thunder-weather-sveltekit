<script>
	// @ts-nocheck

	import WeatherIcon from './WeatherIcon.svelte';
	import wind_dir from '../media/imgs/weather_icons/wind_dir.svg';
	export let icon, temp, precip, humidity, windSpeed, feelsLike, windDeg;
</script>

<div class="main-content-section">
	<div class="header">
		<hr />
		<h3>Current Condition</h3>
		<hr />
	</div>
	<div class="current-container-grid">
		<div class="icon-temp">
			<WeatherIcon {icon} size={'width: 100px'} />
			<div>
				<p class="temp-style">{Math.round(((+temp - 32) * 5) / 9)}°C</p>
				<p><em>Feels like: {Math.round(((+feelsLike - 32) * 5) / 9)}°C</em></p>
			</div>
		</div>
		<div class="current-data">
			<p>Next hour precipitation: {precip ? precip : '0%'}</p>
			<p>Humidity: {humidity}%</p>
			<div class="wind-container">
				<p>
					Wind: {Math.round(windSpeed)} mph
				</p>
				<img
					style="transform:rotate({windDeg}deg)"
					src={wind_dir}
					alt="wind direction: {windDeg} deg"
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.current-container-grid {
		display: grid;
		grid-template-rows: auto;
	}

	.current-data {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.icon-temp {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.temp-style {
		font-size: 48px;
		font-weight: 700;
	}

	.wind-container {
		display: flex;
		align-items: center;
	}

	.wind-container > img {
		animation-name: rotate;
		animation-duration: 3s;
	}

	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
