// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKibanaSettingsResponseBody extends $dara.Model {
  /**
   * @example
   * F99407AB-2FA9-489E-A259-40CF6D*****
   */
  requestId?: string;
  /**
   * @example
   * {"map.includeElasticMapsService": "false", "server.ssl.cert": "/home/admin/packages/kibana/config/cert/client.crt", "server.ssl.enabled": "true", "server.ssl.key": "/home/admin/packages/kibana/config/cert/client.key", "xpack.reporting.capture.browser.chromium.disableSandbox": "true"}
   */
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

