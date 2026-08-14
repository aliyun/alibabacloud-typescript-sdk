// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the advice was generated, in the yyyyMMdd format and in UTC.
   * 
   * > Advice is generated daily after an early-morning analysis. To query for advice, you must specify a date that is at least one day prior to the current date (T-1). For example, if the current date is 20240627, you must specify 20240626 or an earlier date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20221124
   */
  adviceDate?: number;
  /**
   * @remarks
   * The type of advice. Valid values:
   * 
   * - **INDEX**: index optimization.
   * 
   * - **TIERING**: data tiering optimization.
   * 
   * @example
   * Index
   */
  adviceType?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) API to query for the IDs of Data Warehouse Edition clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp198m028ih55****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The language for the advice. Valid values:
   * 
   * - **zh**: simplified Chinese (default)
   * 
   * - **en**: English
   * 
   * - **ja**: Japanese
   * 
   * - **zh-tw**: traditional Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The sort order of the query results. The value is a JSON string, for example, `[{"Field":"SchemaName","Type":"Asc"}]`. The JSON string contains the following parameters:
   * 
   * - `Field`: the field to sort by. Valid values:
   * 
   *   - `SchemaName`: The database name.
   * 
   *   - `TableName`: The table name.
   * 
   *   - `Benefit`: The expected benefit.
   * 
   * - `Type`: the sort order. Valid values:
   * 
   *   - `Asc`: ascending order.
   * 
   *   - `Desc`: descending order.
   * 
   * > By default, results are sorted by expected benefit in descending order.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) API to query for the IDs of available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The concatenation of the database name and the table name.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  static names(): { [key: string]: string } {
    return {
      adviceDate: 'AdviceDate',
      adviceType: 'AdviceType',
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaTableName: 'SchemaTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceDate: 'number',
      adviceType: 'string',
      DBClusterId: 'string',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

