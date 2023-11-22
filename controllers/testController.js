const testController = (req, res) => {
  res.status(200).send({
    message: "test  welcomes you to route",
    success: true,
  });
};

module.exports = { testController };
