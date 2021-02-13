const interval = 300

const src1 = "assets/cheeots-surprised.png"
const src2 = "assets/cheeots-laught.png"

const setNextImg = () => {
  const img = document.getElementById('image')
  img.className = "animate"
  setTimeout (() => {
    img.src = isImg1(img.src) ? src2 : src1

    setTimeout(() => {
      img.src = isImg1(img.src) ? src2 : src1
      setTimeout(setNextImg, interval * Math.random() * 1000)
    }, 8000)

  }, 2000)
}

setTimeout(setNextImg, interval * Math.random() * 1000)

const isImg1 = (src) => {
  return src.split("/")[src.split("/").length -1] === src1.split("/")[src1.split("/").length -1]
}