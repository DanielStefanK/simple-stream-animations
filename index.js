const interval = 300

const setAniClass = () => {
  const img = document.getElementById("image")
  img.className = "animate"
  setTimeout(() => {
    img.className = ""
    setTimeout(setAniClass, interval * Math.random() * 1000)
  }, 10000)
}

setTimeout(setAniClass, interval * Math.random() * 1000)

