# kvasir

HTML 5 presentations.

# PDF version

To get a PDF version, use the wkhtmltopdf available from:
http://code.google.com/p/wkhtmltopdf/

I use the following command-line:

wkhtmltopdf -s Letter -B 0mm -L 0mm -R 0mm -T 0mm --print-media-type -O landscape \
  http://example.com/path/to/slides slides.pdf
