var grunt = require('grunt');
grunt.loadNpmTasks('grunt-aws-lambda');

grunt.initConfig({
  lambda_invoke: {
    default: {
    }
  },
  lambda_deploy: {
    default: {
      arn: 'arn:aws:lambda:us-west-2:057267302678:function:nodejs-lambda-test-app'
    }
  },
  lambda_package: {
    default: {
    }
  }
});

grunt.registerTask('deploy', ['lambda_package', 'lambda_deploy']);
