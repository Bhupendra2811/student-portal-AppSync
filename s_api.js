
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'bhupendra',
  applicationName: 'aws-node-express-api-graphql-project',
  appUid: 'ykwtqcHpFf1Rg6JLcc',
  orgUid: '6baa631e-0ba0-47c4-8b09-2ce25dcb6a54',
  deploymentUid: '0014bf6e-2d0d-46e3-8853-2eb0026c946c',
  serviceName: 'aws-node-express-api-graphql-project',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'aws-node-express-api-graphql-project-dev-api', timeout: 6 };

try {
  const userHandler = require('./handler.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}