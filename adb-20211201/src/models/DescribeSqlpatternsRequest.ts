// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL (Data Lakehouse Edition) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) API to find the cluster IDs of all AnalyticDB for MySQL (Data Lakehouse Edition) clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-8vb8de93v9b****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC and formatted as *yyyy-MM-ddTHH:mm:ssZ*.
   * 
   * > The end time must be later than the start time.
   * 
   * @example
   * 2022-09-07T03:06:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for filtering the query results.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The response language. Valid values:
   * 
   * - **zh**: Simplified Chinese (default)
   * 
   * - **en**: English
   * 
   * - **ja**: Japanese
   * 
   * - **zh-tw**: Traditional Chinese
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order for the results. Specify this parameter as a JSON string, for example, `[{"Field":"AverageQueryTime","Type":"Asc"}]`. The string consists of the following fields:
   * 
   * - `Field`: the sort field. Valid values:
   * 
   *   - `PatternCreationTime`: The earliest submission time of the pattern.
   * 
   *   - `AverageQueryTime`: The average query time of the pattern.
   * 
   *   - `MaxQueryTime`: The maximum query time of the pattern.
   * 
   *   - `AverageExecutionTime`: The average execution time of the pattern.
   * 
   *   - `MaxExecutionTime`: The maximum execution time of the pattern.
   * 
   *   - `AveragePeakMemory`: The average peak memory of the pattern.
   * 
   *   - `MaxPeakMemory`: The maximum peak memory of the pattern.
   * 
   *   - `AverageScanSize`: The average scanned data size of the pattern.
   * 
   *   - `MaxScanSize`: The maximum scanned data size of the pattern.
   * 
   *   - `QueryCount`: The query count of the pattern.
   * 
   *   - `FailedCount`: The failure count of the pattern.
   * 
   * - `Type`: the sort order. Valid values (case-insensitive):
   * 
   *   - `Asc`: ascending order.
   * 
   *   - `Desc`: descending order.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Must be an integer greater than 0. Default: 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
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
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  sqlPatternHash?: number;
  /**
   * @remarks
   * The start of the time range to query. The time must be in UTC and formatted as *yyyy-MM-ddTHH:mm:ssZ*.
   * 
   * > - Data is available for the last 14 days only.
   * 
   * - The time range cannot exceed 24 hours.
   * 
   * @example
   * 2022-09-06T03:06:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username of the database account used to execute the SQL statements.
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

