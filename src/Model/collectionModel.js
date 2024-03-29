const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema(
  {
    collectonName: {
      type: String,
      required: [true, "Collection must have a name"],
      unique: [true, "collection name must be unique"],
    },
    product: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    collectionDescription: {
      type: String,
      required: [true, "Collection needs a description"],
      maxLength: [250, "Description must not be more than 250 character"],
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    collectionBanner: String
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Collection", collectionSchema);
