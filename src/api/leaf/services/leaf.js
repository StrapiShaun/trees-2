'use strict';

/**
 * leaf service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leaf.leaf');
