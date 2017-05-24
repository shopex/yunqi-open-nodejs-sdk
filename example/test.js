yunqi = require("../lib/yunqi")

client = yunqi("http://apify.xyunqi.com/router", "test", "test");

client.rpc("wsc.search_order_lists", {
    async: false,
    type: "POST",
    params: {"page_no":"1","page_size":"40","start_time":"2016-10-01 00:00:00","end_time":"2016-10-01 22:00:00"},
    success: function(result){
        console.info("test-success:");
        console.info(result)
    },
    error: function(err){
        console.info("test-error:");
        console.info(err)
    },
    timeout: 3
});

//var notify = client.notify();