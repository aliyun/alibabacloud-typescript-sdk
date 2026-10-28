// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the DescribeDBClusters operation to query the IDs of all clusters in a specified region.
   * [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html)
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1ej1nq9n6****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies the sorting of query results by a specified field. The format is a JSON character string, such as `[{"Field":"Pattern","Type":"Asc"}]`. Parameters:
   * - Field: the sorting field. Valid values:
   *     - Pattern: SQL pattern.
   *     - AccessIP: client IP address.
   *     - User: username.
   *     - QueryCount: total number of queries.
   *     - AvgPeakMemory: average peak memory. Unit: KB.
   *     - MaxPeakMemory: Peak Volume memory. Unit: KB.
   *     - AvgCpuTime: average computing duration. Unit: milliseconds.
   *     - MaxCpuTime: maximum computing duration. Unit: milliseconds.
   *     - AvgStageCount: average number of stages.
   *     - MaxStageCount: maximum number of stages.
   *     - AvgTaskCount: average number of tasks.
   *     - MaxTaskCount: maximum number of tasks.
   *     - AvgScanSize: average scan size. Unit: KB.
   *     - MaxScanSize: maximum scan size. Unit: KB.
   * 
   * - Type: the sorting method. Valid values:
   *     - Asc: ascending sorting.
   *     - Desc: descending sorting.
   * 
   * > - If no Settings are specified for this parameter, the results are sorted in ascending order by the Pattern field by default.
   * - To perform sorting by the AccessIP field, you must set the Type parameter to accessip. To perform sorting by the User field, you must leave the Type parameter empty or set it to user.
   * 
   * @example
   * [{"Field":"Pattern","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Valid values: integers greater than 0 and no greater than the maximum value of the Integer type.
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
   * 30
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
   * The keyword that the SQL pattern must contain.
   * > If this parameter is not specified, the details of all SQL patterns for the cluster on the date specified by the StartTime parameter are returned by default.
   * 
   * @example
   * SELECT
   */
  sqlPattern?: string;
  /**
   * @remarks
   * The start date of the query. The time is in UTC and formatted as yyyy-MM-dd.
   * > You can only query data within the last 30 days.
   * 
   * @example
   * 2022-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * Aggregates SQL patterns by a specified dimension. Valid values:
   *  - user: aggregates by user.
   *  - accessip: aggregates by access IP address.
   * 
   * > If this parameter is not specified, SQL patterns are aggregated by user by default.
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

