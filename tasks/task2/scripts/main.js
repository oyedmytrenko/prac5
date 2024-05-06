function showQuote(author) {
  var quoteText = '';
  switch (author) {
      case 1:
          quoteText = 'Той, хто не любить своєї країни, нічого любити не може';
          break;
      case 2:
          quoteText = 'Кожному мила своя сторона.';
          break;
      case 3:
          quoteText = 'Усвідомлена любов до свого народу не поєднується з ненавистю до інших.';
          break;
      case 4:
          quoteText = 'Ті, що виїздять за море, міняють небо, а не душу.';
          break;
      case 5:
          quoteText = 'Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна»';
          break;
  }

  var newWindow = window.open("", "quoteWindow", "width=400,height=200");
  newWindow.document.write("<p>" + quoteText + "</p>");
  newWindow.document.close();
}