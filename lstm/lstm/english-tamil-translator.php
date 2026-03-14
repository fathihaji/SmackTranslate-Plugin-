<?php
/*
Plugin Name: English to Tamil Translator (LSTM)
Description: Admin panel translator using LSTM in browser via TensorFlow.js
Version: 1.0
Author: Your Name
*/

add_action('admin_menu', 'et_add_menu_page');
add_action('admin_enqueue_scripts', 'et_enqueue_admin_assets');
register_activation_hook(__FILE__, 'et_create_translation_table');

function et_create_translation_table() {
    global $wpdb;
    $table = $wpdb->prefix . 'et_translation_history';

    $charset_collate = $wpdb->get_charset_collate();

    $sql = "CREATE TABLE $table (
        id INT NOT NULL AUTO_INCREMENT,
        english TEXT NOT NULL,
        tamil TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
    ) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
    dbDelta($sql);
}


function et_add_menu_page() {
    add_menu_page(
        'English to Tamil Translator',  // Page title
        'Translator',                   // Menu label
        'manage_options',               // Capability
        'et-translator',                // Menu slug
        'et_render_admin_page',        // Callback to render page
        'dashicons-translation',       // Icon
        6                               // Position
    );
}

function et_render_admin_page() {
    include plugin_dir_path(__FILE__) . 'admin-page.php';
}

function et_enqueue_admin_assets($hook) {
    if ($hook !== 'toplevel_page_et-translator') return;

    wp_enqueue_script('tfjs', 'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.12.0', [], null, true);
wp_enqueue_script('use', 'https://cdn.jsdelivr.net/npm/@tensorflow-models/universal-sentence-encoder@1.3.3', ['tfjs'], null, true);

    wp_enqueue_script('et-translator-js', plugin_dir_url(__FILE__) . 'js/translator.js', ['tfjs'], null, true);
    wp_enqueue_style('et-style', plugin_dir_url(__FILE__) . 'css/style.css');
}
