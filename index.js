const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Environment variables support
const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root route
app.get("/", (req, res) => {
  res.send("WALLE Health Backend Running 🚀");
});

// Symptom tracking route
app.post("/api/symptom", (req, res) => {
  try {
    const { symptoms } = req.body;
    if (!symptoms || !Array.isArray(symptoms)) {
      return res.status(400).json({ message: "Invalid symptoms data" });
    }

    console.log("Received Symptoms:", symptoms);

    // Response to frontend
    res.json({ message: "Symptoms received successfully", symptoms });
  } catch (err) {
    console.error("Error in /api/symptom:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Optional: Advice route (future feature)
app.post("/api/advice", (req, res) => {
  try {
    const { symptoms } = req.body;
    console.log("Advice requested for:", symptoms);

    // Example dummy advice
    const advice = "Drink water, rest well, and consult a doctor if symptoms persist.";
    res.json({ advice });
  } catch (err) {
    console.error("Error in /api/advice:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
