import {React,useState,useEffect} from 'react'
import Navbar from './Components/Navbar'
import Body from './Components/Body'
export default function App() {
  // const [url, seturl] = useState('');
  const [url, seturl] = useState(localStorage.getItem('URL_KEY')||'')
  const [response, setresponse] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Data, setData] = useState('')
  useEffect(() => {
    localStorage.setItem('URL_KEY', url);
  }, [url]);
  return (
   <>
   <Navbar initial={url} setter={seturl} setLoading={setLoading} setData={setData} setresponse={setresponse}/>
   <Body initial={url} setter={seturl} Loading={Loading} setLoading={setLoading} setData={setData} Data={Data} response={response} setresponse={setresponse}/>
   </>
  )
}