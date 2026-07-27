// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSSLRequest extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The certificate type. Currently, only **custom** is supported, which indicates that a custom certificate is used.
   * > This parameter is required when **SSLEnabled** is set to **1**.
   * 
   * @example
   * custom
   */
  CAType?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable SSL. Valid values:
   * * **1**: Enable SSL.
   * * **0**: Disable SSL.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  SSLEnabled?: number;
  /**
   * @remarks
   * The content of the custom certificate.
   * 
   * > This parameter is required when **CAType** is set to **custom**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * > This parameter is required when **CAType** is set to **custom**.
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
      regionId: 'RegionId',
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
      regionId: 'string',
      SSLEnabled: 'number',
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

