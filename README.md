[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.


The 24 parameters per letter:

Parameters for first bezier vertex shape
  * `offsetx` : x position of first vertex point
  * `offsety` : y position of first vertex point
  * `tailoffsetx`: x position of second vertex point
  * `tailoffsety`: y position of second vertex point
  * `bulkoffsetx`: -6,
  * `bulkoffsety`: 2,
  * `midoffsetx`: -4,
  * `midoffsety`: 6,

Parameters for second bezier vertex shape
  * `2offsetx`: x position of first vertex point
  * `2offsety`: y position of first vertex point
  * `2tailoffsetx`: x position of second vertex point
  * `2tailoffsety`: y position of second vertex point
  * `2bulkoffsetx`: 2,
  * `2bulkoffsety`: -4,
  * `2midoffsetx`: 14,
  * `2midoffsety`: 2,

Parameters for third/shadow bezier vertex shape
  * `soffsetx`: -20,
  * `soffsety`: 2,
  * `stailoffsetx`: x position of first vertex point
  * `stailoffsety`: y position of first vertex point
  * `sbulkoffsetx`: x position of second vertex point
  * `sbulkoffsety`: y position of second vertex point
  * `smidoffsetx`: 18,
  * `smidoffsety`: 10,