<h1>Generic Dynamic Form Grid</h1>

<h3 align="center">
    <a href="README.md">English-US</a>
    <span>|</span>
    <a href="README-ptBR.md">Português-BR</a>
</h3>

[![CC BY-SA 4.0][cc-by-sa-shield]][cc-by-sa]


<h2>A Simple CSS/JS Component to build Dynamic Grids</h2>

This component was built during my studies of FrontEnd Web Development.
It's main objective is to be used as an easy and quick container in which dynamic grid cells can be placed simply by adding the correct classes to HTML elements.

The motivation to build this component, beyond the experimentation involved in FrontEnd studies, was to standardize a type of form in my current work environment characterized by its different input fields and its general common structure.

Beyond the main component, there is also the stylesheets "evo-standard-form" and "evo-standard-tablegrid" which roughly mimics my work environment, used to test and demonstrate how it works.

Hopefully this will be a evolving component, maintaining the main objective. Any constructive suggestions, critiques, tips and lessons will be most welcome and appreciated.

<h2>How to Use</h2>

<strong>1 - Download the Latest Release of the Component</strong>
<p>There is only two files in the Latest Release, a CSS and a JS. Both must be included in the page to be used. A strong recomendation is to include the JS file in the bottom of the page.</p>
<p>Example:</p>

```
<link rel="stylesheet" href="css/evo-dynamic-grid.min.css">
.
.
<script src="js/evo-dynamic-grid.min.js"></script>
```

<strong>2 - Create a Container for the Dynamic Grid</strong>
<p>Apply the CSS Class <em>"evo-dynamic-grid"</em> to the element to be transformed into a container.</p>
<p>Example:</p>

```
<section class="evo-dynamic-grid">
```

<strong>3 - Add Tag Elements inside the Container with Positioning Classes</strong>
<p>Now it is possible to add other Tag Elements in the container using the <em>row-N</em> and <em>column-N</em> Classes. As the name implies they are used to specify the Row and Column of the CSS Grid Dynamically. The Latest Row of the Grid will be the higher Row Number specified by an Element. The same thing applies to Column.
</p>
<p>Example:</p>

```
<!-- Specifies an Input Tag in the First Row and Second Column of the Grid -->
<input class="row-1 column-2" type="text" name="text" id="text">

<!-- Specifies a Label Tag in the Third Row and Fourth Column of the Grid -->
<label class="row-3 column-4" for="myElement">Label</label>
```

<p>It is also possible to append <em>-span-N</em> to the Row and Column Classes in order to make an element occupy a larger region.</p>
<p>Example:</p>

```
<!-- Specifies an Input Tag beginning in the Second Row Spanning up to the Fourth Row (Span 3) and First Column of the Grid -->
<input class="row-2-span-3 column-1" type="text" name="text2" id="text2">

<!-- Specifies a Label Tag in the First Row and beginning in the First Column Spanning up to the Second Column (Span 2) of the Grid -->
<label class="row-1 column-1-span-2" for="myElement2">Label</label>
```

<strong>4 - Add Support Classes to Adjust Positioning</strong>
<p>A few Support Classes are also available to be used in order to Justify/Align Elements inside the Grid Cells. These are as follows:</P>
<ul>
    <li>justify-start
    <li>justify-end
    <li>justify-center
    <li>align-start
    <li>align-end
    <li>align-center
</ul>
<p>Justify and Align can be used at the same time and adjust the Tag Element as theyr name implies</p>
<p>Example:</p>

```
<!-- Specifies an Input Tag in the First Row and First Column of the Grid Justified on the Start of the Cell (Usually left side)-->
<input class="row-1 column-1 justify-start" type="text" name="text2" id="text2">

<!-- Specifies a Label Tag in the Second Row and First Column of the Grid Aligned in the end of the cell (Usually the bottom)-->
<label class="row-2 column-1 align-end" for="myElement2">Label</label>
```

<h2>Licence</h2>

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License][cc-by-sa].

[![CC BY-SA 4.0][cc-by-sa-image]][cc-by-sa]

[cc-by-sa]: http://creativecommons.org/licenses/by-sa/4.0/
[cc-by-sa-image]: https://licensebuttons.net/l/by-sa/4.0/88x31.png
[cc-by-sa-shield]: https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg
