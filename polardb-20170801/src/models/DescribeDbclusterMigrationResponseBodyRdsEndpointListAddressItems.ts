// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * rm-***********.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * *   **PolarDBMySQL**: The source database is a PolarDB for MySQL database when the major version of your PolarDB cluster is upgraded.
   * *   **RDS**: The source database is an ApsaraDB RDS database when data is migrated from ApsaraDB RDS to PolarDB for MySQL.
   * 
   * @example
   * 172.***.***.173
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
   * *   **Normal**: the standard endpoint
   * *   **ReadWriteSplitting**: the read/write splitting endpoint
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **Enabled**
   * - **Disabled**
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * vpc-************
   */
  VPCId?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * @example
   * vsw-**************
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

