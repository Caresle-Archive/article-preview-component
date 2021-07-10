const shareContainer = document.getElementById("share-info")
const buttonShare = document.getElementById("share-button")

let shareEnable = false

buttonShare.addEventListener("click", () => {
  shareEnable = !shareEnable

  if (shareEnable) {
    shareContainer.classList.remove("share-disable")
    shareContainer.classList.add("share-enable")
  } else {
    shareContainer.classList.remove("share-enable")
    shareContainer.classList.add("share-disable")
  }
})