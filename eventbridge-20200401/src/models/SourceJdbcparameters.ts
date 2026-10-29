// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceJDBCParameters extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows returned per query. Default value: 1000. Maximum value: 10000.
   * 
   * @example
   * 1000
   */
  batchSize?: number;
  /**
   * @remarks
   * The custom SQL query statement for advanced mode. This parameter is mutually exclusive with TableName.
   * 
   * @example
   * SELECT * FROM example_table
   */
  customQuery?: string;
  /**
   * @remarks
   * The name of the auto-increment column. This parameter is required when QueryMode is set to `incrementing` or `timestamp_incrementing`.
   * 
   * @example
   * id
   */
  incrementingColumn?: string;
  /**
   * @remarks
   * The JDBC connection URL. ClickHouse example: `jdbc:clickhouse://host:8123/database`. MySQL example: `jdbc:mysql://host:3306/database`. The system automatically identifies the database type.
   * 
   * @example
   * jdbc:mysql://host:3306/database
   */
  jdbcUrl?: string;
  /**
   * @remarks
   * The network type. Valid values: `PublicNetwork` (public network) and `PrivateNetwork` (VPC private network, which requires VpcId, VSwitchIds, and SecurityGroupId to be configured).
   * 
   * @example
   * PublicNetwork
   */
  network?: string;
  /**
   * @remarks
   * The database password.
   * 
   * @example
   * example_password
   */
  password?: string;
  /**
   * @remarks
   * The polling interval in seconds. Minimum value: 10. Default value: 60.
   * 
   * @example
   * 60
   */
  pollingInterval?: number;
  /**
   * @remarks
   * The query mode. Valid values: `bulk` (full query), `incrementing` (auto-increment column tracking), `timestamp` (timestamp tracking), and `timestamp_incrementing` (dual tracking by timestamp and auto-increment column).
   * 
   * @example
   * bulk
   */
  queryMode?: string;
  /**
   * @remarks
   * The SQL query timeout in seconds. Default value: 30. Maximum value: 300.
   * 
   * @example
   * 30
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The security group ID. This parameter is required when Network is set to PrivateNetwork.
   * 
   * @example
   * sg-a1b2c3d4e5f6g7h8i9j0
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The name of the target table. This parameter is mutually exclusive with CustomQuery and is required when custom SQL is not used.
   * 
   * @example
   * example_table
   */
  tableName?: string;
  /**
   * @remarks
   * The name of the timestamp column. This parameter is required when QueryMode is set to `timestamp` or `timestamp_incrementing`.
   * 
   * @example
   * updated_at
   */
  timestampColumn?: string;
  /**
   * @remarks
   * The database username.
   * 
   * @example
   * example_user
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch IDs. This parameter is required when Network is set to PrivateNetwork.
   * 
   * @example
   * vsw-a1b2c3d4e5f6g7h8i9j0k
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is required when Network is set to PrivateNetwork.
   * 
   * @example
   * vpc-a1b2c3d4e5f6g7h8i9j0k
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      batchSize: 'BatchSize',
      customQuery: 'CustomQuery',
      incrementingColumn: 'IncrementingColumn',
      jdbcUrl: 'JdbcUrl',
      network: 'Network',
      password: 'Password',
      pollingInterval: 'PollingInterval',
      queryMode: 'QueryMode',
      queryTimeout: 'QueryTimeout',
      securityGroupId: 'SecurityGroupId',
      tableName: 'TableName',
      timestampColumn: 'TimestampColumn',
      username: 'Username',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchSize: 'number',
      customQuery: 'string',
      incrementingColumn: 'string',
      jdbcUrl: 'string',
      network: 'string',
      password: 'string',
      pollingInterval: 'number',
      queryMode: 'string',
      queryTimeout: 'number',
      securityGroupId: 'string',
      tableName: 'string',
      timestampColumn: 'string',
      username: 'string',
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

