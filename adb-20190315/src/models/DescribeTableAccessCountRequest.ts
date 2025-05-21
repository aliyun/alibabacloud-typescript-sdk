// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the details of all AnalyticDB for MySQL clusters within a specified region, including cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`.
   * 
   * *   `Field` indicates the field that is used to sort the retrieved entries. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` indicates the sorting method. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If this parameter is not specified, query results are sorted in ascending order of the database to which a specific table belongs.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: **1**.
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
   * The ID of the region.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the regions and zones supported by AnalyticDB for MySQL, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The date to query. Specify the time in the *yyyy-MM-dd* format. The time must be in UTC.
   * 
   * >  Only data for the last 30 days can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-08-30
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the specific table.
   * 
   * >  If this parameter is not specified, the number of accesses to all tables within the specified cluster for a specified date is returned.
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

