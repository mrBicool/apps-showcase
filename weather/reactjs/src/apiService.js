import axios from "axios";

const API_BASE_URL = "https://weatherapi-com.p.rapidapi.com/current.json";

export const getData = async (params) => {
  try {
    var headers = {
      "x-rapidapi-key": "b5aaed7e62msh82f4236d51ac11ep12eb08jsnb35bf7aafc98",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    };

    const response = await axios.get(`${API_BASE_URL}`, {
      params: params,
      headers: headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
};

// export const postData = async (data) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}`, data);
//     return response.data;
//   } catch (error) {
//     console.error("Error posting data", error);
//     throw error;
//   }
// };
