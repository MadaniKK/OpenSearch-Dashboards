/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Any modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const os = require('os');
const path = require('path');

function maybeUseBat(bin) {
  return os.platform().startsWith('win') ? `${bin}.bat` : bin;
}

function maybeUseBatOrShell(bin) {
  return os.platform().startsWith('win') ? `${bin}.bat` : `${bin}.sh`;
}

const tempDir = os.tmpdir();

exports.BASE_PATH = path.resolve(tempDir, 'osd-opensearch');

exports.GRADLE_BIN = maybeUseBat('./gradlew');
exports.OPENSEARCH_BIN = maybeUseBat('bin/opensearch');
exports.OPENSEARCH_CONFIG = 'config/opensearch.yml';

exports.OPENSEARCH_KEYSTORE_BIN = maybeUseBat('./bin/opensearch-keystore');
exports.OPENSEARCH_PLUGIN = maybeUseBat('./bin/opensearch-plugin');
exports.OPENSEARCH_SECURITY_INSTALL = maybeUseBatOrShell(
  './plugins/opensearch-security/tools/install_demo_configuration'
);
