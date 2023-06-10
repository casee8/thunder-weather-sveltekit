<script>
	import CandNBlog from './CandNBlog.svelte';
	import HourlyForecast from './HourlyForecast.svelte';
	import Forecast from './Forecast.svelte';
	import CurrentWeather from './CurrentWeather.svelte';
	import CurrentLocation from './CurrentLocation.svelte';
	import Search from './Search.svelte';

	export let data;
	// $: ({  } = data.weather_data.hourly);
	// $: ({  } = data.weather_data.daily);
	$: ({ temp, feels_like, humidity, wind_speed, wind_deg } = data.weather_data.current);
	$: ({ main, description, icon } = data.weather_data.current.weather[0]);
	$: ({ rain } = data.weather_data.current.hasOwnProperty('rain'));
	// $: ({ rain } = !data.weather_data.current.rain:'0%':JSON.stringify(data.weather.current.rain));
	// console.log(data.weather_data.current.rain);
	// console.log(data.weather_data);
	// icon prop needs to be passed in
</script>

<div class="main-container">
	<CurrentWeather
		icon = {icon}
		{temp}
		precip={rain}
		{humidity}
		windSpeed={wind_speed}
		windDeg={wind_deg}
		feelsLike={feels_like}
	/>
	<HourlyForecast hourlyData = {data.weather_data.hourly}/>
	<Forecast dailyData={data.weather_data.daily}/>
	<CandNBlog />
	<CurrentLocation />
</div>
