// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The cluster ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the cluster IDs of all clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-t4nj8619bz2w3****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statement was executed.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ format.
   * > - The end time must be later than the start time.
   * > - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 2022-08-12T17:08Z
   */
  endTime?: string;
  /**
   * @example
   * XIHE
   */
  engineType?: string;
  /**
   * @remarks
   * The IP address and port number of the client that executed the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The sorting order based on specified fields. The value is in JSON format and is an ordered JSON array. Compound sorting is performed in the order of the input array. The array contains the `Field` and `Type` fields. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`.
   * * `Field` specifies the field name for sorting. Valid values:
   *     * **HostAddress**: the address of the client that connects to the database.
   *     * **UserName**: the username.
   *     * **ExecutionStartTime**: the execution start time of the SQL statement.
   *     * **QueryTime**: the execution duration of the SQL statement.
   *     * **PeakMemoryUsage**: the peak memory usage during the execution of the SQL statement.
   *     * **ScanRows**: the number of rows scanned by the task with a data source.
   *     * **ScanSize**: the amount of scanned data.
   *     * **ScanTime**: the total time consumed for scanning data.
   *     * **PlanningTime**: the time consumed for generating the execution plan.
   *     * **WallTime**: the cumulative CPU time of all operators across all nodes in the query.
   *     * **ProcessID**: the process ID.
   * 
   * * `Type` specifies the sorting type. Valid values:
   *     * **Desc**: descending order.
   *     * **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The order in which the results are sorted by SQL execution time. Valid values:
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
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
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
   * A reserved parameter.
   * 
   * @example
   * None
   */
  proxyUser?: string;
  /**
   * @remarks
   * The keyword used to filter the returned results.
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
   * The type of the SQL statement. Valid values:
   * - **DELETE**
   * - **SELECT**
   * - **UPDATE**
   * - **INSERT INTO SELECT**
   * - **ALTER**
   * - **DROP**
   * - **CREATE**
   * 
   * > Only one type can be specified per request. If this parameter is left empty, all types are queried by default.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in UTC in the yyyy-MM-ddTHH:mmZ format.
   * > SQL Audit Log entries can be queried only when SQL audit is enabled, and only entries from the last 30 days are supported. If SQL audit is disabled and then re-enabled, only entries recorded after re-enabling are available.
   * 
   * @example
   * 2022-08-12T04:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the SQL statement was executed successfully. Valid values:
   * * **true**: The SQL statement was executed successfully.
   * * **false**: The SQL statement failed to be executed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The username that executed the SQL statement.
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

