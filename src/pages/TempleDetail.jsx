// pages/TempleDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TempleDetail.css';
import Axios from '../Axiox';




function TempleDetail() {
  const { id } = useParams();
  
  const [data, setdata] = useState([])
  useEffect(() => {
    Axios.get(`/temple/${id}`)
      .then(res => setdata(res.data))
      .catch(err => console.log(err))


  }, [])
  console.log(data);

  if (!data) return <p style={{ padding: '30px' }}>Temple not found.</p>;

  return (
    <div className="temple-detail">
      <img src={data.imageUrl} alt={data.name} />
      <div className="details">

      <h2>{data.name}</h2>
      <ul className="location">
        <li>शहर : {data.city}</li>
        <li>राज्य: {data.state}</li>

      </ul>
      <p>{data.description}</p>
      </div>
    </div>
  );
}

export default TempleDetail;
