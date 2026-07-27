// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSSLResponseBody extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The certificate type. The value is **custom**, which indicates that a custom certificate is used.
   * 
   * @example
   * custom
   */
  CAType?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether SSL is enabled. Valid values:
   * * **1**: Enabled.
   * * **0**: Disabled.
   * 
   * @example
   * 1
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The custom certificate content.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
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
      branchName: 'string',
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

