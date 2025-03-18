const {StatusCodes}  = require('http-status-codes')

const info = (req, res) => {
  return res.status(StatusCodes.OK).json({
    sucess: true,
    message: "API is live from our Travel Claim Expense Workflow",
    error: {},
    data: {},
  });
};

module.exports = {
  info,
};