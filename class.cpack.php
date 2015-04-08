<?php
class Cpack {

	/**
	 * Holds the singleton instance of this class
	 * @since 0.0.1
	 * @var Cpack
	 */
	static $instance = false;

	/**
	 * Return the Cpack object
	 *
	 * @return  object
	 */

	public static function init() {
		if ( ! self::$instance ) {
			if ( did_action( 'plugins_loaded' ) ){
				self::plugin_textdomain();
			} else {
				add_action( 'plugins_loaded', array( __CLASS__, 'plugin_textdomain' ), 99 );
			}

			self::$instance = new Cpack;
		}

		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct(){

	}

	/**
	 * Load language files
	 */
	public static function plugin_textdomain() {
		load_plugin_textdomain( 'cpack', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
	}

	/**
	 * Attached to activate_{ plugin_basename( __FILES__ ) } by register_activation_hook()
	 * @static
	 */
	public static function plugin_activation( $network_wide ) {

	}

	/**
	 * Removes all connection options
	 * @static
	 */
	public static function plugin_deactivation( ) {
		require_once( ABSPATH . '/wp-admin/includes/plugin.php' );
		
	}
}