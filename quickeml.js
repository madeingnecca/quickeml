(function() {
  var html = document.documentElement.innerHTML;
  var encoder = document.createElement('DIV');
  var charset = document.charset || document.characterSet || 'UTF-8';
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
    'From: me@domain.com',
    'Subject: Eml version of "' + document.location.href + '"',
    'X-Mailer: quickeml',
    'MIME-Version: 1.0',
    'Content-Transfer-Encoding: 8bit',
    'Content-Type: text/html; charset="' + charset + '"'
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
