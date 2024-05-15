"use client"

import { useState } from 'react'
import CreateShortenedURL from './server-actions/cteate'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

function isValidString(inputString: string) {
  // Regular expression to match only letters, numbers, and dashes
  var regex = /^[a-zA-Z0-9\-]+$/;
  
  // Test the input string against the regular expression
  return regex.test(inputString);
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [path, setPath] = useState("")
  const [url, setUrl] = useState("")

  const [newUrl, setNewUrl] = useState<string>()

  const create = async () => {
    if(loading) return
    if(!path || !url) return
    setLoading(true)

    const response = await CreateShortenedURL({
      path,
      url
    }).catch(() => {})

    if(!response?.ok) {
      alert("Vytvoření odkazu se nezdařilo")
    } else {
      alert("Odkaz úspěšně vytvořen")

      setNewUrl(window.location.origin + "/" + path)
    }

    setLoading(false)
  }

  return (
    <main style={{height: "100%"}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
        <div>
        <form action="" onSubmit={(e) => {
        e.preventDefault()
        create()
      }}>
        <h1>Vojtův zkracovač</h1>
        <label htmlFor="path">Cesta</label><br />
        <input type="text" name='path' id='path' value={path} style={{width: "100%"}} onChange={(e) => {
          if(!isValidString(e.target.value) && e.target.value !== "") return
          setPath(e.target.value)}
        } /><br /><br />
        <label htmlFor="url">URL</label><br/>
        <input type="text" name="url" id="url" value={url} style={{width: "100%"}} onChange={(e) => setUrl(e.target.value)} /><br /><br/>
        <button type='submit' disabled={loading}>Vytvořit</button>
      </form>
      {newUrl && <div style={{padding: "2rem", backgroundColor: "#40E0D0", borderRadius: "1rem", marginTop: "1rem"}}>
        Nová adresa: <a href={newUrl} target='_blank'>{newUrl}</a>
      </div>}
        </div>
      </div>
      
    </main>
  )
}
