yunqi = require("../lib/yunqi")

client = yunqi("http://apify.shopex.cn/router", "xjMeB4h", "FkJtb5weE4dSNYX8waj4");

client.rpc("shopex.query.appqueue", {
    async: false,
    type: "GET",
    params: {"user_eid":"1233","app_id":"232er"},
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