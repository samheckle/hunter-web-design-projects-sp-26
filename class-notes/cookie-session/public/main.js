window.onload = () =>{
    // add an event listener to every album in the carasel
    album.addEventListener("click", (e)=>{
        e.target.id
        let params = new URLSearchParams({
            id: e.target.id
        })
        fetch("/getOneAlbum?"+params)
    })
}