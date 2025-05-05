addEventListener('DOMContentLoaded', function() {
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

//add the song to the database, it has to be async function because we are calling data outside our server
async function addSong() {
    //create a song base on the form that the users fill out

    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        popularity: document.querySelector("#popularity").value,
        releaseDate: document.querySelector("#released").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : [],
        username: localStorage.getItem("uname")
    }

    const response = await fetch("https://35fb5a38-1a49-42a5-8e14-5144df04b00d-00-zsjc09syzutm.janeway.replit.dev/api/songs", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },

        body: JSON.stringify(song)
    })

    if (response.ok) {
        const results = await response.json()
        alert("Added song with ID of" + results._id)
        //reset the form after song is successful added

        document.querySelector("form").reset()

    }
    else {
        document.querySelector("#error").innerHTML = "Cannot send song"
    }
}

