// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSSLResponseBody extends $dara.Model {
  /**
   * @example
   * custom
   */
  CAType?: string;
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  SSLEnabled?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  static names(): { [key: string]: string } {
    return {
      CAType: 'CAType',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
      SSLEnabled: 'SSLEnabled',
      serverCert: 'ServerCert',
      serverKey: 'ServerKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CAType: 'string',
      instanceName: 'string',
      requestId: 'string',
      SSLEnabled: 'string',
      serverCert: 'string',
      serverKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

