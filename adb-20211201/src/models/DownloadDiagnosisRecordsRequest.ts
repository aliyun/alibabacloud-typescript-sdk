// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadDiagnosisRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * 106.11.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1q8bu9a****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the database on which the SQL statements are executed.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * adb_demo
   */
  database?: string;
  /**
   * @remarks
   * The end of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * > 
   * 
   * *   The end time must be later than the start time.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * @example
   * 1662450730000
   */
  endTime?: string;
  /**
   * @remarks
   * The query keyword of the SQL statements.
   * 
   * @example
   * select
   */
  keyword?: string;
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   **zh**: simplified Chinese.
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
   * 88000000
   */
  maxPeakMemory?: number;
  /**
   * @remarks
   * The maximum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 64424509440
   */
  maxScanSize?: number;
  /**
   * @remarks
   * The minimum peak memory of the SQL statements. Unit: bytes.
   * 
   * @example
   * 88000000
   */
  minPeakMemory?: number;
  /**
   * @remarks
   * The minimum scan size of the SQL statements. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  minScanSize?: number;
  /**
   * @remarks
   * The query condition for SQL statements, which can contain the `Type`, `Value`, `Min`, and `Max` fields. Specify the condition in the JSON format. `Type` specifies the query dimension. Valid values for Type: `maxCost`, `status`, and `cost`. `Value`, `Min`, or `Max` specifies the query range for the dimension. Valid values:
   * 
   * *   `{"Type":"maxCost","Value":"100"}`: queries the top 100 most time-consuming SQL statements. Set `Value` to 100.
   * *   `{"Type":"status","Value":"finished"}`: queries the executed SQL statements. You can set `Value` to `running` to query the SQL statements that are being executed. You can also set Value to `failed` to query the SQL statements that failed to be executed.
   * *   `{"Type":"cost","Min":"10","Max":"200"}`: queries the SQL statements whose execution duration is in the range of 10 to 200 milliseconds. You can also specify custom values for the Min and Max fields.
   * 
   * @example
   * {"Type":"status","Value":"finished"}
   */
  queryCondition?: string;
  /**
   * @remarks
   * The region ID of the cluster.
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
   * >  You can call the [DescribeDiagnosisDimensions](https://help.aliyun.com/document_detail/308210.html) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
   * 
   * @example
   * user_default
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Set the time to a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * >  You can query data only within the last 14 days.
   * 
   * @example
   * 1662364330000
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to execute the SQL statements.
   * 
   * >  You can call the [DescribeDiagnosisDimensions](~~~~) operation to query the resource groups, database names, usernames, and source IP addresses of the SQL statements that meet a query condition.
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

