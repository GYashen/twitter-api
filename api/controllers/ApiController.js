const fetch = require('node-fetch');



module.exports = {
    getData : function(req, res){
        fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name='+ req.query.searchText,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers : {
                Authorization : 'Bearer AAAAAAAAAAAAAAAAAAAAAPdX8QAAAAAAm5GPqkxL1bYv1%2BSDFah9USmzJDc%3DWSETDTy2TTIEVlNKO00bjFQdiq6cePEXTupkhvZhXF4d6ocLRD'
            },
            redirect: "follow",
            referrer: "no-referrer",
        })
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(err => console.log(err));
    },
};