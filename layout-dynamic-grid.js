/* Functions that return some constant values used
in the dynamic placing of grid elements */
function createElementPositionObject(){
    return {
        prefix: "dgrid-",
        rowIdentifier: "row-",
        columnIdentifier: "column-",
        spanIdentifier: "-span-"
    };
}

/* Dynamically sets the positions of the Grid Elements based on a class
name given by the constants in the createElementPositionObject function*/
window.onload = function(){
    loadDGridElementsPosition();
}

function loadDGridElementsPosition(){
    const dynamicGridElements = document.querySelectorAll(".dgrid-element");
    for(let element of dynamicGridElements){
        setGridElementPosition(element);
    }
}

function setGridElementPosition(element){
    const positionObject = createElementPositionObject();
    for(elementClass of element.classList){
        if(elementClass.includes(positionObject.prefix) 
            && elementClass.includes(positionObject.rowIdentifier)){
            setGridElementRow(element, elementClass);
        }else if(elementClass.includes(positionObject.prefix) 
            && elementClass.includes(positionObject.columnIdentifier)){
            setGridElementColumn(element, elementClass);
        }
    }
}

/* functions to set the Element Row */
function setGridElementRow(element, elementClass){
    const positionObject = createElementPositionObject();
    if(elementClass.includes(positionObject.spanIdentifier)){
        setRowWithSpan(element, elementClass);
    }else{
        setRowPosition(element, elementClass);
    }
}

function setRowWithSpan(element, elementClass){
    const positionObject = createElementPositionObject();
    const rowPosition = elementClass.substring(
        elementClass.indexOf(positionObject.rowIdentifier) + positionObject.rowIdentifier.length, 
        elementClass.indexOf(positionObject.spanIdentifier));
    const spanAttribute = createSpanAttribute(elementClass, positionObject);
    const spanValue = spanAttribute.substring(spanAttribute.lastIndexOf(" ") + 1);

    element.appendChild(createStyle(
        "." + positionObject.prefix
        + positionObject.rowIdentifier + rowPosition
        + positionObject.spanIdentifier + spanValue
        + "{ grid-row: " + rowPosition + spanAttribute + "}"
        ))
}

function setRowPosition(element, elementClass){
    const positionObject = createElementPositionObject();
    const rowPosition = elementClass.substring(
        elementClass.indexOf(positionObject.rowIdentifier) + positionObject.rowIdentifier.length);

    element.appendChild(createStyle(
        "." + positionObject.prefix
        + positionObject.rowIdentifier + rowPosition
        + "{ grid-row: " + rowPosition + "}"
    ))
}

/* functions to set the Element Column */
function setGridElementColumn(element, elementClass){
    if(elementClass.includes(positionObject.spanIdentifier)){
        setColumnWithSpan(element, elementClass);
    }else{
        setColumnPosition(element, elementClass);
    }
}

function setColumnWithSpan(element, elementClass){
    const positionObject = createElementPositionObject();
    const columnPosition = elementClass.substring(
        elementClass.indexOf(positionObject.columnIdentifier) + positionObject.columnIdentifier.length, 
        elementClass.indexOf(positionObject.spanIdentifier));
    const spanAttribute = createSpanAttribute(elementClass, positionObject);
    const spanValue = spanAttribute.substring(spanAttribute.lastIndexOf(" ") + 1);

    element.appendChild(createStyle(
        "." + positionObject.prefix
        + positionObject.columnIdentifier + columnPosition
        + positionObject.spanIdentifier + spanValue
        + "{ grid-column: " + columnPosition + spanAttribute + "}"
        ))
}

function setColumnPosition(element, elementClass){
    const positionObject = createElementPositionObject();
    const columnPosition = elementClass.substring(
        elementClass.indexOf(positionObject.columnIdentifier) + positionObject.columnIdentifier.length);

    element.appendChild(createStyle(
        "." + positionObject.prefix
        + positionObject.columnIdentifier + columnPosition
        + "{ grid-column: " + columnPosition + "}"
    ))
}

function createSpanAttribute(elementClass, positionObject){
    if(elementClass.includes(positionObject.spanIdentifier)){
        return " / span " + elementClass.substring(
            elementClass.indexOf
            (positionObject.spanIdentifier) + positionObject.spanIdentifier.length)
    }else{
        return " / span 1";
    }
}

function createStyle(styleCode){
    const newStyle = document.createElement("style");
    newStyle.type = "text/css";
    newStyle.innerHTML = styleCode;
    return newStyle;
}