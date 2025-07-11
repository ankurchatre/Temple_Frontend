import React, { useState, useEffect } from "react";
import Axios from "../Axiox";
import "./AddTemple.css";

function AddTemple() {
  const [authorized, setAuthorized] = useState(false);
  const [checkedPassword, setCheckedPassword] = useState(false);

  // 🔐 Password check logic
  useEffect(() => {
    alert("🚫 This section is only for admin.\nPlease enter the admin password to continue.");

    const correctPassword = "Ankur@1234";
    const userInput = window.prompt("🔐 Enter admin password:");

    if (userInput === correctPassword) {
      setAuthorized(true);
    }

    setCheckedPassword(true); // ✅ Always update this after prompt
  }, []);

  // 🔁 Redirect if not authorized after check
  useEffect(() => {
    if (checkedPassword && !authorized) {
      alert("❌ Incorrect password. Redirecting to homepage...");
      window.location.href = "/";
    }
  }, [checkedPassword, authorized]);

  // 📝 Form state
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    state: "",
    description: ""
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await Axios.post("/temple", formData);
      const templeId = response.data.id;

      if (imageFile) {
        const imgFormData = new FormData();
        imgFormData.append("image", imageFile);

        await Axios.post(`/temple/${templeId}/upload`, imgFormData, {
          headers: { "Content-Type": "multipart/form-data" }
        });

        alert("✅ Temple data and image uploaded successfully!");
      }

      // Reset form
      setFormData({
        name: "",
        city: "",
        state: "",
        description: ""
      });
      setImageFile(null);
    } catch (error) {
      console.error("Upload error:", error);
      alert("❌ Error adding temple or uploading image");
    }
  };

  // ⏳ Wait until password is checked
  if (!checkedPassword || !authorized) return null;

  return (
    <div className="add-temple-container">
      <h2>➕ Add Temple (Admin Panel)</h2>
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
