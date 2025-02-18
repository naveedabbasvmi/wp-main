<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'inspring' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hQ])lV8jNlpa=O)p9yVPa!5*kJ($O,KoZ?NtbWjv/049@c.xWTY&WY,79I=;USC ' );
define( 'SECURE_AUTH_KEY',  'jsCi{/8pT0-S7V&OHsArO5@O3XXetS~>02~=!(2jRkN)_<9-v9R4>[`A/sAApv}k' );
define( 'LOGGED_IN_KEY',    '/5<AEz2?)7GGRe}Z ~1w,AXZ?/6*.0hUgBL4Dpn~ @$E_unJ41EA!^NoYEh8YAwZ' );
define( 'NONCE_KEY',        '.]N|6>So]8-n}detNX0#)NfpunOS9uB{><,WbLk-KM#P4C8wy)SwK&}EHUP0Wco1' );
define( 'AUTH_SALT',        'D: uc.uYE~i*K%ILu.)k!`gCk{i0YTC;/@6u>PMld9Q?R#/@dMEO_{(4#[|m#;1t' );
define( 'SECURE_AUTH_SALT', 'r,fKT<tLem!Q|_{|*a2uOI[=-z?)JM8Q2stM,B#~Ep1<S-qE4.=_QWE7^s}]3x?N' );
define( 'LOGGED_IN_SALT',   'R`buq.QK8u:^ oFl.|O<3<jsaBr$fkyPDVmKuDqT^RYOhd>-e,`s7j0ir6.J.?:?' );
define( 'NONCE_SALT',       'SFxma8YcDnHct+FuXPoPR*xVc=1i0`lY@xj6Cm[L[Ud4JPnoxE|gVWhy%^?n{AI.' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
