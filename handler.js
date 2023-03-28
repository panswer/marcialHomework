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
  let name = "World";

  if (event.queryStringParameters.name) {
    name = event.queryStringParameters.name;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}`,
    }),
  };
};

module.exports.hello = handler;
