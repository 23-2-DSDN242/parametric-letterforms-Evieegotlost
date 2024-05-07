[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2

![Preview](preview.jpg)

## Font Name: InkPoint
## Name: Evelyn Lee

_____________________________________________________________________________________________________
#### Design Intention:

The initial inspiration for this font was based on Chinese calligraphy for its simple yet messy and bold ink strokes that make up each character. I wanted to 


![image3](Alphabet.jpg)


_____________________________________________________________________________________________________
#### Progress:  

Mid-way through the project, I realized it would be difficult to replicate the style accurately due to the given parameter limit. Since I was using bezier vertex shapes to create the ink strokes, I would have to use a larger amount of parameters if I wanted to replicate the varying bends. Because of this, I would have to cut down the amount of shapes I'm using as well as any extra vertices. This leaves 3 main shapes each with 8 parameters.
![image1](img1.jpg)

![image2](img2.jpg)

![image3](sketch.jpg)

![image4](Alphabet.jpg)
_____________________________________________________________________________________________________
#### The 24 parameters per letter:

Parameters for first bezier vertex shape
  * `offsetx` : x position of first vertex point
  * `offsety` : y position of first vertex point
  * `tailoffsetx`: x position of second vertex point
  * `tailoffsety`: y position of second vertex point
  * `bulkoffsetx`: x position of upper mid vertex point
  * `bulkoffsety`: y position of upper mid vertex point
  * `midoffsetx`: x position of lower mid vertex point
  * `midoffsety`: y position of lower mid vertex point

Parameters for second bezier vertex shape
  * `2offsetx`: x position of first vertex point
  * `2offsety`: y position of first vertex point
  * `2tailoffsetx`: x position of second vertex point
  * `2tailoffsety`: y position of second vertex point
  * `2bulkoffsetx`: x position of upper mid vertex point
  * `2bulkoffsety`: y position of upper mid vertex point
  * `2midoffsetx`: x position of lower mid vertex point
  * `2midoffsety`: y position of lower mid vertex point

Parameters for third/shadow bezier vertex shape
  * `soffsetx`: x position of upper mid vertex point
  * `soffsety`: y position of upper mid vertex point
  * `stailoffsetx`: x position of first vertex point
  * `stailoffsety`: y position of first vertex point
  * `sbulkoffsetx`: x position of second vertex point
  * `sbulkoffsety`: y position of second vertex point
  * `smidoffsetx`: x position of lower mid vertex point
  * `smidoffsety`: y position of lower mid vertex point