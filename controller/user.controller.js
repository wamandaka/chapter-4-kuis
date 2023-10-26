//  data, message, error, status
const ResponseTemplate = require("../helper/template.helper");

function test(req, res) {
  let resp = ResponseTemplate(null, "test", null, 200);
  res.json(resp);
}

module.exports = {
  test,
}