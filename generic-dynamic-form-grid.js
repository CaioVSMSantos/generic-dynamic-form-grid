const DYNAMIC_GRID_CONSTANTS = {
    dynamicStyleID: "dynamicGridElements",
    rowIdentifier: "row-",
    columnIdentifier: "column-",
    spanIdentifier: "-span-"
}

function initializeDynamicGridConstants(){
    Object.freeze(DYNAMIC_GRID_CONSTANTS);
}

function initializeDynamicStyle(dynamicStyleID){
    const dynamicStyle = document.createElement("style");
    dynamicStyle.type = "text/css";
    dynamicStyle.id = dynamicStyleID;
    document.head.appendChild(dynamicStyle);
}

function getDynamicStyle(){
    for(let currentStyle of document.styleSheets){
        if(currentStyle.ownerNode.id === DYNAMIC_GRID_CONSTANTS.dynamicStyleID){
            return currentStyle
        }
    }
}

function setDynamicElementsPosition(){
    const dynamicElements = document.querySelectorAll("section.dynamic-grid-container > *");
    for(let dynamicElement of dynamicElements){
        setElementPosition(dynamicElement);
    }
}

function setElementPosition(dynamicElement){
    for(elementClass of dynamicElement.classList){
        if(isRowClass(elementClass)){
            setRow(elementClass);
        }else if(isColumnClass(elementClass)){
            setColumn(elementClass);
        }
    }
}

function setRow(elementClass){
    if(Boolean(isClassNonExistent(elementClass))){
        getDynamicStyle().insertRule(
            "section.dynamic-grid-container > ." + elementClass + 
            "{grid-row: " + getGridRowValue(elementClass), 0);
    }
}

function setColumn(elementClass){
    if(Boolean(isClassNonExistent(elementClass))){
        getDynamicStyle().insertRule(
            "section.dynamic-grid-container > ." + elementClass + 
            "{grid-column: " + getGridColumnValue(elementClass), 0);
    }
}

function getGridRowValue(elementClass){
    let rowPosition;
    let span = "";
    if(containsSpanClass(elementClass)){
        span = appendSpan(elementClass);
        rowPosition = elementClass.substring(
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.rowIdentifier) + DYNAMIC_GRID_CONSTANTS.rowIdentifier.length, 
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.spanIdentifier));
    }else{
        rowPosition = elementClass.substring(
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.rowIdentifier) + DYNAMIC_GRID_CONSTANTS.rowIdentifier.length);
    }
    return rowPosition + span;
}

function getGridColumnValue(elementClass){
    let columnPosition;
    let span = "";
    if(containsSpanClass(elementClass)){
        span = appendSpan(elementClass);
        columnPosition = elementClass.substring(
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.columnIdentifier) + DYNAMIC_GRID_CONSTANTS.columnIdentifier.length, 
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.spanIdentifier));
    }else{
        columnPosition = elementClass.substring(
            elementClass.indexOf(DYNAMIC_GRID_CONSTANTS.columnIdentifier) + DYNAMIC_GRID_CONSTANTS.columnIdentifier.length);
    }
    return columnPosition + span;
}

function appendSpan(elementClass){
    return " / span " + elementClass.substring(elementClass.indexOf(
        DYNAMIC_GRID_CONSTANTS.spanIdentifier) + DYNAMIC_GRID_CONSTANTS.spanIdentifier.length);
}

function isClassNonExistent(elementClass){
    for(let rule of getDynamicStyle().rules){
        if(rule.selectorText.startsWith("section.dynamic-grid-container > ." + elementClass)){
            return false;
        }
    }
    return true;
}

function isRowClass(elementClass){
    return elementClass.startsWith(DYNAMIC_GRID_CONSTANTS.rowIdentifier);
}

function isColumnClass(elementClass){
    return elementClass.startsWith(DYNAMIC_GRID_CONSTANTS.columnIdentifier);
}

function containsSpanClass(elementClass){
    return elementClass.includes(DYNAMIC_GRID_CONSTANTS.spanIdentifier);
}

window.onload = function(){
    this.initializeDynamicGridConstants();
    this.initializeDynamicStyle(DYNAMIC_GRID_CONSTANTS.dynamicStyleID);
    this.setDynamicElementsPosition();
}