<script>
	// @ts-nocheck

	import clear_night from '../media/imgs/weather_icons/clear_night.svg';
	// import cold from "../media/imgs/weather_icons/cold.svg";
	// import hot from "../media/imgs/weather_icons/hot.svg";
	// import lightning from "../media/imgs/weather_icons/lightning.svg";
	import cloudy from '../media/imgs/weather_icons/cloudy.svg';
	import foggy from '../media/imgs/weather_icons/smog_solid.svg';
	import partly_cloudy_night from '../media/imgs/weather_icons/partly_cloudy_night.svg';
	import partly_cloudy from '../media/imgs/weather_icons/partly_cloudy.svg';
	import rainy from '../media/imgs/weather_icons/rainy.svg';
	import showers_night from '../media/imgs/weather_icons/showers_night.svg';
	import showers from '../media/imgs/weather_icons/showers.svg';
	// import snow_showers from "../media/imgs/weather_icons/snow_showers.svg";
	import snow from '../media/imgs/weather_icons/snow.svg';
	import sunny from '../media/imgs/weather_icons/sunny.svg';
	import thunder from '../media/imgs/weather_icons/thunder.svg';
	// import windy from "../media/imgs/weather_icons/windy.svg";

	// @ts-ignore
	export let icon, size;

	// let checkedIcon;

	// @ts-ignore
	const checkicon = (icon) => {
		switch (icon) {
			case '01d':
				return sunny;
				// @ts-ignore
				break;
			case '01n':
				return clear_night;
				// @ts-ignore
				break;
			case '02d':
				return partly_cloudy;
				// @ts-ignore
				break;
			case '02n':
				return partly_cloudy_night;
				// @ts-ignore
				break;
			case '03d':
				return cloudy;
				// @ts-ignore
				break;
			case '03n':
				return cloudy;
				// @ts-ignore
				break;
			case '04d':
				return partly_cloudy;
				// @ts-ignore
				break;
			case '04n':
				return partly_cloudy_night;
				// @ts-ignore
				break;
			case '09d':
				return showers;
				// @ts-ignore
				break;
			case '09n':
				return showers_night;
				// @ts-ignore
				break;
			case '10d':
				return rainy;
				// @ts-ignore
				break;
			case '10n':
				return rainy;
				// @ts-ignore
				break;
			case '11d':
				return thunder;
				// @ts-ignore
				break;
			case '11n':
				return thunder;
				// @ts-ignore
				break;
			case '13d':
				return snow;
				// @ts-ignore
				break;
			case '13n':
				return snow;
				// @ts-ignore
				break;
			case '50d':
				return foggy;
				// @ts-ignore
				break;
			case '50n':
				return foggy;
				// @ts-ignore
				break;
			default:
				return 'loading...';
		}
	};
</script>

<div class="icon-container">
	<img style={size} src={checkicon(icon)} alt="actual weather icon" />
</div>

<style>
	.icon-container {
		display: flex;
		justify-content: center;
		align-items: center;
		max-height: 60px;
	}
</style>
