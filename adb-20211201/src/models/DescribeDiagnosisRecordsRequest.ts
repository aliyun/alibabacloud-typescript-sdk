// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements that meet the specified search conditions.
   * 
   * @example
   * 59.82.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612397.html) operation to query the details of all clusters under your account, including the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1scs48yc125****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database in which the SQL statement is executed.
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements that meet the specified search conditions.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end time of the query. The time is a UNIX timestamp in milliseconds.
   * > * The end time must be later than the start time.
   * > * The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 1633017540000
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword used to filter SQL statements.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the downloaded file title and some error messages. Valid values:
   * - **zh**: Simplified Chinese (default).
   * - **en**: English.
   * - **ja**: Japanese.
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Peak Volume of memory for the SQL statement. Unit: bytes.
   * 
   * @example
   * 89000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statement. Unit: bytes.
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
   * The sorting rules for SQL statements based on specified fields. The value is a JSON array that contains the Field and Type fields. The SQL statements are sorted in the order of the fields in the array. Example: `[{"Field":"StartTime", "Type": "desc" }]`.
   * - Field: the name of the field by which you want to sort the SQL statements. Valid values:
   *     - StartTime: the start time of the execution.
   *     - Status: the execution status.
   *     - UserName: the username.
   *     - Cost: the execution duration.
   *     - PeakMemory: the peak memory.
   *     - ScanSize: the scan size.
   *     - Database: the database name.
   *     - ClientIp: the source IP address.
   *     - ResourceGroup: the resource group.
   *     - QueueTime: the queue time.
   *     - OutputRows: the number of output rows.
   *     - OutputDataSize: the output data size.
   *     - ResourceCostRank: the ranking of the execution duration of internal operators in the SQL statement. This field is supported only when QueryCondition is set to `{"Type":"status","Value":"running"}`.
   * - Type: the sorting type. Valid values (case-insensitive):
   *     - Desc: descending order.
   *     - Asc: ascending order.
   * 
   * @example
   * [{"Field":"StartTime", "Type": "desc" }]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
   * - **50**
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
   * The conditions for the SQL query. The value is a JSON string that contains fields such as Type, Value, Min, and Max. The Type field specifies the query dimension. Valid values: maxCost, status, and cost. The Value, Min, or Max field specifies the query range for the dimension. Valid values:
   * - `{"Type":"maxCost","Value":"100"}`: queries the details of the top 100 SQL statements with the longest execution duration. Currently, the Value field can only be set to 100.
   * - `{"Type":"status","Value":"finished"}`: queries the details of completed SQL statements. You can also set Value to running or failed to query the details of running or failed SQL statements.
   * - `{"Type":"cost","Min":"10","Max":"200"}`: queries the details of SQL statements whose execution duration is between 10 milliseconds and 200 milliseconds. You can also customize the maximum and minimum execution duration in milliseconds.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including the region IDs.
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
   * > You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements that meet the specified search conditions.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The start time of the query. The time is a UNIX timestamp in milliseconds.
   * > You can only query data within the last 14 days.
   * 
   * @example
   * 1632931200000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that executes the SQL statement.
   * You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource group, database name, username, and source IP address of the SQL statements that meet the specified search conditions.
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

