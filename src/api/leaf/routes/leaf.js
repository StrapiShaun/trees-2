'use strict';

/**
 * leaf router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::leaf.leaf');
