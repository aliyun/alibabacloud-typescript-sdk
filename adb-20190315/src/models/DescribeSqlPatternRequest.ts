// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternRequest extends $dara.Model {
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
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"Pattern","Type":"Asc"}]`. Parameters:
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `Pattern`: the SQL pattern.
   *     *   `AccessIP`: the IP address of the client.
   *     *   `User`: the username.
   *     *   `QueryCount`: the number of queries performed in association with the SQL pattern within the time range to query.
   *     *   `AvgPeakMemory`: the average peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxPeakMemory`: the maximum peak memory usage of the SQL pattern within the time range to query. Unit: KB.
   *     *   `AvgCpuTime`: the average execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `MaxCpuTime`: the maximum execution duration of the SQL pattern within the time range to query. Unit: milliseconds.
   *     *   `AvgStageCount`: the average number of stages.
   *     *   `MaxStageCount`: the maximum number of stages.
   *     *   `AvgTaskCount`: the average number of tasks.
   *     *   `MaxTaskCount`: the maximum number of tasks.
   *     *   `AvgScanSize`: the average amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   *     *   `MaxScanSize`: the maximum amount of data scanned based on the SQL pattern within the time range to query. Unit: KB.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, query results are sorted in ascending order of `Pattern`.
   * 
   * *   If you want to sort query results by `AccessIP`, you must set the `Type` parameter to `accessip`. If you want to sort query results by `User`, you must leave the `Type` parameter empty or set it to `user`.
   * 
   * @example
   * [{"Field":"Pattern","Type":"Asc"}]
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
   * The number of entries per page. The value must be a positive integer. Default value: **30**.
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
   * The keyword that is used for the query.
   * 
   * > If you do not specify this parameter, all SQL patterns of the AnalyticDB for MySQL cluster within the time period specified by `StartTime` are returned.
   * 
   * @example
   * SELECT
   */
  sqlPattern?: string;
  /**
   * @remarks
   * The start date to query. Specify the time in the *yyyy-MM-dd* format. The time must be in UTC.
   * 
   * > Only data within the last 30 days can be queried.
   * 
   * @example
   * 2021-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * The dimension by which to aggregate the SQL patterns. Valid values:
   * 
   * *   `user`: aggregates the SQL patterns by user.
   * *   `accessip`: aggregates the SQL patterns by client IP address.
   * 
   * > If you do not specify this parameter, the SQL patterns are aggregated by `user`.
   * 
   * @example
   * user
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sqlPattern: 'SqlPattern',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      sqlPattern: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

