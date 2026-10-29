// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMySQLParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * database1
   */
  databaseName?: string;
  /**
   * @remarks
   * The hostname or IP address of the database server.
   * 
   * @example
   * rm-bp1vxxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @remarks
   * Indicates whether to include schema changes.
   * 
   * @example
   * false
   */
  includeSchemaChanges?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password for the user.
   * 
   * @example
   * admin
   */
  password?: string;
  /**
   * @remarks
   * The database server port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region that contains the data source.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The snapshot mode.
   * 
   * @example
   * when_needed
   */
  snapshotMode?: string;
  /**
   * @remarks
   * The names of tables to synchronize. Separate multiple table names with a comma.
   * 
   * @example
   * database1.table1
   */
  tableNames?: string;
  /**
   * @remarks
   * The database username.
   * 
   * @example
   * example_user
   */
  user?: string;
  /**
   * @remarks
   * The VSwitch IDs. Separate multiple IDs with a comma.
   * 
   * @example
   * [vsw-a1b2c3d4e5f6g7h8i9j0k]
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      includeSchemaChanges: 'IncludeSchemaChanges',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      snapshotMode: 'SnapshotMode',
      tableNames: 'TableNames',
      user: 'User',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      hostName: 'string',
      includeSchemaChanges: 'string',
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      securityGroupId: 'string',
      snapshotMode: 'string',
      tableNames: 'string',
      user: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

