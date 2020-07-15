function showGif() {
    let img = document.createElement("img")
    img.setAttribute("src", "https://media.giphy.com/media/14oEbU8lEMN1WU/giphy.gif")
    img.setAttribute("class", "infoLoading")
    document.getElementById("info").appendChild(img)
}

