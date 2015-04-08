<?php
/**
 * Plugin Name: Calibrefx Pack
 * Plugin URI: https://github.com/calibreworks/cpack
 * Description: A rocket booster for WordPress and Calibrefx Themes Framework
 * Version: 0.0.1
 * Author: Calibreworks
 * Author URI: https://www.calibreworks.com
 * Requires at least: 4.0
 * Tested up to: 4.1
 *
 * Text Domain: cpack
 * Domain Path: /languages/
 *
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

define( 'CPACK__MINIMUM_WP_VERSION', '4.0' );
define( 'CPACK__VERSION',            '0.0.1' );
define( 'CPACK__PLUGIN_DIR',         plugin_dir_path( __FILE__ ) );
define( 'CPACK__PLUGIN_FILE',        __FILE__ );

require_once( CPACK__PLUGIN_DIR . 'class.cpack.php' );

register_activation_hook( __FILE__, array( 'Cpack', 'plugin_activation' ) );
register_deactivation_hook( __FILE__, array( 'Cpack', 'plugin_deactivation' ) );

add_action( 'init', array( 'Cpack', 'init' ) );