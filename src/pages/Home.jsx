// pages/Home.jsx
import React from 'react';
import './Home.css';
import img from './temple.jpg';

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>ॐ नमः शिवाय</h1>
        <h2>शिव मंदिर दर्शन पोर्टल</h2>
        <p>
          यह प्लेटफ़ॉर्म भारत भर के प्रसिद्ध शिव मंदिरों की जानकारी देने के लिए बनाया गया है। 
          यहाँ आप भव्य मंदिरों की तस्वीरें देख सकते हैं, उनका इतिहास जान सकते हैं 
          और अपने द्वारा देखे गए मंदिरों को जोड़ भी सकते हैं।
        </p>
        <p>
          आइए, शिव की भक्ति में एक कदम और आगे बढ़ाएं और इस यात्रा को सबके लिए और पावन बनाएं।
        </p>
      </div>
      <div className="home-image">
        <img src={img} alt="शिव मंदिर" />
      </div>
    </div>
  );
}

export default Home;
