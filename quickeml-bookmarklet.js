javascript:(function(){var d,a=document.documentElement.innerHTML,b=document.createElement("DIV"),c=document.charset||document.characterSet||"UTF-8";a="<html>"+a+"</html>","textContent"in b?b.textContent=a:b.innerText=a;var e=["Date: "+(new Date).toGMTString(),"To: teddy@bear.com","From: me@domain.com",'Subject: Eml version of "'+document.location.href+'"',"X-Mailer: quickeml","MIME-Version: 1.0","Content-Transfer-Encoding: 8bit",'Content-Type: text/html; charset="'+c+'"'];e.push(""),e.push(""),d=b.innerHTML,e.push(d);var f=window.open();f.document.write(e.join("<br>")),f.document.close()})();