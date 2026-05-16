import { useState, useEffect } from 'react'
import "../../style.css"

function App() {
  const [stats, setStats] = useState({})

  useEffect(() => {
    const apikey = `AIzaSyB33zjnYTton45BgJx4VTTYnoASFKC3564`
    const idchannel = `UC7j2YvVEVc174XBQvm7Yvxg`

    function loadApi() {
      const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${idchannel}&key=${apikey}`

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const statsData = data.items[0].statistics
          setStats(statsData)
        })


    }

    loadApi();
  }, [])

  useEffect(() => {
    if (stats !== "") {
      console.log(stats)
    }
  }, [stats])

  return (
    <>
      <div className="container">
        <h1>Meu canal</h1>

        <div className="info">
          <span className='label'>Views totais</span>
          <span className='valor'>{stats.viewCount}</span>
        </div>

        <div className="info">
          <span className='label'>Inscritos</span>
          <span className='valor'>{stats.subscriberCount}</span>
        </div>

        <div className="info">
          <span className='label'>Videos</span>
          <span className='valor'>{stats.videoCount}</span>
        </div>

      </div>
    </>
  )
}

export default App
