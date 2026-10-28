// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkSQLDiagnosisListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL Data Lakehouse Edition (3.0) clusters in a specific region, including the cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2zez35ww415xjwk5
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The maximum start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-11-28 23:00:00
   */
  maxStartTime?: string;
  /**
   * @remarks
   * The minimum start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-11-28 22:00:00
   */
  minStartTime?: string;
  /**
   * @remarks
   * Sorts the query results by a specified field. The value must be a JSON string. Example: `[{"Field":"MaxExclusiveTime","Type":"Asc"}]`. Parameters in the JSON string:
   * - `Field`: the sort field. Valid values:
   *     - `MaxExclusiveTime`: the maximum execution time.
   *     - `PeakMemory`: the peak memory usage.
   *     - `QueryStartTime`: the query start time.
   *     - `QueryWallclockTime`: the query execution time.
   * 
   * - `Type`: the sort order. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > - If this parameter is not specified, the results are sorted in ascending order by the `MaxExclusiveTime` field by default.
   * 
   * @example
   * [{\\"Field\\":\\"QueryStartTime\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The unique ID of the code block in the Spark job.
   * 
   * @example
   * 123
   */
  statementId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maxStartTime: 'MaxStartTime',
      minStartTime: 'MinStartTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      statementId: 'StatementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maxStartTime: 'string',
      minStartTime: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      statementId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

