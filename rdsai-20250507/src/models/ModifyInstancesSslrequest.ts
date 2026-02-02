// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstancesSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The certificate type. Only **custom** is supported.
   * 
   * >  This parameter is required if **SSLEnabled** is set to **1**.
   * 
   * @example
   * custom
   */
  CAType?: string;
  /**
   * @remarks
   * The information about the RDS Supabase instances that you want to configure. You can specify up to 10 instances.
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *     "ra-supabase-xxx",
   *     "ra-supabase-xxx"
   *   ]
   */
  instanceNames?: string[];
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
   * Enables or disables SSL. Valid values:
   * 
   * *   **1**: enable
   * *   **0**: disable
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
   * >  This parameter is required if **CAType** is set to **custom**.
   * 
   * @example
   * -----BEGIN CERTIFICATE-----MIID*****QqEP-----END CERTIFICATE-----
   */
  serverCert?: string;
  /**
   * @remarks
   * The private key of the certificate.
   * 
   * >  This parameter is required if **CAType** is set to **custom**.
   * 
   * @example
   * -----BEGIN PRIVATE KEY-----MIIE****ihfg==-----END PRIVATE KEY-----
   */
  serverKey?: string;
  static names(): { [key: string]: string } {
    return {
      CAType: 'CAType',
      instanceNames: 'InstanceNames',
      regionId: 'RegionId',
      SSLEnabled: 'SSLEnabled',
      serverCert: 'ServerCert',
      serverKey: 'ServerKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CAType: 'string',
      instanceNames: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      SSLEnabled: 'number',
      serverCert: 'string',
      serverKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceNames)) {
      $dara.Model.validateArray(this.instanceNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

