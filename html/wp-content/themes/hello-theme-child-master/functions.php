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

// Cargar los estilos del tema hijo después del tema padre en Hello Elementor
function enqueue_child_theme_styles()
{
  // Encolar el estilo del tema padre
  wp_enqueue_style('hello-elementor', get_template_directory_uri() . '/style.css');

  // Encolar el estilo del tema hijo después del tema padre
  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('hello-elementor'), wp_get_theme()->get('Version'));
}
add_action('wp_enqueue_scripts', 'enqueue_child_theme_styles');

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
//add_action('wp_enqueue_scripts', 'enqueue_tailwind_cdn');

// Permitir la subida de archivos SVG en WordPress
function allow_svg_upload($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'allow_svg_upload');

// Limpiar y asegurar el contenido SVG
function fix_svg($data, $file, $filename, $mimes)
{
  $ext = pathinfo($filename, PATHINFO_EXTENSION);
  if ($ext === 'svg') {
    $data['ext'] = 'svg';
    $data['type'] = 'image/svg+xml';
  }
  return $data;
}
add_filter('wp_check_filetype_and_ext', 'fix_svg', 10, 4);

// Evitar errores al subir SVG en WordPress 5.5 o superior
function wpfix_allow_svg_upload($filetype_ext_data, $file, $filename, $mimes)
{
  $ext = pathinfo($filename, PATHINFO_EXTENSION);
  if ($ext === 'svg') {
    $filetype_ext_data['ext'] = 'svg';
    $filetype_ext_data['type'] = 'image/svg+xml';
  }
  return $filetype_ext_data;
}
add_filter('wp_check_filetype_and_ext', 'wpfix_allow_svg_upload', 10, 4);
