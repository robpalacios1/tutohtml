document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function() {
        if (thumbnailElement.className == "big") {
            thumbnailElement.className = "small";
        }else{
            thumbnailElement.className = "big";
        }
    });
});
