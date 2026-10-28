// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The cluster ID of an Enterprise Edition, Basic Edition, or Lakehouse Edition cluster.
   * <props="intl">The cluster ID of a Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in a specified region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the target SQL statement is executed.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end time of the query. The time is displayed in UTC and in the yyyy-MM-ddTHH:mmZ format.
   * > - The end time must be later than the start time.
   * > - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 2022-08-12T17:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - XIHE: audit logs of the default compute engine.
   * - AGENT_SERVERLESS: audit logs of the Serverless analytics feature.
   * 
   * If this parameter is not specified, the default value is XIHE.
   * 
   * @example
   * XIHE
   */
  engineType?: string;
  /**
   * @remarks
   * The IP address and port number of the client that executes the target SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The sort configuration in JSON format. The value is an ordered JSON array that specifies composite sorting based on the input array order. Each element contains the `Field` and `Type` parameters. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`. Details:
   * * `Field` specifies the field name for sorting. Valid values:
   *     * **HostAddress**: the client address used to connect to the database.
   *     * **UserName**: the username.
   *     * **ExecutionStartTime**: the start time of the target SQL statement execution.
   *     * **QueryTime**: the execution duration of the target SQL statement.
   *     * **PeakMemoryUsage**: the peak memory usage during the execution of the target SQL statement.
   *     * **ScanRows**: the number of scanned rows for tasks with a data source.
   *     * **ScanSize**: the volume of scanned data.
   *     * **ScanTime**: the total time consumed by data scanning.
   *     * **PlanningTime**: the time consumed by execution plan generation.
   *     * **WallTime**: the cumulative CPU time of all operators in the query across all nodes.
   *     * **ProcessID**: the process ID.
   * 
   * * `Type` specifies the sort order. Valid values:
   *     * **Desc**: descending order.
   *     * **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The sort order of SQL statements by execution time. Valid values:
   * * **asc**: ascending order.
   * * **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **10** (default)
   * - **30**
   * - **50**
   * - **100**
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The process ID of the SQL query, used to filter audit logs of a specified process.
   * 
   * @example
   * 20210608175202172016166249034536****
   */
  processId?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * None
   */
  proxyUser?: string;
  /**
   * @remarks
   * A string value that is used as a keyword to filter the returned results.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The SQL statement type. Valid values:
   * - **DELETE**
   * - **SELECT**
   * - **UPDATE**
   * - **INSERT INTO SELECT**
   * - **ALTER**
   * - **DROP**
   * - **CREATE**
   * 
   * > Only one type can be specified at a time. If this parameter is left empty, all types are queried by default.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start time of the query. The time is displayed in UTC and in the yyyy-MM-ddTHH:mmZ format.
   * > SQL audit logs can be queried only when SQL Audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL Audit is disabled and then re-enabled, only SQL audit logs generated after the re-enablement can be queried.
   * 
   * @example
   * 2022-08-12T04:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the target SQL statement is executed successfully. Valid values:
   * * **true**: The SQL statement is executed successfully.
   * * **false**: The SQL statement fails to be executed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The username that executes the target SQL statement.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      engineType: 'EngineType',
      hostAddress: 'HostAddress',
      order: 'Order',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processId: 'ProcessId',
      proxyUser: 'ProxyUser',
      queryKeyword: 'QueryKeyword',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sqlType: 'SqlType',
      startTime: 'StartTime',
      succeed: 'Succeed',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      engineType: 'string',
      hostAddress: 'string',
      order: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      processId: 'string',
      proxyUser: 'string',
      queryKeyword: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sqlType: 'string',
      startTime: 'string',
      succeed: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

