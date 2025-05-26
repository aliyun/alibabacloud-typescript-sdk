// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2ze627uzpkh8a8****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON string format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`. Fields in the request parameter:
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, query results are sorted in ascending order based on the database and the table.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **10** (default)
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  Only data within the last 30 days can be queried.
   * 
   * @example
   * 2022-09-25T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * >  If you leave this parameter empty, the number of accesses to all tables in the cluster on a date is returned.
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

