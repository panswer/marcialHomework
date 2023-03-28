"use strict";

/**
 * @typedef {import('aws-lambda').APIGatewayProxyEvent} APIGatewayProxyEvent
 *
 * @typedef {import('aws-lambda').APIGatewayProxyResult} APIGatewayProxyResult
 */

/**
 * @param {APIGatewayProxyEvent} event
 *
 * @returns {Promise<APIGatewayProxyResult>}
 */
const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World"
    }),
  };
};

module.exports.hello = handler;
