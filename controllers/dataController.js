const listingData = require("../listings.json");

// to update data
const updateData = (req, res) => {
  // get id passed into url
  const { id } = req.params;
  // find associated data item
  let listingToBeUpdated = listingData.listings.find((list) => list.id === id);

  // get new data passed into request body
  const newListingData = { ...req.body };

  // pass new data to listing to be updated
  listingToBeUpdated.bathrooms = newListingData.bathrooms;
  listingToBeUpdated.bedrooms = newListingData.bedrooms;
  listingToBeUpdated.discountedPrice = newListingData.discountedPrice;
  listingToBeUpdated.furnished = newListingData.furnished;
  listingToBeUpdated.geolocation = newListingData.geolocation;
  listingToBeUpdated.name = newListingData.name;
  listingToBeUpdated.type = newListingData.type;
  listingToBeUpdated.parking = newListingData.parking;

  res.status(200).json(listingToBeUpdated);
};

// delete data
const deleteData = (req, res) => {
  const { id } = req.params;
  const listing = listingData.listings.find((list) => list.id === id);
  listing.remove();

  res.status(200).json(req.params.id);
};

// to add new data
const addData = (req, res) => {
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
  res.status(200);
  res.json(listingData.listings);
};

//   to get a single data using the id
const getData = (req, res) => {
  const { id } = req.params;
  const listing = listingData.listings.find((list) => list.id === id);
  res.json(listing);
};

//   to get all data
const getAllData = (req, res) => {
  res.status(200).json(listings);
};

module.exports = {
  getAllData,
  getData,
  deleteData,
  updateData,
  addData,
};
