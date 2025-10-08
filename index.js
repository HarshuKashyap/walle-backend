const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("WALLE Health Backend Running 🚀");
});

// Example endpoint for symptom tracking
app.post("/symptoms", (req, res) => {
  const { symptoms } = req.body;
  console.log("Received Symptoms:", symptoms);
  res.json({ message: "Symptoms received successfully", symptoms });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
