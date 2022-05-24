const { v4: uuid } = require("uuid");
const listingData = require("../listings.json");

// to update data
const updateData = (req, res) => {
  // get id passed into url
  const { id } = req.params;

  if (!id) {
    res.status(400);
    throw new Error("Please provide ID for fetching resource");
  }
  // find associated data item
  let listingToBeUpdated = listingData.listings.find((list) => list.id === id);

  // get new data passed into request body
  const newListingData = { ...req.body };
  if (!newListingData) {
    res.status(400);
    throw new Error("Please provide necessary resource for this action");
  }

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
  if (!id) {
    res.status(400);
    throw new Error("Please provide ID for fetching resource");
  }
  const listing = listingData.listings.filter((list) => list.id !== id);

  res.status(200).json(listing);
};

// to add new data
const addData = (req, res) => {
  const newData = { ...req.body };
  if (!newData) {
    res.status(400);
    throw new Error("Please add the necessary fields");
  }
  listingData.listings.push({ ...newData, id: uuid() });
  res.status(200);
  res.json(listingData.listings);
};

//   to get a single data using the id
const getData = (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    throw new Error("Please provide ID for fetching resource");
  }
  const listing = listingData.listings.find((list) => list.id === id);
  res.json(listing);
};

//   to get all data
const getAllData = (req, res) => {
  res.status(200).json(listingData);
};

module.exports = {
  getAllData,
  getData,
  deleteData,
  updateData,
  addData,
};
