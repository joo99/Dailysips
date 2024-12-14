var MIN_WIDTH = 800;
var viewport = document.createElement("meta");
viewport.setAttribute("name", "viewport");
if (screen.width < MIN_WIDTH) {
    viewport.setAttribute("content", "width=" + MIN_WIDTH);
} else {
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
}
document.head.appendChild(viewport);



var viewport = document.querySelector("meta[name=viewport]");
if (viewport) {
    var content = viewport.getAttribute("content");
    var parts = content.split(",");
    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i].trim();
        var pair = part.split("=");
        if (pair[0] === "min-width") {
            var minWidth = parseInt(pair[1]);
            if (screen.width < minWidth) {
                document.head.removeChild(viewport);

                var newViewport = document.createElement("meta");
                newViewport.setAttribute("name", "viewport");
                newViewport.setAttribute("content", "width=" + minWidth);
                document.head.appendChild(newViewport);
                break;
            }
        }
    }
}