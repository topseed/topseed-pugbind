# topseed-pugcli
This project demonstrates client-side databinding with Pug.

Install with:

npm install pug-cli -g

We use a commandline to convert a pug fragment into a javascript template
that can be used client-side.

See the pug fragment at /public/page/two/pinc.pug

Compile it with:

pug -c public/page/two/pinc.pug --name-after-file  -D

This generates pinc.js, which will contain:

function pincTemplate(data)

This function can be used to generate HTML fromJavaScript, e.g.:

var html = pincTemplate(data)
$('.ui.text.container').html(html)  //jQuery

See usage at public/page/two/index.pug
