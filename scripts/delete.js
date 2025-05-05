addEventListener('DOMContentLoaded', async function() {
    document.querySelector('#deleteBtn').addEventListener('click', deleteSong)
    getAllSong()
})

async function getAllSong() {
    const response = await fetch("https://35fb5a38-1a49-42a5-8e14-5144df04b00d-00-zsjc09syzutm.janeway.replit.dev/api/songs/")
    if(response.ok) {
        const songs = await response.json()
        let html = ""
        for(let song of songs) {
            html += `<option value = '${song._id}'>${song.title}</option>`
        }
        document.querySelector('#songDropDown').innerHTML= html
    }
    
}

async function deleteSong() {
    //get song id
    const songID = document.querySelector('#songDropDown option:checked').value
    const response = await fetch("https://35fb5a38-1a49-42a5-8e14-5144df04b00d-00-zsjc09syzutm.janeway.replit.dev/api/songs/" + songID, {
        method:'DELETE'
    });
    if(response.ok) {
        alert("song deleted")
        getAllSong();
    }
    else {
        document.querySelector('#error').innerHTML = 'Cannot Delete Song'
    }
}
