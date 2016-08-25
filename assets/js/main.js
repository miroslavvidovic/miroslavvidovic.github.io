jQuery(document).ready(function($) {


    /*======= Skillset *=======*/

    $('.level-bar-inner').css('width', '0');

    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {

            var itemWidth = $(this).data('level');

            $(this).animate({
                width: itemWidth
            }, 800);

        });

    });

    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    /* jQuery RSS - https://github.com/sdepold/jquery-rss */

    $("#rss-feeds").rss(

        //Change this to your own rss feeds
        "https://www.goodreads.com/review/list_rss/46435258?key=5rOAcl3XTXMojTPLiL_12ZjLiY6WSVBoZxPxvaK_g1DCATJy&shelf=currently-reading",

        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 18,

        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFast',

        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",

        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<span><a href="{url}" target="_blank">{teaserImage}</a></span>'

        }
    );

    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "miroslavvidovic");

    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({
      username: "miroslavvidovic",
      selector: "#ghfeed"
    });

});
