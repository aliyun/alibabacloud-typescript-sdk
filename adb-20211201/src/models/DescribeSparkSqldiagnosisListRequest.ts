// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSparkSQLDiagnosisListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the information about all AnalyticDB for MySQL Data Lakehouse Edition clusters within a region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2zez35ww415xjwk5
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The latest start time.
   * 
   * @example
   * 2024-11-28 23:00:00
   */
  maxStartTime?: string;
  /**
   * @remarks
   * The earliest start time.
   * 
   * @example
   * 2024-11-28 22:00:00
   */
  minStartTime?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"MaxExclusiveTime","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `MaxExclusiveTime`: the maximum execution duration.
   *     *   `PeakMemory`: the peak memory.
   *     *   `QueryStartTime`: the start time of the query.
   *     *   `QueryWallclockTime`: the execution duration of the query.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, query results are sorted by `MaxExclusiveTime` in ascending order.
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
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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

