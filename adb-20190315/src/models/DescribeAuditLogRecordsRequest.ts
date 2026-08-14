// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to view the IDs of all Data Warehouse Edition clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-t4nj8619bz2w3****
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
   * The end of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > - The end time must be later than the start time.
   * >
   * > - The time range to query cannot exceed 24 hours.
   * 
   * @example
   * 2022-01-23T22:18Z
   */
  endTime?: string;
  /**
   * @remarks
   * The IP address and port number of the client that was used to execute the SQL statement.
   * 
   * @example
   * 100.104.XX.XX:43908
   */
  hostAddress?: string;
  /**
   * @remarks
   * The sorting order of the query results. Specify the value as an ordered JSON array. The results are sorted based on the order of fields in the array. Each object in the array contains the \\`Field\\` and \\`Type\\` fields.
   * 
   * - Field specifies the field by which to sort the query results. Valid values:
   * 
   *   - HostAddress: the IP address of the client that connects to the database.
   * 
   *   - Succeed: specifies whether the SQL statement was successfully executed.
   * 
   *   - TotalTime: the total amount of time that is consumed to execute the SQL statement.
   * 
   *   - DBName: the name of the database on which the SQL statement was executed.
   * 
   *   - SQLType: the type of the SQL statement.
   * 
   *   - User: the username that was used to execute the SQL statement.
   * 
   *   - ExecuteTime: the start time of the SQL statement execution.
   * 
   * - Type specifies the sorting method. Valid values:
   * 
   *   - Desc: descending.
   * 
   *   - Asc: ascending.
   * 
   * @example
   * [{"Field":"ExecuteTime","Type":"Desc"},{"Field":"HostAddress","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The order by which to sort the query results based on the execution time of the SQL statement. Valid values:
   * 
   * - **asc**: ascending.
   * 
   * - **desc**: descending.
   * 
   * @example
   * asc
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **10**
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * > If you do not specify this parameter, the default value is 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  processId?: string;
  /**
   * @remarks
   * The keyword for the query. This keyword is used to filter SQL statements.
   * 
   * @example
   * adb
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to view the regions and zones, including the region IDs, that are supported by AnalyticDB for MySQL.
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
   * - **INSERT_INTO_SELECT**
   * 
   * - **ALTER**
   * 
   * - **DROP**
   * 
   * - **CREATE**
   * 
   * > You can query for only one type of SQL statement at a time. If you leave this parameter empty, all types of SQL statements are queried.
   * 
   * @example
   * SELECT
   */
  sqlType?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.
   * 
   * > You can query SQL audit logs only when SQL Audit is enabled. You can query only the SQL audit logs from the last 30 days. If you disable and then re-enable SQL Audit, you can query only the logs generated after it was re-enabled.
   * 
   * @example
   * 2022-01-23T02:18Z
   */
  startTime?: string;
  /**
   * @remarks
   * Specifies whether the SQL statement was successfully executed. Valid values:
   * 
   * - **true**: The SQL statement was successfully executed.
   * 
   * - **false**: The SQL statement failed to be executed.
   * 
   * @example
   * true
   */
  succeed?: string;
  /**
   * @remarks
   * The username that was used to execute the SQL statement.
   * 
   * @example
   * test_user
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
      processId: 'ProcessId',
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
      processId: 'string',
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

