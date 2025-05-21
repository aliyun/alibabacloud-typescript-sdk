// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowLogRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
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
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time. The specified time range must be less than seven days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-27T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The order in which to sort the retrieved entries by field. Specify this parameter in the JSON format. The value is an ordered array that uses the order of the input array and contains `Field` and `Type`. Example: `[{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]`.
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
   *     *   **ProcessID**: the ID of the process.
   * 
   * *   `Type`: the sorting type of the retrieved entries. Valid values:
   * 
   *     *   **Desc**: descending order
   *     *   **Asc**: ascending order
   * 
   * @example
   * [{"Field":"ExecutionStartTime","Type":"Desc"},{"Field":"ScanRows","Type":"Asc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the process.
   * 
   * @example
   * 2021052716044317201616624903453******
   */
  processID?: string;
  /**
   * @remarks
   * The range conditions used to filter specified fields, including `Max` and `Min`. Specify this parameter in the JSON format. Example: `[{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]`.
   * 
   * `Field`: the field to be filtered. Valid values:
   * 
   * *   **ScanSize**: the amount of data to be scanned. Unit: KB.
   * *   **QueryTime**: the amount of time consumed to execute the statement. Unit: milliseconds.
   * *   **PeakMemoryUsage**: the maximum memory usage when the SQL statement is executed. Unit: KB.
   * 
   * >  `Min` indicates the minimum value of the query range (left operand). `Max` indicates the maximum value of the query range (right operand). Max and Min are both of the String type.
   * 
   * @example
   * [{"Field":"ScanSize","Min":"1000000","Max":"10000000"},{"Field":"QueryTime","Min":"1000","Max":"10000"}]
   */
  range?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-05-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the query. Valid values:
   * 
   * *   **Successed**: successful
   * *   **Failed**: failed
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

