# 🌦️ Multi-City Weather App

A simple and stylish weather app built with **HTML**, **CSS**, and **JavaScript**, using the **OpenWeatherMap API**. It allows users to fetch and view current weather information for multiple cities at once.

---

## 🔍 Features

- 🔁 **Fetch weather data** for multiple cities (comma-separated)
- ⚡ **Parallel API requests** for faster loading
- ✅ **Error handling** for invalid or missing city names
- 🎨 **Modern, responsive UI** with animated transitions
- 🕒 Displays current **local time and date**
- 🌤️ Weather icons, temperature, description, wind speed, and more

---

## 📸 Demo

![App Screenshot](screenshot.png)

Try entering:  
`Boston, Tokyo, Paris, InvalidCity`

---

## 🧠 How AI Helped

AI assisted in:
- Identifying how to restructure the app for multi-city support
- Optimizing code for parallel fetch requests using `Promise.all`
- Adding CSS improvements for a cleaner, card-based layout
- Writing this documentation with clear structure and markdown formatting

---

## 🚀 How to Use

1. **Clone this repo** or [download](https://github.com/your-repo-url)
2. Open `index.html` in a browser
3. Enter one or more city names separated by commas
4. Click **Fetch** to see the results

---

## 🧪 What I Learned

- How to handle multiple asynchronous API requests efficiently
- Structuring code for reusability and UI updates
- How small UI tweaks can significantly improve user experience

---

## 🎯 One Thing I’m Proud Of

Successfully implemented **multi-city support** with clean error messages and card-based layout—making it intuitive and visually clear for users.

---

## 🔧 What I’d Improve

Given more time, I’d:
- Add caching with `localStorage` to reduce redundant API calls
- Include **geolocation support**
- Add a **unit toggle** (Celsius ↔ Fahrenheit)
- Use a framework like React or Vue for better scalability

---

## 🔑 API Info

This app uses the [OpenWeatherMap API](https://openweathermap.org/current).  
Make sure you replace the placeholder API key in `script.js`:

```js
const apiKey = 'YOUR_API_KEY_HERE';
