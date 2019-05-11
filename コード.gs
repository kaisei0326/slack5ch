function postSlack(text){
  var url = "https://hooks.slack.com/services/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";
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + text + '"}'
  };
  UrlFetchApp.fetch(url, options);
}

function test(e) {
  postSlack("from bot");
}