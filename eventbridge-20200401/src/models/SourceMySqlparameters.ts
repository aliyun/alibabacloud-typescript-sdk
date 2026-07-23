// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMySQLParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   */
  databaseName?: string;
  /**
   * @remarks
   * The hostname or IP address of the database server.
   */
  hostName?: string;
  /**
   * @remarks
   * Indicates whether to include schema changes.
   */
  includeSchemaChanges?: string;
  /**
   * @remarks
   * The network type.
   */
  networkType?: string;
  /**
   * @remarks
   * The password for the user.
   */
  password?: string;
  /**
   * @remarks
   * The database server port.
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region that contains the data source.
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The snapshot mode.
   */
  snapshotMode?: string;
  /**
   * @remarks
   * The names of tables to synchronize. Separate multiple table names with a comma.
   */
  tableNames?: string;
  /**
   * @remarks
   * The database username.
   */
  user?: string;
  /**
   * @remarks
   * The VSwitch IDs. Separate multiple IDs with a comma.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC.
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

