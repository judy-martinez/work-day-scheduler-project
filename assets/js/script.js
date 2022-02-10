// script accomplished with help from tutor J Carver
$("#currentDay").text(moment().format("L"))

// $("#description9").val(moment().format("L"))
var timeBlocks = document.querySelectorAll(".col-9")
var saveBtn = $('.saveBtn')
saveBtn.click((e)=>{

    localStorage.setItem(e.target.parentElement.children[1].id, e.target.parentElement.children[1].value)
    console.log(timeBlocks)
        
})

for (let i = 0; i < timeBlocks.length; i++) {
    timeBlocks[i].value = localStorage.getItem(timeBlocks[i].getAttribute('id'))
    console.log(timeBlocks[i].getAttribute('id'))
}