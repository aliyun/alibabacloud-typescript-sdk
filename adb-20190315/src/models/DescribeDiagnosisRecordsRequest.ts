// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * 59.82.xx.xx
   */
  clientIp?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database on which the SQL statements are executed.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 1633017540000
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for the query.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 89000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 104428198
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 0
   */
  minScanSize?: number;
  /**
   * @remarks
   * The order in which to sort the retrieved SQL statements by field. Specify this value in the JSON format. The value is an ordered array that uses the order of the input array and contains the `Field` and `Type` fields. Example: `[{"Field":"StartTime", "Type": "desc" }]`. Fields:
   * 
   * *   `Field` specifies the field that is used to sort the retrieved SQL statements. Valid values:
   * 
   *     *   `StartTime`: the start time of the execution.
   *     *   `Status`: the execution state.
   *     *   `UserName`: the username.
   *     *   `Cost`: the execution duration.
   *     *   `PeakMemory`: the peak memory.
   *     *   `ScanSize`: the amount of data to be scanned.
   *     *   `Database`: the name of the database.
   *     *   `ClientIp`: the source IP address.
   *     *   `ResourceGroup`: the name of the resource group.
   *     *   `QueueTime`: the amount of time that is consumed for queuing.
   *     *   `OutputRows`: the number of output rows.
   *     *   `OutputDataSize`: the amount of output data.
   *     *   `ResourceCostRank`: the execution duration rank of operators that are used in the SQL statements. This field takes effect only when `QueryCondition` is set to `{"Type":"status","Value":"running"}`.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Desc`: descending order.
   *     *   `Asc`: ascending order.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
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
   * The number of entries per page. Valid values: **30**, **50**, and **100**. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * >  You can call the [DescribeSQLPatterns](https://help.aliyun.com/document_detail/321868.html) operation to query the information about all SQL patterns within an AnalyticDB for MySQL cluster in a time range, including SQL pattern IDs.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, and `Min` or `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries executed SQL statements. You can set `Value` to `running` to query SQL statements that are being executed. You can also set Value to `failed` to query SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries SQL statements whose execution durations are in the range of 10 to 200 milliseconds. You can also customize the maximum and minimum execution durations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statements belong.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > Only data within the last 14 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 1632931200000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements to be queried.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clientIp: 'ClientIp',
      DBClusterId: 'DBClusterId',
      database: 'Database',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      maxPeakMemory: 'MaxPeakMemory',
      maxScanSize: 'MaxScanSize',
      minPeakMemory: 'MinPeakMemory',
      minScanSize: 'MinScanSize',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      patternId: 'PatternId',
      queryCondition: 'QueryCondition',
      regionId: 'RegionId',
      resourceGroup: 'ResourceGroup',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIp: 'string',
      DBClusterId: 'string',
      database: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      maxPeakMemory: 'number',
      maxScanSize: 'number',
      minPeakMemory: 'number',
      minScanSize: 'number',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      patternId: 'string',
      queryCondition: 'string',
      regionId: 'string',
      resourceGroup: 'string',
      startTime: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

