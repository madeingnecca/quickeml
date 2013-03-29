(function() {
  var html = document.documentElement.innerHTML;
  var encoder = document.createElement('DIV');
  var htmlEncoded;

  html = '<html>' + html + '</html>';

  if ('textContent' in encoder) {
    // FF has no innerText.
    encoder.textContent = html;
  }
  else {
    encoder.innerText = html;
  }

  // Compose email.
  var eml = [
    'Date: ' + (new Date).toGMTString(),
    'To: teddy@bear.com',
    'From: me@madeingnecca.com',
    'Subject: html to eml',
    'X-Mailer: quickeml',
    'MIME-Version: 1.0',
    'Content-Transfer-Encoding: 8bit',
    'Content-Type: text/html; charset="UTF-8"'
  ];

  eml.push('');
  eml.push('');

  // Finish email, adding the html, encoded.
  htmlEncoded = encoder.innerHTML;
  eml.push(htmlEncoded);

  // Write data in a popup. Easy to implement, easy to copy from.
  var win = window.open();
  win.document.write(eml.join('<br>'));
  win.document.close();
}());
