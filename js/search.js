$(".search-input").bind("paste keyup", function () {
    console.log("search text: " + $(this).val());
    $('.typeahead').typeahead({
        source:['hi', 'no']
    });
});

$(".search-input").bind("keypress", function (event) {
    if (event.which == '13') {
        console.log('submit with query: ' + $(this).val());
        performSearch($(this).val());
        return false;
    }
});

function performSearch(query) {
    // Example of search function
    var storedData = JSON.parse(window.localStorage.getItem("data"))
    filteredEvents = storedData.events.filter(function(event) {
        return queryMatchEvent(query, event);
    });

    renderSearch(filteredEvents);
}

function queryMatchEvent(query, event) {
    var matchTags = false,
        query = query.toLowerCase();

    if (!event) { return false; }

    matchTags = event.tags.some(function (tag) {
        return tag.toLowerCase().indexOf(query) > -1;
    });

    if (matchTags || event.name.toLowerCase().indexOf(query) > -1) {
        return true;
    }

    return false;
}
