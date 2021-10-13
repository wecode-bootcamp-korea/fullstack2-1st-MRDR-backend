import { productService } from '../services';

const getAllproducts = async (req, res, next) => {
  try {
    const params = req.query;
    const { price } = params;
    if (price) {
      validatePriceQueryValue(price);
    }
    const products = await productService.getAllproducts(params);
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
};

const validatePriceQueryValue = (priceVal) => {
  if (!(priceVal === 'ASC' || priceVal === 'DESC')) {
    throw {
      status: 400,
      message: 'BAD_REQUEST_WRONG_QUERY_PARAM_VALUES',
    };
  }
};

export { getAllproducts };