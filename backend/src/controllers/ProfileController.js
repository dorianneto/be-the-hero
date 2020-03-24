const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ongId = request.headers.authorization;
    const incidents = await connection('incidents')
      .select('*')
      .where('ong_id', ongId);

    return response.json(incidents);
  },
};
