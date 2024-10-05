<?php

/**
 * Theme functions and definitions.
 *
 * For additional information on potential customization options,
 * read the developers' documentation:
 *
 * https://developers.elementor.com/docs/hello-elementor-theme/
 *
 * @package HelloElementorChild
 */

if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

define('HELLO_ELEMENTOR_CHILD_VERSION', '2.0.0');

/**
 * Load child theme scripts & styles.
 *
 * @return void
 */
function enqueue_tailwind_cdn()
{
	// Encola el CDN de Tailwind
	wp_enqueue_script('tailwind-cdn', 'https://cdn.tailwindcss.com', [], null, false);

	// Script de configuración para extender el tema de Tailwind
	wp_add_inline_script('tailwind-cdn', '
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                clifford: "#da373d",
              }
            }
          }
        }
    ');
}
add_action('wp_enqueue_scripts', 'enqueue_tailwind_cdn');
