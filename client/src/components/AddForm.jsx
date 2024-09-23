import { useState } from "react";

export default function AddForm() {
  const [formData, setFormData] = useState({
    name: "",
    pastor: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/",
        formData
      );
      console.log("Added:", response.data);
      
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="church--container">
        <h2>Add a church to the database</h2>
        <form name="add--church" className="church--form">
          Church name:
          <input
            name="name"
            type="text"
            placeholder="Old Path Baptist Church"
            value={formData.name}
            onChange={handleChange}
            required
          />
          Pastor:
          <input
            name="pastor"
            type="text"
            placeholder="Michael Manly Perry"
            value={formData.pastor}
            onChange={handleChange}
            required />
          Phone number:
          <input    
            name="phone"
            type="tel"
            placeholder="555-555-5555"
            value={formData.phone}
            onChange={handleChange}
            required />
          Address:
          <input
            name="address"
            type="text"
            placeholder="Copied from Google"
            value={formData.address}
            onChange={handleChange}
            required />
          <button type="submit" onSubmit={handleSubmit}>Add Church</button>
        </form>
      </div>
    </>
  );
}
