let color=document.getElementById("color")
let creatBtn=document.getElementById("creatBtn")
let list=document.getElementById("list")

creatBtn.onclick=()=>{
    let newnode=document.createElement("div")
    newnode.classList.add("note")
    newnode.innerHTML=`
    <span class="close">x</span>
    <textarea placeholder="Write something..." rows="10" cols="30"></textarea>
    `
    newnode.style.borderColor=color.value
    list.appendChild(newnode)
}

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("close")){
        e.target.parentElement.remove()
    }
})

let cursor={
    x:null,
    y:null
}
let note={
    dom:null,
    x:null,
    y:null
}
document.addEventListener("mousedown",(e)=>{
    if(e.target.classList.contains("note")){
        cursor={
            x:e.clientX,
            y:e.clientY
        }
        note={
            dom:e.target,
            x:e.target.getBoundingClientRect().left,
            y:e.target.getBoundingClientRect().top
        }
    }
})

document.addEventListener("mousemove",(e)=>{
    if(note.dom==null) return
    let currentCursor={
        x:e.clientX,
        y:e.clientY
    }
    let distance={
        x:currentCursor.x-cursor.x,
        y:currentCursor.y-cursor.y
    }

    note.dom.style.left=(note.x+distance.x)+"px"
    note.dom.style.top=(note.y+distance.y)+"px"
    note.dom.style.cursor="grabbing"
})

document.addEventListener("mouseup",(e)=>{
    if(note.dom==null) return
    note.dom.style.cursor="grab"
    note.dom=null
})