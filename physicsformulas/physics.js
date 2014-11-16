$(document).ready( function() {

    MathJax.Hub.Queue(
        [test]
    );

    var $container = $('#container');
    $container.masonry({
        columnWidth: 1,
        itemSelector: '.posthalf'
    });
    var masonry = $container.data('masonry');

    function test() {
        masonry.layout();
    }

    jQuery.fn.toggle = function( fn, fn2 ) {
        // Don't mess with animation or css toggles
        if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {
            return oldToggle.apply( this, arguments );
        }
        // migrateWarn("jQuery.fn.toggle(handler, handler...) is deprecated");
        // Save reference to arguments for access in closure
        var args = arguments,
        guid = fn.guid || jQuery.guid++,
        i = 0,
        toggler = function( event ) {
            // Figure out which function to execute
            var lastToggle = ( jQuery._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
            jQuery._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
            // Make sure that clicks stop
            event.preventDefault();
            // and execute the function
            return args[ lastToggle ].apply( this, arguments ) || false;
        };
        // link all the functions, so any of them can unbind this click handler
        toggler.guid = guid;
        while ( i < args.length ) {
          args[ i++ ].guid = guid;
        }
        return this.click( toggler );
    };

    var $midterm1 = $('.posthalf.midterm1');
    $('#mid1').toggle(
        function() {
            $('#mid1').css("background-color", "transparent");
            $midterm1.hide();
            masonry.layout();
        },

        function() {
            $('#mid1').css("background-color", "#BDDFEB");
            $midterm1.show();
            masonry.layout();
        }
    );

    var $midterm2 = $('.posthalf.midterm2');
    $('#mid2').toggle(
        function() {
            $('#mid2').css("background-color", "transparent");
            $midterm2.hide();
            masonry.layout();
        },

        function() {
            $('#mid2').css("background-color", "#FFCF9C");
            $midterm2.show();
            masonry.layout();
        }
    );

    var $midterm3 = $('.posthalf.midterm3');
    $('#mid3').toggle(
        function() {
            $('#mid3').css("background-color", "transparent");
            $midterm3.hide();
            masonry.layout();
        },

        function() {
            $('#mid3').css("background-color", "#93DB70");
            $midterm3.show();
            masonry.layout();
        }
    );
});