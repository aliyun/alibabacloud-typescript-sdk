// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query details, including cluster IDs, for all AnalyticDB for MySQL clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T00:15:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The keyword for filtering SQL patterns.
   * 
   * @example
   * SELECT
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response. This parameter is used to localize messages such as error details. Valid values:
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
   * Specifies how to sort the query results. Set this parameter to a JSON string. Example: `[{"Field":"AverageQueryTime","Type":"Asc"}]`. The JSON string contains the following fields:
   * 
   * - `Field`: The sort field. Valid values:
   * 
   *   - `PatternCreationTime`: the earliest submission time of the SQL pattern within the specified time range.
   * 
   *   - `AverageQueryTime`: the average total query time of the SQL pattern within the specified time range.
   * 
   *   - `MaxQueryTime`: the maximum total query time of the SQL pattern within the specified time range.
   * 
   *   - `AverageExecutionTime`: the average execution time of the SQL pattern within the specified time range.
   * 
   *   - `MaxExecutionTime`: the maximum execution time of the SQL pattern within the specified time range.
   * 
   *   - `AveragePeakMemory`: the average peak memory usage of the SQL pattern within the specified time range.
   * 
   *   - `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the specified time range.
   * 
   *   - `AverageScanSize`: the average amount of data scanned by the SQL pattern within the specified time range.
   * 
   *   - `MaxScanSize`: the maximum amount of data scanned by the SQL pattern within the specified time range.
   * 
   *   - `QueryCount`: the number of times the SQL pattern is executed within the specified time range.
   * 
   *   - `FailedCount`: the number of failed executions for the SQL pattern within the specified time range.
   * 
   * - `Type`: the sort order. Valid values (case-insensitive):
   * 
   *   - `Asc`: ascending order.
   * 
   *   - `Desc`: descending order.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be an integer greater than 0.
   * 
   * > The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * > The default value is **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the available regions and availability zones for AnalyticDB for MySQL, including the region IDs.
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
   * The start of the time range to query. Specify the time in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > - You can query data for the last 14 days only. For example, if the current time is 2021-11-22T12:00:00Z, the earliest time that you can query is 2021-11-09T12:00:00Z.
   * >
   * > - The interval between the start time and the end time cannot exceed 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T00:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The username that is used to filter the SQL patterns. If you specify this parameter, only the SQL patterns of the specified user are returned.
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

