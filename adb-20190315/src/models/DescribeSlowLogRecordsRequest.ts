// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1rqvm70uh2****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  DBName?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time. The time range between the start time and the end time cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-27T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The sorting order of the results. The value is an ordered JSON array. The results are sorted in the order of the objects in the array. Each object contains the `Field` and `Type` parameters. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`.
   * 
   * - `Field`: the field to sort by. Valid values:
   * 
   *   - **HostAddress**: the IP address of the client that is used to connect to the database.
   * 
   *   - **UserName**: the username.
   * 
   *   - **ExecutionStartTime**: the start time of the SQL statement execution.
   * 
   *   - **QueryTime**: the execution duration of the SQL statement.
   * 
   *   - **PeakMemoryUsage**: the peak memory usage for executing the SQL statement.
   * 
   *   - **ScanRows**: the number of rows scanned from the data source.
   * 
   *   - **ScanSize**: the amount of scanned data.
   * 
   *   - **ScanTime**: the total time consumed to scan data.
   * 
   *   - **PlanningTime**: the time consumed to generate the execution plan.
   * 
   *   - **WallTime**: the total CPU time consumed by all operators in the query on each node.
   * 
   *   - **ProcessID**: the process ID.
   * 
   * - `Type`: the sorting type. Valid values:
   * 
   *   - **Desc**: descending order.
   * 
   *   - **Asc**: ascending order.
   * 
   * @example
   * [{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]
   */
  order?: string;
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
   * The number of entries to return on each page. Valid values: **30** (default), **50**, and **100**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 2021052716044317201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * Filters the results by a specified range based on the maximum (`Max`) and minimum (`Min`) values of a field. The value is a JSON array. Example: `[{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]`.
   * 
   * The `Field` parameter specifies the field to filter by. Valid values:
   * 
   * - **ScanSize**: the amount of scanned data. Unit: KB.
   * 
   * - **QueryTime**: the execution duration. Unit: milliseconds (ms).
   * 
   * - **PeakMemoryUsage**: the peak memory usage for executing the SQL statement. Unit: KB.
   * 
   * > `Min` specifies the minimum value of the query range (left operand). `Max` specifies the maximum value of the query range (right operand). The data type of both parameters is String.
   * 
   * @example
   * [{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]
   */
  range?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The query state. Valid values:
   * 
   * - **Successed**: The query was successful.
   * 
   * - **Failed**: The query failed.
   * 
   * @example
   * Successed
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      endTime: 'EndTime',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      processID: 'ProcessID',
      range: 'Range',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      endTime: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      processID: 'string',
      range: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

