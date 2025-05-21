// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLPatternsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL clusters in a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
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
   * The keyword that is used for the query.
   * 
   * @example
   * SELECT
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
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"AverageQueryTime","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `PatternCreationTime`: the earliest commit time of the SQL pattern within the time range to query.
   *     *   `AverageQueryTime`: the average total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `MaxQueryTime`: the maximum total amount of time consumed by the SQL pattern within the time range to query.
   *     *   `AverageExecutionTime`: the average execution duration of the SQL pattern within the time range to query.
   *     *   `MaxExecutionTime`: the maximum execution duration of the SQL pattern within the time range to query.
   *     *   `AveragePeakMemory`: the average peak memory usage of the SQL pattern within the time range to query.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query.
   *     *   `AverageScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `FailedCount`: the number of failed queries performed in association with the SQL pattern within the time range to query.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"Field":"AverageQueryTime","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * > If you do not specify this parameter, the value **1** is used.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * > If you do not specify this parameter, the value **30** is used.
   * 
   * @example
   * 30
   */
  pageSize?: number;
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
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * > 
   * 
   * *   Only data within the last 14 days can be queried. For example, if the current time is 2021-11-22T12:00:00Z, you can query SQL patterns at a point in time as early as 2021-11-09T12:00:00Z.
   * 
   * *   The maximum time range that can be specified is 24 hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-30T00:10:00Z
   */
  startTime?: string;
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
      startTime: 'StartTime',
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
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

