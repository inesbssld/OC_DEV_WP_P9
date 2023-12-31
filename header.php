<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="https://gmpg.org/xfn/11">

    <!-- <script src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"></script>-->
    <!-- <script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>-->
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
    <?php wp_body_open(); ?>
    <div id="page" class="site">
        <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

        <header id="masthead" class="site-header">

            <nav id="site-navigation" class="main-navigation">
                <div class="menu__close">

                    <li class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                            rel="home"><?php bloginfo( 'name' ); ?></a></li>


                    <button class="menu-toggle " aria-controls="primary-menu" aria-expanded="false">
                        <span class="line"></span>
                        <span class="line"></span>
                        <span class="line"></span>
                    </button>

                </div>
                <div class="menu__open" id="primary-menu">
                    <nav class="menu__open--content">
                        <img class="menu__open--content--logo"
                            src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> "
                            alt="logo Fleurs d'oranger & chats errants">

                        <ul>
                            <li class="story"><a href="#story">Histoire</a></li>
                            <li class="characters"><a href="#characters">Personnages</a></li>
                            <li class="place"><a href="#place">Lieu</a></li>
                            <li class="studio"><a href="#studio">Studio Koukaki</a></li>
                        </ul>
                        <div class="menu__open--content--footer"><a href="">STUDIO KOUKAKI</a>
                        </div>
                    </nav>
                </div>

            </nav><!-- #site-navigation -->
        </header><!-- #masthead -->