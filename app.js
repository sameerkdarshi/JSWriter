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

    

}, false);