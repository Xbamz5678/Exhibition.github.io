* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  color: white;
  overflow-x: hidden;
  background: linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #0000ff, #9900ff, #ff00ff, #00ffff);
  background-size: 400% 400%;
  animation: gradientBackground 10s ease infinite;
}

@keyframes gradientBackground {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}

#snow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAAAZ9233AAAAxElEQVR42mJAAAD//wAB+J9VY8cAAAAAElFTkSuQmCC') repeat;
  pointer-events: none; 
  animation: snow 10s linear infinite;
}

@keyframes snow {
  0% {
      background-position: 0 0;
  }
  100% {
      background-position: 0 500px;
  }
}

header {
  width: 100%;
  padding: 20px;
  text-align: center;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
}

.header-content {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 20, 20, 0.5);
}

.glowing-text {
  font-size: 5rem;
  color: lightcoral;
  text-shadow: 
      0 0 10px rgba(255, 20, 20, 0.8),
      0 0 20px rgba(255, 20, 20, 0.6),
      0 0 30px rgba(255, 20, 20, 0.4);
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

a {
  background: linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #0000ff, #9900ff, #ff00ff, #00ffff);
  background-size: 400% 400%;
  color: white;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-position 0.3s ease-in-out;
}

a:hover {
  background-position: 100% 50%;
}

main {
  padding: 50px 20px;
}

section {
  padding: 60px 20px;
  text-align: center;
}

.rectangular-box {
  background: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(255, 20, 20, 0.5);
  max-width: 80%;
  margin: 0 auto;
  color: white;
  font-size: 1.2rem;
  line-height: 1.8;
}

.rainbow-text {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(45deg, #ff0000, #ff9900, #00ff00, #0000ff, #9900ff, #ff00ff, #00ffff);
  background-size: 400% 400%;
  animation: rainbowText 10s ease infinite;
  display: inline-block;
  padding: 20px;
  margin: 30px 0;
}

@keyframes rainbowText {
  0% {
      background-position: 0% 50%;
  }
  50% {
      background-position: 100% 50%;
  }
  100% {
      background-position: 0% 50%;
  }
}

#discord, #information, #scripts, #purchase {
  min-height: 100vh;
}

/* Smooth Scroll */
html {
  scroll-behavior: smooth;
}
