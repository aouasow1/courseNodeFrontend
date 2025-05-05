//we are going to make an event listener...it will trigger with the DOM is loaded (aka upon visiting page)

addEventListener('DOMContentLoaded', async function() {
    const response = await fetch('https://35fb5a38-1a49-42a5-8e14-5144df04b00d-00-zsjc09syzutm.janeway.replit.dev/api/songs')
    const songs =await response.json()

    let html = ''
    for (let song of songs) {
        let songID = song._id
        html+= `
        <li>${song.title} - ${song.artist} - ${song.username} - <a href='details.html?id=${songID}'>Details</a> - <a href='edit.html?id=${songID}'>Edit Song</a> </li>
        `
    }
    document.querySelector('#list_of_songs').innerHTML = html
})