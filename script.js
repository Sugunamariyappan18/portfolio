var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupaddbutton = document.getElementById("btn")
popupaddbutton.addEventListener("click", function () {
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
});
//select a cancel btn
var cancelpopup = document.getElementById("cancel-btn")

cancelpopup.addEventListener("click", function (event) {
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"


})
//select container,book-title-input,book-author-input,short description,book-btn
var popupcontainer = document.querySelector(".container")
var addbook = document.getElementById("book-btn")
var booktitleinput = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")
addbook.addEventListener("click", function (event) {
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>
    <button onclick="editbook(event)">edit</button>`
    popupcontainer.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"

})
function deletebook(event) {
    var deletebtn = event.target.closest("div")
    deletebtn.remove()

}
function editbook(event){
    var currentedit =event.target.closest("div")
    booktitleinput.value=currentedit.querySelector("h2").innerText
    bookauthorinput.value=currentedit.querySelector("h5").innerText
    bookdescriptioninput.value=currentedit.querySelector("p").innerText
    addbook.innerText="update"
    addbook.setAttribute("data-mode","edit")

    popupoverlay.style.display = "block"
    popupbox.style.display = "block"


}
