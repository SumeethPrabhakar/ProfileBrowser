var profileData = null;

$(document).ready(function () {
    profileData = data.sort(function (a, b) {
        var a1 = a.firstName, b1 = b.firstName;
        if (a1 == b1) return 0;
        return a1 > b1 ? 1 : -1;
    });
    for (i = 0; i < profileData.length; i++) {
        $("#profileList").append($("<li>", {}).append($("<a>", { href: "#" + i }).text(profileData[i].firstName + " " +
        profileData[i].lastName)));
    }

    updateProfile(0);

    $("#profileList li a").on('click', function (e) {
        e.preventDefault();
        var href = e.target.href;
        var id = href.substring(href.lastIndexOf("#") + 1);
        updateProfile(id);
    });
});

function updateProfile(id) {
    $("#imageHolder").attr('src', profileData[id].picture);
    $("#descrption").html(profileData[id].bio);
    $("#profileName").html(profileData[id].firstName + " " + profileData[id].lastName);
}






