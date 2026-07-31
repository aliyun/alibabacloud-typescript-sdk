// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailableAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The date when the advice was generated, in the `yyyyMMdd` format.
   * 
   * > Advice is generated daily. To query for advice, specify a date at least one day before the current date. For example, if you query on June 27, 2024, set this parameter to `20240626` or an earlier date.
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
   * - **TIERING**: hot and cold data tiering.
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
   * The keyword for a fuzzy search on table names.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The display language for the advice. Valid values:
   * 
   * - **zh**: Simplified Chinese (default).
   * 
   * - **en**: English.
   * 
   * - **ja**: Japanese.
   * 
   * - **zh-tw**: Traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the sort order for the results. The value is a JSON string. Example: `[{"Field":"SchemaName","Type":"Asc"}]`. The JSON string contains the following key-value pairs:
   * 
   * - `Field`: the field to sort by. Valid values:
   * 
   *   - `SchemaName`: the database name.
   * 
   *   - `TableName`: the table name.
   * 
   *   - `Benefit`: the expected benefit.
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
   * [{\\"Field\\":\\"AdviceType\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: 1.
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
   * A concatenation of the database name and the table name.
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

