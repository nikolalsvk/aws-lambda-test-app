exports.handler = function(event, context) {
  console.log('webpage = ' + event.webpage);
  context.done(null, 'link-scraper complete.');
};
