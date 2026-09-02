// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceJDBCParameters extends $dara.Model {
  /**
   * @remarks
   * The maximum number of rows returned per query. Default value: 1000. Maximum value: 10000.
   */
  batchSize?: number;
  /**
   * @remarks
   * The custom SQL query statement (advanced mode). This parameter is mutually exclusive with TableName.
   */
  customQuery?: string;
  /**
   * @remarks
   * The incrementing column name. Required when QueryMode is set to `incrementing` or `timestamp_incrementing`.
   */
  incrementingColumn?: string;
  /**
   * @remarks
   * The JDBC connection URL. ClickHouse example: `jdbc:clickhouse://host:8123/database`; MySQL example: `jdbc:mysql://host:3306/database`. The system automatically identifies the database type.
   */
  jdbcUrl?: string;
  /**
   * @remarks
   * The network type. Valid values: `PublicNetwork` (public network); `PrivateNetwork` (VPC private network, requires VpcId, VSwitchIds, and SecurityGroupId to be configured).
   */
  network?: string;
  /**
   * @remarks
   * The database password.
   */
  password?: string;
  /**
   * @remarks
   * The polling interval, in seconds. Minimum value: 10. Default value: 60.
   */
  pollingInterval?: number;
  /**
   * @remarks
   * The query mode. Valid values: `bulk` (full query); `incrementing` (incrementing column tracking); `timestamp` (timestamp tracking); `timestamp_incrementing` (timestamp and incrementing column dual tracking).
   */
  queryMode?: string;
  /**
   * @remarks
   * The SQL query timeout period, in seconds. Default value: 30. Maximum value: 300.
   */
  queryTimeout?: number;
  /**
   * @remarks
   * The security group ID. Required when Network is set to PrivateNetwork.
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The target table name. This parameter is mutually exclusive with CustomQuery. Required when custom SQL is not used.
   */
  tableName?: string;
  /**
   * @remarks
   * The timestamp column name. Required when QueryMode is set to `timestamp` or `timestamp_incrementing`.
   */
  timestampColumn?: string;
  /**
   * @remarks
   * The database username.
   */
  username?: string;
  /**
   * @remarks
   * The vSwitch ID. Required when Network is set to PrivateNetwork.
   */
  vSwitchIds?: string;
  /**
   * @remarks
   * The VPC ID. Required when Network is set to PrivateNetwork.
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

