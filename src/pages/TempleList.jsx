// pages/TempleList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './list.css';
import Axios from '../Axiox';




function TempleList() {
  const [data, setdata] = useState([])
useEffect(() => {
 Axios.get("/temple")
  .then(res=>setdata(res.data))
  .catch(err=>console.log(err))

  console.log(data)

}, [])
  return (
    <div className="temple-grid">
      {data.map(temple => (
        <div className="temple-card" key={temple.id}>
          <img src={temple.imageUrl} alt={temple.name} />
          <h3>{temple.name}</h3>
          <Link to={`/temple/${temple.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default TempleList;