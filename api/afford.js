// import express from "express";
// import axios from "axios";
// const route = express.Router();
// route.get("/number", async (req, res) => {
//   const { url } = req.query;
//   const result = [];
//   for (let i = 0; i < url.length; i++) {
//     const response = await axios.get(url[i]);
//     result.push(...response.data);
//   }
//   console.log(result);
// });
// export default route;
import express from "express";
import axios from "axios";

const route = express.Router();

route.get("/number", async (req, res) => {
  const { url } = req.query;
  const result = [];
  try {
    for (let i = 0; i < url.length; i++) {
      const response = await axios.get(url[i]);
      if (Array.isArray(response.data)) {
        result.push(...response.data);
      } else {
        console.error("Data received is not an array:", response.data);
      }
    }
    // console.log(result);
    result.sort((a, b) => {
      return a - b;
    });
    const set = new Set(result);
    //console.log(set);
    const numbers = [...set];
    res.status(200).json({ numbers });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

export default route;
