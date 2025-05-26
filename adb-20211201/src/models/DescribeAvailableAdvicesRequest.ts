// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the suggestion is generated. Specify the date in the yyyyMMdd format.
   * 
   * >  Suggestions are generated after analysis after midnight every day. You must specify a date that is at least one day earlier than the current date. For example, if the current date is 20240627, you must specify 20240626 or an earlier date.
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
   * INDEX
   */
  adviceType?: string;
  /**
   * @remarks
   * The cluster ID.
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
   * The display language of suggestions. Valid values:
   * 
   * *   **zh** (default): simplified Chinese.
   * *   **en**: English.
   * *   **ja**: Japanese.
   * *   **zh-tw**: traditional Chinese.
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
   * [{\\"Field\\":\\"AdviceType\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
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
   * The name of the table in the DatabaseName.TableName format.
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

