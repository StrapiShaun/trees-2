'use strict';

/**
 *  leaf controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::leaf.leaf');
