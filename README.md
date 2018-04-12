# topseed-pugbind
This project demonstrates client-side databinding with Pug.

Install with:

`npm install pug-cli -g`

We use a commandline to convert a pug fragment into a javascript template
that can be used client-side.

See the pug fragment at /public/page/two/pinc_p.pug.

Compile it with:

`pug -c public/page/two/pinc_p.pug --name-after-file  -D`

This generates pinc_p.js, which will contain:

`function pincPTemplate(data){return '...some html...'}`

This function can be used to generate HTML from JavaScript, e.g.:

`var html = pincPTemplate(data)`
<br>
`$('.ui.text.container').html(html)  //add to DOM, here using jQuery`

'data' is any object with properties, e.g. JSON objects.

See usage at public/page/two/index.pug.
