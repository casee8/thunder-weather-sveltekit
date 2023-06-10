import { PUBLIC_API_KEY } from '$env/static/public';

export async function load({ fetch }) {
	const weather_res = await fetch(
		`https://api.openweathermap.org/data/3.0/onecall?lat=53.994139&lon=-1.538713&units=imperial&exclude=minutely,alerts&appid=${PUBLIC_API_KEY}`
	);
	const weather_data = weather_res.json();
	return {
		weather_data
	};
}