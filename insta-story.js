var arr = [{
        dp: "https://images.unsplash.com/photo-1604514775346-3f40ef356d68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        story: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://plus.unsplash.com/premium_photo-1668485968552-4ba2424c303b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1604681630513-69474a4e253f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1854&q=80"
    },
    {
        dp: "https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        story: "https://images.unsplash.com/photo-1604514649606-2fdd0399de88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1727&q=80",
        story: "https://images.unsplash.com/photo-1604436154692-5f99b849232c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        story: "https://images.unsplash.com/photo-1608477194035-aced1ef0e169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
    },

]
var storiyan = document.querySelector(".storiyan")
var clutter = ""
arr.forEach(function(elem, idx) {
    clutter += `<div class="story">
                    <img id="${idx}" class="card-img" src="${elem.dp}" alt="" />
                </div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets) {
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function() {
        document.querySelector("#full-screen").style.display = "none"
    }, 4000)

});





var con = document.querySelector(".card1")

var love = document.querySelector(".icons")

con.addEventListener("dblclick", function() {
    love.style.transform = "translate(-50%,-50%) scale(1)"
    love.style.opacity = 0.8

    setTimeout(function() {
        love.style.opacity = 0
    }, 1000);
    setTimeout(function() {
        love.style.transform = "translate(-50%,-50%) scale(0)"
    }, 2000);

})





let a = 100;

document.getElementById("likes").innerText = a;

function btn() {
    a = a + 1;
    document.getElementById("likes").innerText = a;
}


function cmt() {

}