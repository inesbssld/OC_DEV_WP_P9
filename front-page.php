<?php

get_header();
?>

<main id="primary" class="site-main">
    <section class="banner">

        <div class="background" data-0="transform:translateY(0px)" data-50="transform:translateY(-45px)"
            data-100="transform:translateY(-100px)" data-150="transform:translateY(-150px)">
            <video id="background-video" autoplay loop muted>
                <source src="/wp-content/themes/foce-child/assets/images/koukaki_video.mp4" type="video/mp4">
            </video>
        </div>
        <div class="banner__content">
            <img class=" banner__content--image"
                src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> "
                alt="logo Fleurs d'oranger & chats errants">
        </div>


    </section>
    <section id="story" class="story">
        <h2>L'histoire</h2>
        <article id="" class="story__article">
            <p><?php echo get_theme_mod('story'); ?></p>
        </article>
        <?php
            $args = array(
                'post_type' => 'characters',
                'posts_per_page' => -1,
                'meta_key'  => '_main_char_field',
                'orderby'   => 'meta_value_num',

            );
            $characters_query = new WP_Query($args);
            ?>
        <article id="characters">

            <?php get_template_part( 'template-parts/slider' ); ?>

        </article>
        <article id="place">
            <div>
                <h3>Le Lieu</h3>
                <div class="place__nuages">
                    <img class="place__nuages--image" src="/wp-content/themes/foce-child/assets/images/Nuages.png"
                        alt="image de deux nuages qui bougent à gauche avec ke scroll">
                </div>
                <!--

                <img class="place__grosNuage" src="/wp-content/themes/foce-child/assets/images/big_cloud.png"
                    alt="image d'un gros nuage">
                <img class="place__petitNuage" src="/wp-content/themes/foce-child/assets/images/little_cloud.png"
                    alt="image d'un petit nuage">

                -->
                <p><?php echo get_theme_mod('place'); ?></p>
            </div>

        </article>
    </section>


    <section id="studio">
        <h2>Studio Koukaki</h2>
        <div>
            <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue
                des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections
                en activité : le long métrage et le court métrage. Nous développons des films fantastiques,
                principalement autour de la culture de notre pays natal, le Japon.</p>
            <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et
                commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable
                dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise
                sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats
                errants”.</p>
        </div>
    </section>

    <!--section oscar-->

    <?php get_template_part( 'template-parts/oscar' ); ?>


</main><!-- #main -->

<?php
get_footer();