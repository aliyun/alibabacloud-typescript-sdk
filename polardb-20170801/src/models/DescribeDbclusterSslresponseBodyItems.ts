// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSSLResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * pe-************
   */
  DBEndpointId?: string;
  /**
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  /**
   * @remarks
   * The SSL connection string.
   * 
   * @example
   * pc-************.mysql.polardb.rds.aliyuncs.com
   */
  SSLConnectionString?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **Enabled**: SSL is enabled.
   * *   **Disable**: SSL is disabled.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The time when the server certificate expires. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-13T07:14:22Z
   */
  SSLExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBEndpointId: 'DBEndpointId',
      SSLAutoRotate: 'SSLAutoRotate',
      SSLConnectionString: 'SSLConnectionString',
      SSLEnabled: 'SSLEnabled',
      SSLExpireTime: 'SSLExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBEndpointId: 'string',
      SSLAutoRotate: 'string',
      SSLConnectionString: 'string',
      SSLEnabled: 'string',
      SSLExpireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

