// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. Specify the date in the yyyyMMdd format. The date must be in UTC.
   * 
   * >  Suggestions are generated after analysis after midnight every day. You must specify a date that is at least one day earlier than the current date. For example, if the current date is 20240627, you must specify 20240626 or an earlier date.
   * 
   * This parameter is required.
   * 
   * @example
   * 20221124
   */
  adviceDate?: number;
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * 
   * *   **INDEX**: index optimization.
   * *   **TIERING**: hot and cold data optimization.
   * 
   * @example
   * Index
   */
  adviceType?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of Data Warehouse Edition (V3.0) clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp198m028ih55****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword that is used to query information by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The display language of the suggestion. Default value: zh. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: traditional Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"SchemaName","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `SchemaName`: the name of the database.
   *     *   `TableName`: the name of the table.
   *     *   `Benefit`: the expected benefits of the applied optimization suggestion.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, the query results are sorted in descending order based on the Benefit field.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The number of the page to return. The value must be an integer that is greater than 0. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 30. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
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
   * The name of the table in the **DatabaseName.TableName** format.
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

