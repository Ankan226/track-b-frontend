import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addPost = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

export const removePost = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};