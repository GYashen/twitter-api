const fetch = require('node-fetch');



module.exports = {

    index : function(req, res){
        res.send({
            success : true,
            message : 'Welcome to Twitter App API Service!!!'
        })
    },

    getData : function(req, res){
        fetch('https://api.twitter.com/1.1/statuses/user_timeline.json?count=100&screen_name='+ req.query.searchText,{
            method: "GET",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers : {
                //Authorization : ''
            },
            redirect: "follow",
            referrer: "no-referrer",
        })
        .then(res => res.json())
        .then(json => res.send(json))
        .catch(err => console.log(err));
    },
};