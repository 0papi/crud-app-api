const express = require("express");
const app = express();
const listingData = require("./listings.json");
const PORT = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/listings", (req, res) => {
  const { ...args } = req.body;
  console.log(args);
  listingData.listings.push({
    type,
    bedrooms,
    bathrooms,
    offer,
    regularPrice,
    discountedPrice,
    id: parseInt(id++),
  });
});

app.get("/api/listings/:id", (req, res) => {
  const { id } = req.params;
  const listing = listingData.listings.find((list) => list.id === id);
  res.json(listing);
});

app.get("/api/listings", (req, res) => {
  res.status(200).json(listingData);
});

app.get("/", (req, res) => {
  res.send(
    '<h1>You dont wanna hit this endpoint.</h1> <a href="/api/listings">Go here instead</a>'
  );
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
