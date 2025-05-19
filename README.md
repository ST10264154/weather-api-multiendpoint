# 🌦️ Weather & Utility API

A simple Express-based Node.js API that offers weather data, string manipulation, random number generation, and time utilities. Easily deployable using Docker and Render.

---

## 🚀 Features

* 🌍 Get real-time weather by city (uses OpenWeatherMap API)
* 🔁 Reverse a string (`POST /reverse`)
* ➕ Add two numbers via query params (`GET /add`)
* ⏰ Get current server time (`GET /time`)
* 🎲 Get a random number between 0 and 999 (`GET /random`)

---

## 📦 How to Fork the Repository

1. Go to the original repository page on GitHub.
2. Click the **Fork** button in the top right corner.
3. Choose your GitHub account to fork the repository to.

---
## 🌦️ How to Get Openweather api key

1. Go to (https://openweathermap.org/)
2. Create a profile and go to API keys.
3. Generate a free API key.

---
## 🌐 How to Deploy Forked Repo to Render

1. Go to [https://render.com](https://render.com) and log in or create an account.
2. Click **New +** → **Web Service**.
3. Connect your GitHub and select the **forked repo**.
4. Fill in the deployment details:

   * **Environment**: `Docker`
   * **Build Command**: Leave blank (Dockerfile handles this)
   * **Start Command**: Leave blank (CMD in Dockerfile handles this)
   * **Environment Variables**:
     Add:

     ```
     OPENWEATHER_API_KEY=your_api_key_here
     ```
5. Click **Create Web Service** and wait for deployment to complete.

---

## 🧪 How to Test the API Using Postman

> Replace `https://your-app-name.onrender.com` with your actual Render URL.

### 1. **Check if API is running**

* **GET** `/`
  ✅ Should return: `🌍 Weather API is running!`

### 2. **Get Weather by City**

* **GET** `/weather/{city}`
  Example: `/weather/london`

**Response**:

```json
{
  "city": "London",
  "temperature": "15 °C",
  "condition": "broken clouds",
  "humidity": "72%",
  "wind_speed": "4.1 m/s"
}
```

### 3. **Reverse a String**

* **POST** `/reverse`
  **Body (JSON)**:

```json
{ "text": "hello" }
```

**Response**:

```json
{ "reversed": "olleh" }
```

### 4. **Add Two Numbers**

* **GET** `/add?a=5&b=10`
  **Response**:

```json
{ "result": 15 }
```

### 5. **Get Current Time**

* **GET** `/time`
  **Response**:

```json
{ "time": "2025-05-19T07:52:00.123Z" }
```

### 6. **Get a Random Number**

* **GET** `/random`
  **Response**:

```json
{ "random": 532 }
```

---

## 🐳 Docker Overview

This project uses a Dockerfile based on `node:lts-alpine`.
The container runs with `NODE_ENV=production` and uses a non-root user (`node`) for improved security.

---
