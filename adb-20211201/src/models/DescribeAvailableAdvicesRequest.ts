// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The generation date of the suggestion, in the yyyyMMdd format.
   * 
   * > Data is generated after daily analysis in the early morning. Therefore, you must specify a date of T-1 or earlier to query the data. For example, if today is 20240627, you must specify 20240626 or an earlier date.
   * 
   * @example
   * 20221124
   */
  adviceDate?: number;
  /**
   * @remarks
   * The type of the suggestion. Valid values:
   * - **INDEX**: Index optimization.
   * - **TIERING**: Hot and cold data optimization.
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
   * The query keyword. Fuzzy search by table name is supported.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The display language of the suggestions. Valid values:
   * - **zh**: Simplified Chinese (default).
   * - **en**: English.
   * - **ja**: Japanese.
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The field by which to sort the query results. The value is a JSON string. Example: `[{"Field":"SchemaName","Type":"Asc"}]`. Parameters:
   * - `Field`: the sort field. Valid values:
   *     - `SchemaName`: the database name.
   *     - `TableName`: the table name.
   *     - `Benefit`: the expected optimization benefit.
   * - `Type`: the sort order. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > If this parameter is not specified, the results are sorted in descending order of the expected optimization benefit by default.
   * 
   * @example
   * [{\\"Field\\":\\"AdviceType\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. Valid values: greater than 0 and up to the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * - **30** (default)
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
   * The concatenated string of the database name and table name.
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

