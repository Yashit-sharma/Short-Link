import React,{useState} from 'react'
import axios from 'axios';
import '../Styles/Navbar.css'
import close from '../assets/close.svg';
export default function Navbar({setter,initial,setLoading,setData,setresponse}) {
  const token = 'e0f2e5bff3c370fa68595be2622bbc765098702d';
  const [isopen, setisopen] = useState(false);

  const fetchData = async () =>{
    const bitlyUrl = 'https://api-ssl.bitly.com/v4/shorten'; 
    const accessToken = token; 
    const longUrl = initial; 
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    };
    const data = {
      long_url: longUrl,
    };
    axios.post(bitlyUrl, data, axiosConfig)
      .then(response => {
        console.log('Shortened URL:', response.data.link);
        setData(response.data.link);
        setLoading(false);
        setresponse(true);
        setter('');
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };
  const handleOpen = ()=>{
    setisopen(true);
  }
  const closeModal = ()=>{
    setisopen(false);
  }
  const hadnleUrl = (e) =>{
    setter(e.target.value);
  }
  const hadnleSubmit = (e) =>{
    if(e.keyCode === 13)
    {
      if(document.getElementById('border').value.length > 8){
        setLoading(true);
        setisopen(false);
        fetchData();
      }
      else{
        setter('');
        alert('Entered Link is Already too Short');
      }
    }
  }
  return (
  <>
   <div className="navbar">
    <div className="nav-logo">
    <p>Short-Link</p>
    </div>
    <div className="nav-btns">
    <button className='nav-btn' onClick={()=>{handleOpen()}}>Get Started</button>
    <dialog id= {isopen ? 'input-modal' : ''} className={`modal ${isopen ? 'modal-animated' : ''}`} open={isopen}>
      <div className="modal-cont">
      <input value={initial} onChange={(e)=>hadnleUrl(e)} onKeyDown={(e)=>{hadnleSubmit(e)}} className='modal-input' id={isopen ? 'border' : ''} placeholder='Please enter your Link here'></input>
      <button onClick={()=>{closeModal()}} className='closeBtn'><img src={close} alt="" /></button>
      </div>
    </dialog>
    </div>
   </div>
  </>
  )
}