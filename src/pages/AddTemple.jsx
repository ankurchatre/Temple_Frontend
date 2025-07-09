import React, { useState } from "react";
import Axios from "../Axiox";
import "./AddTemple.css";

function AddTemple() {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    description: ""
  });

  const [imageFile, setImageFile] = useState(null); // actual image file

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]); // get the selected file
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // 1. Add temple info
      const response = await Axios.post("/temple", formData);
      const templeId = response.data.id;

      // 2. Upload image
      if (imageFile) {
        const imgFormData = new FormData();
        imgFormData.append("image", imageFile);

        await Axios.post(`/temple/${templeId}/upload`, imgFormData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        alert("Temple data and image uploaded successfully!");
      }

      // 3. Reset
      setFormData({
        name: "",
        city: "",
        state: "",
        description: ""
      });
      setImageFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error adding temple or uploading image");
    }
  };

  return (
    <div className="add-temple-container">
      <h2>Add Temple</h2>
      <form onSubmit={handleSubmit} className="temple-form">
        <label>नाम (Temple Name):</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>शहर (City):</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />

        <label>राज्य (State):</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />

        <label>विवरण (Description):</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={10}
          maxLength={2000}
          placeholder="यहाँ मंदिर का पूरा विवरण हिंदी में लिखें..."
          required
        ></textarea>

        <label>मंदिर की छवि (Image):</label>
        <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />

        <button type="submit">Add Temple</button>
      </form>
    </div>
  );
}

export default AddTemple;
