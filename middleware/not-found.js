const notFound = (req, res, next) => {
  res.status(404).send(`Can't found your page`);
};

export default notFound;
