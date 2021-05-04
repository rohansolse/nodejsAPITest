const data = require('../data.json')
const { responseData } = require('../routes/responseHandler')

module.exports.records = function (req, res) {
    return new Promise((resolve, reject) => {
        try {
            let response = data;
            if (req.query.color) { response = response.filter(d => d.color == req.query.color) }
            if (req.query.disposition) { response = response.filter(d => d.disposition == req.query.disposition) }
            let
            const page = req.query.page
            const limit = req.query.limit
            const startIndex = (page - 1) * limit
            const endIndex = page * limit
            if (startIndex && endIndex) { response = response.slice(startIndex, endIndex) }
            resolve(responseData(res, true, 200, "success", response))
        }
        catch {
            reject(responseData(res, false, 400, "failure", {}))
        }
    })
}