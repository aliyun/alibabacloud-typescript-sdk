// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL clusters in a specific region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The sorting rule for the query results. The value is a JSON string. Example: `[{"Field":"TableSchema","Type":"Asc"}]`. The JSON string contains the following fields:
   * 
   * - `Field`: The field used for sorting. Valid values:
   * 
   *   - `TableSchema`: The name of the database.
   * 
   *   - `TableName`: The name of the table.
   * 
   *   - `AccessCount`: The number of times the table was accessed.
   * 
   * - `Type`: The sorting type. Valid values:
   * 
   *   - `Asc`: Ascending order.
   * 
   *   - `Desc`: Descending order.
   * 
   * > If you do not specify this parameter, the results are sorted in ascending order by the database name.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The value must be a positive integer. Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the available regions and zones of AnalyticDB for MySQL, including the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The date to query. Use the *yyyy-MM-dd* format. The time is in UTC.
   * 
   * > You can query data from the last 30 days only.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the target table.
   * 
   * > If you leave this parameter empty, data on the access frequency of all tables in the cluster for the specified date is returned.
   * 
   * @example
   * CUSTOMER
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      startTime: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

