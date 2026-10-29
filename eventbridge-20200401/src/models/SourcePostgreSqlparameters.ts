// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourcePostgreSQLParameters extends $dara.Model {
  /**
   * @remarks
   * The name of the PostgreSQL database to connect to.
   * 
   * @example
   * analytics_db
   */
  databaseName?: string;
  /**
   * @remarks
   * The hostname or IP address of the PostgreSQL database server.
   * 
   * @example
   * pgm-bp1xxxxx.pg.rds.aliyuncs.com
   */
  hostName?: string;
  /**
   * @remarks
   * The network type used to connect to the PostgreSQL data source. Valid values: PublicNetwork (public network) and PrivateNetwork (VPC).
   * 
   * @example
   * PrivateNetwork
   */
  networkType?: string;
  /**
   * @remarks
   * The password of the database connection user.
   * 
   * @example
   * your_password
   */
  password?: string;
  /**
   * @remarks
   * The connection port of the PostgreSQL database server.
   * 
   * @example
   * 5432
   */
  port?: number;
  /**
   * @remarks
   * The ID of the region where the PostgreSQL data source resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the PostgreSQL schema to synchronize.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The ID of the security group used to connect to the PostgreSQL instance.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The snapshot mode used when PostgreSQL data synchronization is started for the first time.
   * 
   * @example
   * when_needed
   */
  snapshotMode?: string;
  /**
   * @remarks
   * The names of the PostgreSQL tables to synchronize. Separate multiple table names with commas. Each table name must be in the {SchemaName}.{TableName} format.
   * 
   * @example
   * test_schema.test_table
   */
  tableNames?: string;
  /**
   * @remarks
   * The username for the database connection.
   * 
   * @example
   * readonly_user
   */
  user?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the VPC.
   * 
   * @example
   * [vsw-a1b2c3d4e5f6g7h8i9j0k]
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The ID of the VPC where the PostgreSQL instance resides.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      hostName: 'HostName',
      networkType: 'NetworkType',
      password: 'Password',
      port: 'Port',
      regionId: 'RegionId',
      schemaName: 'SchemaName',
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
      networkType: 'string',
      password: 'string',
      port: 'number',
      regionId: 'string',
      schemaName: 'string',
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

