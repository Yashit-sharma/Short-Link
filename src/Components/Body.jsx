import { useState } from 'react'
import React from 'react'
import { motion } from "framer-motion"
import '../Styles/Body.css'
import '../Styles/Loader.css'
import upload from '../assets/upload.svg';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function Body({ setter, initial, Loading, setLoading, setData, Data, response,setresponse}) {
  // const [response, setresponse] = useState(false)
  const [copy, setcopy] = useState(false)
  const token = 'e0f2e5bff3c370fa68595be2622bbc765098702d';
  const fetchData = async () => {
    setData(initial);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    setresponse(true);
    setter('');

    // const bitlyUrl = 'https://api-ssl.bitly.com/v4/shorten';
    // const accessToken = token;
    // const longUrl = initial;
    // const axiosConfig = {
    //   headers: {
    //     Authorization: `Bearer ${accessToken}`,
    //     'Content-Type': 'application/json',
    //   },
    // };
    // const data = {
    //   long_url: longUrl,
    // };
    // axios.post(bitlyUrl, data, axiosConfig)
    //   .then(response => {
    //     console.log('Shortened URL:', response.data.link);
    //     setData(response.data.link);
    //     setLoading(false);
    //     setresponse(true);
    //     setter('');
    //   })
    //   .catch(error => {
    //     console.error('Error:', error.message);
    //   });
  };
  const hadnleUrl = (e) => {
    setter(e.target.value);
  }
  const handleSubmit = () => {
    if (document.getElementById('border').value.length > 8) {
      setLoading(true);
      fetchData();
    }
    else {
      setter('');
      alert('Entered Link is Already too Short');
    }
  }
  const handleCopy = () => {
    setcopy(true);
    alert('Link Copied to Clip Board')
  }
  return (
    <>
      {!Loading ?
        <div className="main-body">
          <div className="center-body">
            <input value={initial} onChange={(e) => hadnleUrl(e)} className='modal-input body-input' id='border' placeholder='Please enter your Link here'></input>
            <button onClick={() => { handleSubmit() }} className='upload-btn'><img src={upload} alt="" /></button>
          </div>
         {response && <CopyToClipboard text={Data} onCopy={() => { handleCopy() }}>
            <div className='short-link'>{Data}</div>
          </CopyToClipboard>}
          {!Loading && <div className="about">
            <motion.p
          animate={{opacity : [0,1],scale:[0.5,1]}}
          transition={{duration:0.6}}>
              Struggling with unwieldy URLs? Short Link is your answer! This free service shrinks your long links into bite-sized, easy-to-share versions.
            </motion.p>
            <motion.p
            animate={{opacity : [0,1],scale:[0.5,1]}}
          transition={{duration:0.6,delay:0.6}}>
            Simply paste your URL, click "Shorten," and voila! Share your shortened link on social media, emails, or anywhere you need. No more character limitations or messy text.
            </motion.p>
            <motion.p
            animate={{opacity : [0,1],scale:[0.5,1]}}
          transition={{duration:0.6,delay:1.2}}>
            Short Link even offers optional premium features like branded links and analytics to track your clicks and reach.
            Shorten, share, and succeed with Short Link. Visit today and experience the power of short URLs!
            </motion.p>
          </div>}
        </div>
        :
        <div className="center">
          <div className="loadingio-spinner-ball-51w9y2fnjhb"><div className="ldio-z6ggb5zszfp">
            <div></div>
          </div></div>
        </div>
      }

    </>
  )
}
