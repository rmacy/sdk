#!/bin/bash

status=0

(./bin/run.sh "api-client" "test" "yarn test --verbose") || status=1
(./bin/run.sh "apollo-links" "test" "yarn test --verbose") || status=1
(./bin/run.sh "app-provider" "test" "yarn test --verbose") || status=1
(./bin/run.sh "file-input" "test" "yarn test --verbose") || status=1
(./bin/run.sh "table-schema-provider" "test" "yarn test --verbose") || status=1
(./bin/run.sh "apollo-client" "test" "yarn test --verbose") || status=1
(./bin/run.sh "forms" "test" "yarn test --verbose") || status=1
(./bin/run.sh "permissions-provider" "test" "yarn test --verbose") || status=1
(./bin/run.sh "utils" "test" "yarn test --verbose") || status=1
(./bin/run.sh "validate" "test" "yarn test --verbose") || status=1
(./bin/run.sh "react-auth" "test" "yarn test --verbose") || status=1
(./bin/run.sh "auth" "test" "yarn test --verbose") || status=1
(./bin/run.sh "web-auth0-auth-client" "test" "yarn test --verbose") || status=1
(./bin/run.sh "api-token-auth-client" "test" "yarn test --verbose") || status=1
(./bin/run.sh "react-sdk" "test" "yarn test --verbose") || status=1

exit $status
