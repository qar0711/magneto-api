"use strict";
const ApiGateway = require("moleculer-web");
const { ForbiddenError } = ApiGateway.Errors;
/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "greeter",

	/**
	 * Settings
	 */
	settings: {

	},

	/**
	 * Dependencies
	 */
	dependencies: [],

	/**
	 * Actions
	 */
	actions: {

		/**
		 * Say a 'Hello' action.
		 *
		 * @returns
		 */

		
		hello: {
			rest: {
				method: "GET",
				path: "/hello"
			},
			async handler(ctx) {

				ctx.emit("posts.create");
				var idNone = this.broker.nodeID
				ctx.emit("hello.called", "qar");
				return `idNone@${idNone}`;
			}
		},

		mutant: {
			rest: {
				method: "POST",
				path: "/mutant",
				params: {
					dna: "string[]"
				}
			},
			async handler(ctx) {
				global.valuesDiagonals = [[-1,-1],[-1,1],[1,-1],[1,1]];
				global.valuesQuadrants = [[-1,0],[1,0],[0,-1],[0,1]];
				global.searchedBefore = [];
				var flagTitan = await ctx.call("helper.valid", ctx.params.dna);

				if (!flagTitan)
				throw new ForbiddenError();

			}
		},

		/**
		 * Welcome, a username
		 *
		 * @param {String} name - User name
		 */
		welcome: {
			rest: "/welcome",
			params: {
				name: "string"
			},
			/** @param {Context} ctx  */
			async handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	/**
	 * Events
	 */
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	async started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	async stopped() {

	}
};
