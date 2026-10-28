// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBClusterSSLRequest extends $dara.Model {
  /**
   * @remarks
   * The internal or public endpoint for which to create or update a server certificate.
   * 
   * @example
   * amv-***********.ads.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable SSL connection encryption. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableSSL?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The SSL operation. This parameter and EnableSSL are mutually exclusive. Valid values:
   * 
   * - Enable: Enables SSL.
   * - Disable: Disables SSL.
   * - Update: Updates the validity period of an enabled SSL certificate and retains the current endpoint bound to the certificate. When you set this parameter to Update, do not specify ConnectionString, or specify an endpoint that is the same as the current endpoint bound to the certificate.
   * 
   * @example
   * Update
   */
  SSLEnabled?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterId: 'DBClusterId',
      enableSSL: 'EnableSSL',
      regionId: 'RegionId',
      SSLEnabled: 'SSLEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterId: 'string',
      enableSSL: 'boolean',
      regionId: 'string',
      SSLEnabled: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

