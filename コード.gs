function postSlack(text){
  var url = "https://hooks.slack.com/services/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";
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + text + '"}'
  };
  UrlFetchApp.fetch(url, options);
}

function test(){
  postSlack("これはテストです");
}