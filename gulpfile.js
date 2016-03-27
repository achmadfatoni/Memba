var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.styles([
        'font-awesome.min.css',
        'fonts.css',
        'bootstrap.min.css',
        'app.css',
    ])
        .styles(['jquery.dataTables.min.css'], 'public/css/dataTables.css')
        .scripts([
        'jquery.min.js',
        'bootstrap.min.js'
    ])
        .scripts(['jquery.dataTables.min.js'], 'public/js/dataTables.js');
});
