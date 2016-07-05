/**
 * Created by KWChen on 7/5/16.
 */
document.getElementById("navbar").innerHTML =
    // '<ul>'+
    // '<li><a href="index.html">Home</a></li>'+
    // '<li><a href="services.html">Services</a></li>'+
    // '<li><a href="about.html">About</a></li>'+
    // '</ul>';

    '<ul>' +
        '<li><a href = index.html>Home</a></li>'+
            '<li><a href = about.html>About</a>' +
                '<ul>'+
                    '<li><a href = MissionAndVision.html>Our Mission and Vision</a></li>'+
                    '<li><a href = MeetOurTeam.html>Meet Our Team</a></li>'+
                    '<li><a href = #> something 3</a></li>'+
                '</ul>'+
            '</li>'+

        '<li><a href = activities.html>Activities</a></li>'+

        '<li><a href = contact.html>Contact us</a></li>'+

    '</ul>';
