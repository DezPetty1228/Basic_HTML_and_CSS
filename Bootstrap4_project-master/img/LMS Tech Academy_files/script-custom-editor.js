$(document).ready(function () {
    // Initialize Editor https://github.com/summernote/summernote/issues/303
    $('.summernote').summernote(
        {
            height: 300,         // set editor height  
            minHeight: null,       // set minimum height of editor  
            maxHeight: null,       // set maximum height of editor  
            focus: true,         // set focus to editable area after initializing summernote  
            tooltip: false,      // disable tooltips
            fontNames: ['Sintony', 'sans-serif', 'taviraj'],
            styleTags: [
                'p', {
                    className: 'text-justify'
                }
            ],
            callbacks:
            {
                onPaste: function (e) {
                    var bufferText = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');

                    e.preventDefault();

                    document.execCommand('insertText', false, bufferText);
                }
            }
        });
});  