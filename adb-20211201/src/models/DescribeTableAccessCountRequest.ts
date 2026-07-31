// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableAccessCountRequest extends $dara.Model {
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-2ze627uzpkh8a8****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Sorts the query results by a specified field. The value is a JSON string. Example: `[{"Field":"TableSchema","Type":"Asc"}]`.
   * - `Field` specifies the field by which to sort. Valid values:
   *     - `TableSchema`: the name of the database to which the table belongs.
   *     - `TableName`: the table name.
   *     - `AccessCount`: the number of times the table is accessed.
   * - `Type` specifies the sort order. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > If this parameter is not specified, the results are sorted by the database name of the table in ascending order by default.
   * 
   * @example
   * [{"Field":"TableSchema","Type":"Asc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer that does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
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
   * The beginning of the time range to query, in UTC. Format: yyyy-MM-ddTHH:mm:ssZ.
   * > Only data within the last 30 days can be queried.
   * 
   * @example
   * 2022-09-25T12:10:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the table.
   * > If this parameter is left empty, the access frequency data of all tables in the cluster within the specified date range is returned.
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

