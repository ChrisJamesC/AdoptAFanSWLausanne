var typeAheadSource = buildTypeAhead();

$(".search-input").bind("paste keyup", function () {
    performSearch($(this).val());

    $('.typeahead').typeahead({
        source: typeAheadSource,
        afterSelect: function (val) {
            console.log('selected typeahead: ' + val);
            performSearch(val);
        }
    });
});

function buildTypeAhead() {
    var storedData = JSON.parse(window.localStorage.getItem("data"))
        typeAheadSource = [];

    $.each(storedData.events, function (index, event) {
        if ($.inArray(event.name, typeAheadSource) === -1) { typeAheadSource.push(event.name); }

        $.each(event.tags, function (index, tag) {
            if ($.inArray(tag, typeAheadSource) === -1) { typeAheadSource.push(tag); }
        });
    });

    return typeAheadSource;
}

function performSearch(query) {
    console.log('performed search query: ' + query);

    var storedData = JSON.parse(window.localStorage.getItem("data"));
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
