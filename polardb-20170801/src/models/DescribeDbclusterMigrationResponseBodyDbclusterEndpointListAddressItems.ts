// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * pc-**************.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The description of a migration exception. If no exception occurs during the migration, an empty string is returned.
   * 
   * @example
   * 192.***.***.10
   */
  IPAddress?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Cluster**: the default cluster endpoint
   * *   **Primary**: the primary endpoint
   * *   **Custom**: the custom endpoint
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * *   ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
   * *   ReadOnly (default): receives and forwards read requests only.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      SSLEnabled: 'SSLEnabled',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      SSLEnabled: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

