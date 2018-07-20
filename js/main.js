$(function () {
    $("#draggable").draggable({
        snap: true
    });
    $("#draggable2").draggable({
        snap: ".ui-widget-header"
    });
    $("#draggable3").draggable({
        snap: ".ui-widget-header",
        snapMode: "outer"
    });
    $("#draggable4").draggable({
        grid: [20, 20]
    });


    $("#sortableb").sortable({
        revert: true
    });
    $("#draggableb").draggable({
        connectToSortable: "#sortableb",
        helper: "clone",
        revert: "invalid"
    });
    $("ul, li").disableSelection();






    $("#draggablec").draggable();
    $("#droppable").droppable({
        classes: {
            "ui-droppable-hover": "ui-state-hover"
        },
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });






    $("#draggable2c").draggable();
    $("#droppable2").droppable({
        accept: "#draggable2c",
        classes: {
            "ui-droppable-active": "ui-state-default"
        },
        drop: function (event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });








    $("#sortable1, #sortable2").sortable({
        connectWith: ".connectedSortable"
    }).disableSelection();








    $("#accordion").accordion({
        collapsible: true
    });






    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];

    function split(val) {
        return val.split(/,\s*/);
    }

    function extractLast(term) {
        return split(term).pop();
    }

    $("#tags")
        // don't navigate away from the field on tab when selecting an item
        .on("keydown", function (event) {
            if (event.keyCode === $.ui.keyCode.TAB &&
                $(this).autocomplete("instance").menu.active) {
                event.preventDefault();
            }
        })
        .autocomplete({
            minLength: 0,
            source: function (request, response) {
                // delegate back to autocomplete, but extract the last term
                response($.ui.autocomplete.filter(
                    availableTags, extractLast(request.term)));
            },
            focus: function () {
                // prevent value inserted on focus
                return false;
            },
            select: function (event, ui) {
                var terms = split(this.value);
                // remove the current input
                terms.pop();
                // add the selected item
                terms.push(ui.item.value);
                // add placeholder to get the comma-and-space at the end
                terms.push("");
                this.value = terms.join(", ");
                return false;
            }
        });





    $("input").checkboxradio({
        icon: false
    });





    $("input").checkboxradio({
        icon: false
    });
});



$(function () {
    function handleShape(e) {
        $(".shape")
            .removeClass("circle pill square rectangle")
            .addClass($(e.target).val());
    };

    function handleToggle(e) {
        var target = $(e.target);

        if (target.is(".brand-toggle")) {
            var checked = target.is(":checked"),
                value = $("[name='brand']")
                .filter(":checked")
                .attr("data-" + target[0].id)
            $(".shape").css(target[0].id, checked ? value : "");
        } else {
            $(".shape").toggleClass(target[0].id, target.is(":checked"));
        }
    }

    function updateBrand() {
        handleShape({
            target: $("[name='shape']:checked")
        });
        $(".toggle:checked").each(function () {
            handleToggle({
                target: $(this)
            });
        });
    }

    // Initalize widgets
    $("input").checkboxradio();
    $(".shape-bar, .brand").controlgroup();
    $(".toggles").controlgroup({
        direction: "vertical"
    });

    // Bind event handlers
    $("[name='shape']").on("change", handleShape);
    $(".toggle").on("change", handleToggle);
    $("[name='brand']").on("change", updateBrand);

    // Set initial values
    updateBrand();
    
    
    
  


});
