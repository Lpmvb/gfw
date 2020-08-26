const axios = require('axios');

module.exports = async (_, res) => {
  const response = await axios.get(
    'https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt',
  );
  res.status(200).send(new Buffer(response.data, 'base64').toString('ascii'));
};
