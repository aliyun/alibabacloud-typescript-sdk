// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in a region.
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
   * The end of the time range to query. The time must be in UTC and in the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * > - The end time must be later than the start time.
   * >
   * > - The time range cannot exceed 24 hours.
   * 
   * @example
   * 2022-08-12T17:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The client IP address and port number.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * Specifies the fields for sorting the results. The value is a JSON string that is an array of objects. The order of objects in the array defines the sort priority. Each object contains the`Field` and`Type` parameters. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`.
   * 
   * - `Field`: the field by which to sort the results. Valid values:
   * 
   *   - **HostAddress**: the client IP address.
   * 
   *   - **UserName**: the username.
   * 
   *   - **ExecutionStartTime**: the execution start time of the SQL statement.
   * 
   *   - **QueryTime**: the execution duration.
   * 
   *   - **PeakMemoryUsage**: the peak memory usage of the SQL statement.
   * 
   *   - **ScanRows**: the number of rows scanned by a task that involves a data source.
   * 
   *   - **ScanSize**: the amount of data scanned.
   * 
   *   - **ScanTime**: the time taken for the data scan.
   * 
   *   - **PlanningTime**: the time taken to generate the execution plan.
   * 
   *   - **WallTime**: the total CPU time of all operators on all nodes.
   * 
   *   - **ProcessID**: the process ID.
   * 
   * - `Type`: the sort order. Valid values:
   * 
   *   - **Desc**: descending order.
   * 
   *   - **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The sort order for the results based on execution time. Valid values:
   * 
   * - **asc**: ascending order.
   * 
   * - **desc**: descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Valid values:
   * 
   * - **10** (default)
   * 
   * - **30**
   * 
   * - **50**
   * 
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
   * 无
   */
  proxyUser?: string;
  /**
   * @remarks
   * A keyword used to perform a fuzzy search on the returned results.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query available regions.
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
   * 
   * - **DELETE**
   * 
   * - **SELECT**
   * 
   * - **UPDATE**
   * 
   * - **INSERT INTO SELECT**
   * 
   * - **ALTER**
   * 
   * - **DROP**
   * 
   * - **CREATE**
   * 
   * > You can specify only one type per request. If this parameter is not specified, all types are queried by default.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start of the time range to query. The time must be in UTC and in the `yyyy-MM-ddTHH:mmZ` format.
   * 
   * > You can query SQL audit logs only when this feature is enabled. Logs are available for the last 30 days. If you disable and then re-enable SQL audit, only logs generated after the feature was re-enabled are returned.
   * 
   * @example
   * 2022-08-12T04:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates whether the SQL statement was successfully executed. Valid values:
   * 
   * - **true**: The SQL statement succeeded.
   * 
   * - **false**: The SQL statement failed.
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

