addEventListener("DOMContentLoaded", async function() {
    const urlParam = new URLSearchParams(window.location.search)
    const songID = urlParam.get('id')
    console.log(songID)

    const response = await fetch("https://35fb5a38-1a49-42a5-8e14-5144df04b00d-00-zsjc09syzutm.janeway.replit.dev/api/songs/" + songID)
    const song = await response.json()
    console.log(song)

    let heading = ''
    heading+= `${song.title}`
    document.querySelector('h1').innerHTML = heading

    let html = ''
    html+= `
        <h3>Artist - ${song.artist} </h3>
        <p>Popularity - ${song.popularity} </p>
        <p>ReleaseDate - ${song.releaseDate} </p>
    
    `
    document.querySelector('div').innerHTML = html
})
