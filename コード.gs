function doPost(e){
  var url =  PropertiesService.getScriptProperties().getProperty('SLACK_POST_URL');
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
      "payload" : JSON.stringify({
        text: "今日の予定",
        channel: "@"+e.parameter.user_name
      })
    };

  UrlFetchApp.fetch(url, options);
  return null
}