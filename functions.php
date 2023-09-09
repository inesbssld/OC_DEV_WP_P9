<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

 // Enqueue Skrollr.js

    wp_enqueue_script( 'skrollr', get_stylesheet_directory_uri() . '/js/skrollr.js', array(), '1.0.0', true );

// Enqueue swiper js

 wp_enqueue_script( 'swiper', get_stylesheet_directory_uri() . '/js/swiper.min.js', array('jquery'), null, true );


 // Enqueue animation script
    wp_enqueue_script( 'animation', get_stylesheet_directory_uri() . '/js/animation.js', array('jquery'), null, true );
}



// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}