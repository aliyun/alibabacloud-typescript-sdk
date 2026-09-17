// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternCompareReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL instance.
   * 
   * This parameter is required.
   * 
   * @example
   * am-2ze1234567890****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of rows per page for token-based pagination. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * > - When you use `NextToken` for pagination, keep this parameter unchanged.
   * > - This parameter does not take effect when you use `PageNumber` and `PageSize` for pagination.
   * > - We recommend that you use `PageNumber` and `PageSize` for pagination.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * > - Do not specify this parameter for the first query. For subsequent queries, pass in the `NextToken` value returned by the previous query.
   * > - Do not use this parameter together with `PageNumber` or `PageSize`.
   * > - Use `PageNumber` and `PageSize` for pagination.
   * 
   * @example
   * djE6Mjo1MA
   */
  nextToken?: string;
  /**
   * @remarks
   * Sorts the query results by a specified field. The value is a JSON array string, for example, `[{"Field":"CreatedAt","Type":"Desc"}]`. The array can contain only one object. Fields:
   * 
   * - `Field`: the field by which to sort. Valid values:
   *     - `CreatedAt`: the time when the report was created.
   *     - `StartTime`: the start time of time range 1.
   *     - `CompareStartTime`: the start time of time range 2.
   * - `Type`: the sort order. This value is case-insensitive. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > If you do not specify this parameter, the results are sorted by `CreatedAt` in descending order by default.
   * 
   * @example
   * [{"Field":"CreatedAt","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1.
   * 
   * Default value: 1.
   * 
   * > Use this parameter together with `PageSize`. If you specify this parameter, `NextToken` must be empty.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page. Valid values: 1 to 100.
   * 
   * Default value: 50.
   * 
   * > Use this parameter together with `PageNumber`. If you specify this parameter, `NextToken` must be empty.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

