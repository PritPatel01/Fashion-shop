import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true, default: 0 },
  images: [String],
  createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
export default Product;