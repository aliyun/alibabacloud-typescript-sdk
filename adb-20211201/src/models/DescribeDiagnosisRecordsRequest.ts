// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * > Call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to view the resource groups, database names, usernames, and source IP addresses for the SQL statements that meet the specified query conditions.
   * 
   * @example
   * 59.82.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to view the details of all clusters in your account, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1scs48yc125****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database where the SQL statement is executed.
   * 
   * > Call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to view the resource groups, database names, usernames, and source IP addresses for the SQL statements that meet the specified query conditions.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the UNIX timestamp format. The time must be in milliseconds.
   * 
   * > - The end time must be later than the start time.
   * >
   * > - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 1633017540000
   */
  endTime?: string;
  /**
   * @remarks
   * Filters the queries by the keywords contained in the SQL statements.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the file title and some error messages in the downloaded file. Valid values:
   * 
   * - **zh**: Simplified Chinese (default).
   * 
   * - **en**: English.
   * 
   * - **ja**: Japanese.
   * 
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum peak memory of the SQL statement. Unit: bytes.
   * 
   * @example
   * 89000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the target SQL statement. Unit: bytes.
   * 
   * @example
   * 1024000000
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statement. Unit: bytes.
   * 
   * @example
   * 0
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statement. Unit: bytes.
   * 
   * @example
   * 0
   */
  minScanSize?: number;
  /**
   * @remarks
   * The sorting order of the SQL statements. This parameter is a JSON array that is ordered by the sequence of the input array. It contains the `Field` and `Type` fields. Example: `[{"Field":"StartTime", "Type": "desc" }]`. The fields are described as follows:
   * 
   * - `Field` specifies the field by which to sort the SQL statements. Valid values:
   * 
   *   - `StartTime`: the start time of the execution.
   * 
   *   - `Status`: the execution state.
   * 
   *   - `UserName`: the username.
   * 
   *   - `Cost`: the execution duration.
   * 
   *   - `PeakMemory`: the peak memory.
   * 
   *   - `ScanSize`: the amount of scanned data.
   * 
   *   - `Database`: the database name.
   * 
   *   - `ClientIp`: the source IP address.
   * 
   *   - `ResourceGroup`: the resource group.
   * 
   *   - `QueueTime`: the amount of time that the query waited in a queue.
   * 
   *   - `OutputRows`: the number of output rows.
   * 
   *   - `OutputDataSize`: the amount of output data.
   * 
   *   - `ResourceCostRank`: the ranking of the execution duration of an operator in the SQL statement. This field is returned only when `QueryCondition` is set to `{"Type":"status","Value":"running"}`.
   * 
   * - `Type` specifies the sorting type. Valid values (case-insensitive):
   * 
   *   - `Desc`: descending order.
   * 
   *   - `Asc`: ascending order.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the SQL pattern.
   * 
   * @example
   * 5575924945138******
   */
  patternId?: string;
  /**
   * @remarks
   * The conditions for the SQL query. This parameter is a JSON string that contains fields such as Type, `Value`, `Min`, and `Max`. The `Type` field indicates the query dimension. Valid values for `Type`: `maxCost`, `status`, and `cost`. The `Value`, `Min`, and `Max` fields specify the query range for the dimension. Valid values:
   * 
   * - `{"Type":"maxCost","Value":"100"}`: queries the details of the top 100 SQL statements that have the longest execution durations. The `Value` field can only be set to 100.
   * 
   * - `{"Type":"status","Value":"finished"}`: queries the details of completed SQL statements. You can also set `Value` to `running` or `failed` to query SQL statements that are running or have failed.
   * 
   * - `{"Type":"cost","Min":"10","Max":"200"}`: queries the details of SQL statements whose execution durations are between 10 ms and 200 ms. You can customize the minimum and maximum execution durations. Unit: milliseconds.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to view the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group to which the SQL statement belongs.
   * 
   * > Call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to view the resource groups, database names, usernames, and source IP addresses for the SQL statements that meet the specified query conditions.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The start of the time range to query. Specify the time in the UNIX timestamp format. The time must be in milliseconds.
   * 
   * > Only data from the last 14 days can be queried.
   * 
   * @example
   * 1632931200000
   */
  startTime?: string;
  /**
   * @remarks
   * The username used to execute the SQL statement.
   * Call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to view the resource groups, database names, usernames, and source IP addresses for the SQL statements that meet the specified query conditions.
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

