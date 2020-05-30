# Generic Form Dynamic Grid
This is a study to build a Generic Dynamic Form using CSS Grid and a bit of Flexbox.
The main objective is to build a reusable component to build Forms with different
configurations and fields.

The current layout is based on an application i've been working on lately, but it can
be changed since the main component lies within the Grid Container and its generic elements

These components were built with my initial studies of front-end, so any suggestions to 
upgrade them are more than welcome.

## dgrid-element and element position class

The trick to make this Form work is to use the Generic Grid Element CSS Class (dgrid-element)
and the Ghost Grid Placement CSS Classes, using the template found in the createElementPositionObject 
function. It consists of a prefix followed by a row or column identifier and a optional span identifier.
When the document is loaded, the JS component applies grid-column and grid-row to the grid-elements
dynamically by parsing their classes names.

Although it places CSS inline in the document, this approach allows a developer to focus only in which
form elements will appear and the general layout of the form, without the need to fiddle with CSS.
It also allows to the elements to be placed in any order in the HTML, but I discourage this since
it can become harder to read through it.

## Future Upgrades

  * Currently I'm working on a way to create the Form with a Dynamic Number of Columns. Haven't tested 
  it properly yet
  * Review and refine CSS Classes. I Intend to leave the Dynamic Grid Component very clean so it can be
  used with any layout a developer desires
