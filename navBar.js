/**
 * Created by KWChen on 7/5/16.
 * This script manages the navigation bar of the site
 * currently not used
 */
document.getElementById("navbar").innerHTML =
    // '<ul>'+
    // '<li><a href="index.html">Home</a></li>'+
    // '<li><a href="services.html">Services</a></li>'+
    // '<li><a href="about.html">About</a></li>'+
    // '</ul>';

    '<ul>' +
        '<li><a href = index.html>Home</a></li>'+
        '<li><a href = about.html>About</a>'
        +
            '<ul>'
            +
                '<li><a href = missionAndVision.html>Our Mission and Vision</a></li>'
                +
                '<li><a href = team.html>Meet Our Team</a></li>'
                +
                // '<li><a href = #> something 3</a></li>'
                // +
            '</ul>'
            +
        '</li>'
        +

        '<li><a href = activities.html>Activities</a>'

        +
            '<ul>'
            +
                '<li><a href= pastActivities.html> Past Activities</a></li>'
            +

            '</ul>'
        +

        '</li>'+

        '<li><a href = contact.html>Contact us</a></li>'+

    '</ul>';
