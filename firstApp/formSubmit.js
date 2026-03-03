const queryString = require('querystring');
function formSubmit (req, res) {
    let dataBody = []
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    });
    let redableData = {};
    req.on('end', () => {
        let body = Buffer.concat(dataBody).toString();
        redableData = queryString.parse(body);
        console.log(redableData);
        res.write(`
        <h1>You can get the data for user form here </h1>
        <p>Name: ${redableData.name}</p>
        <p>Email: ${redableData.email}</p>
    `);
        res.end();
    })

}

module.exports = formSubmit;