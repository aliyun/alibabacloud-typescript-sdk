// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL Data Lakehouse Edition clusters in a specified region, including the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vb8de93v9b****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the ISO 8601 standard in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format. The time must be in UTC.
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-09-07T03:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The language configuration. Valid values:
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
   * The sorting configuration for the query results. The value is a JSON string. Example: `[{"Field":"AverageQueryTime","Type":"Asc"}]`. Parameters:
   * - `Field`: the sorting field. Valid values:
   *     - `PatternCreationTime`: the earliest submission time of the pattern within the query time range.
   *     - `AverageQueryTime`: the average total duration of the pattern within the query time range.
   *     - `MaxQueryTime`: the maximum total duration of the pattern within the query time range.
   *     - `AverageExecutionTime`: the average execution duration of the pattern within the query time range.
   *     - `MaxExecutionTime`: the maximum execution duration of the pattern within the query time range.
   *     - `AveragePeakMemory`: the average peak memory of the pattern within the query time range.
   *     - `MaxPeakMemory`: the maximum peak memory of the pattern within the query time range.
   *     - `AverageScanSize`: the average amount of data read by the pattern within the query time range.
   *     - `MaxScanSize`: the maximum amount of data read by the pattern within the query time range.
   *     - `QueryCount`: the number of executions of the pattern within the query time range.
   *     - `FailedCount`: the number of failures of the pattern within the query time range.
   * 
   * - `Type`: the sorting method. The value is case-insensitive. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Valid values: positive integers up to the maximum value of the Integer data type.
   * Default value: 1.
   * 
   * @example
   * 2
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The hash value of the SQL pattern, which is used to filter specific SQL patterns.
   * 
   * @example
   * 1234567890123456789
   */
  sqlPatternHash?: number;
  /**
   * @remarks
   * The start time of the query. Specify the time in the ISO 8601 standard in the <i>yyyy-MM-ddTHH:mm:ssZ</i> format. The time must be in UTC.
   * >  - You can only query data from the last 14 days.
   * - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * @example
   * 2022-09-06T03:06:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the database account that executes the SQL statement.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sqlPatternHash: 'SqlPatternHash',
      startTime: 'StartTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sqlPatternHash: 'number',
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

