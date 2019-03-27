window.addEventListener("load", function () {
    var editor = textArea.document;
    editor.designMode = "on";

    boldButton.addEventListener("click", function () {
        editor.execCommand("Bold", false, null);
    }, false);

    italicButton.addEventListener("click", function () {
        editor.execCommand("Italic", false, null);
    }, false);

    orderedListButton.addEventListener("click", function () {
        editor.execCommand("InsertOrderedList", false, "newOL" + Math.round(Math.random() *1000));
    }, false);

    unorderedListButton.addEventListener("click", function () {
        editor.execCommand("InsertUnorderedList", false, "newOL" + Math.round(Math.random() *1000));
    }, false);

    fontColorButton.addEventListener("click", function (event) {
        editor.execCommand("ForeColor", false, event.target.value);
    }, false);

    highlightButton.addEventListener("click", function (event) {
        editor.execCommand("BackColor", false, event.target.value);
    }, false);

    fontChanger.addEventListener("click", function (event) {
        console.log(event.target.value)
        editor.execCommand("FontName", false, event.target.value);
    }, false);

    fontSizeChanger.addEventListener("click", function (event) {
        editor.execCommand("FontSize", false, event.target.value);
    }, false);

    undoButton.addEventListener("click", function () {
        editor.execCommand("Undo", false, null);
    }, false);

    redoButton.addEventListener("click", function () {
        editor.execCommand("Redo", false, null);
    }, false);

}, false);