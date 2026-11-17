// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceMySQLParameters extends $dara.Model {
  /**
   * @example
   * database1
   */
  databaseName?: string;
  /**
   * @example
   * rm-bp1vxxx.mysql.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @example
   * false
   */
  includeSchemaChanges?: string;
  /**
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @example
   * admin
   */
  password?: string;
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @example
   * when_needed
   */
  snapshotMode?: string;
  /**
   * @example
   * database1.table1
   */
  tableNames?: string;
  /**
   * @example
   * example_user
   */
  user?: string;
  /**
   * @example
   * [vsw-a1b2c3d4e5f6g7h8i9j0k]
   */
  vSwitchIds?: string;
  /**
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

