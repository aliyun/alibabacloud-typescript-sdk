// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 2022-08-12T17:08Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that is used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The order in which to sort the retrieved entries by field. Specify this parameter in the JSON format. The value is an ordered array that uses the order of the input array and contains `Field` and `Type`. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`. Fields:
   * 
   * *   `Field`: the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   **HostAddress**: the IP address of the client that is used to connect to the database.
   *     *   **UserName**: the username.
   *     *   **ExecutionStartTime**: the start time of the query execution.
   *     *   **QueryTime**: the amount of time consumed to execute the SQL statement.
   *     *   **PeakMemoryUsage**: the maximum memory usage when the SQL statement is executed.
   *     *   **ScanRows**: the number of rows to be scanned from a data source in the task.
   *     *   **ScanSize**: the amount of data to be scanned.
   *     *   **ScanTime**: the total amount of time consumed to scan data.
   *     *   **PlanningTime**: the amount of time consumed to generate execution plans.
   *     *   **WallTime**: the accumulated CPU Time values of all operators in the query on each node.
   *     *   **ProcessID**: the process ID.
   * 
   * *   `Type`: the sorting type of the retrieved entries. Valid values:
   * 
   *     *   **Desc**: descending order.
   *     *   **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The sorting order of the retrieved entries. Valid values:
   * 
   * *   **asc**: sorts the retrieved entries by time in ascending order.
   * *   **desc**: sorts the retrieved entries by time in descending order.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
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
   * none
   */
  proxyUser?: string;
  /**
   * @remarks
   * The keyword based on which audit logs are queried. You can set this parameter to a value of the STRING type.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
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
   * *   **DELETE**
   * *   **SELECT**
   * *   **UPDATE**
   * *   **INSERT INTO SELECT**
   * *   **ALTER**
   * *   **DROP**
   * *   **CREATE**
   * 
   * >  You can query only a single type of SQL statements at a time. If you leave this parameter empty, all types of SQL statements are queried.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > SQL audit logs can be queried only when SQL audit is enabled. Only SQL audit logs within the last 30 days can be queried. If SQL audit was disabled and re-enabled, only SQL audit logs from the time when SQL audit was re-enabled can be queried.
   * 
   * @example
   * 2022-08-12T04:17Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the execution of the SQL statement succeeds. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statement.
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

