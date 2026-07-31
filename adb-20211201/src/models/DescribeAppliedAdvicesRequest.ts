// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the advice. Valid values:
   * 
   * - **INDEX**: index optimization
   * 
   * - **TIERING**: hot/cold data optimization
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
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end date of the query. The date is in the `yyyyMMdd` format.
   * 
   * @example
   * 20220824
   */
  endTime?: number;
  /**
   * @remarks
   * The keyword for the query. Fuzzy match by table name is supported.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the query results. Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * - **ja**: Japanese
   * 
   * - **zh-tw**: Traditional Chinese
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The order by which to sort the query results. The value is a JSON string. Example: `[{"Field":"SchemaName","Type":"Asc"}]`. Fields:
   * 
   * - `Field`: The field by which to sort the results. Valid values:
   * 
   *   - `SchemaName`: the database name
   * 
   *   - `TableName`: the table name
   * 
   *   - `JobStatus`: the status of the build job for the table
   * 
   *   - `SubmitTime`: the time when the advice was submitted
   * 
   *   - `Benefit`: the estimated benefit
   * 
   * - `Type`: The sort order. Valid values:
   * 
   *   - `Asc`: ascending
   * 
   *   - `Desc`: descending
   * 
   * > If you do not set this parameter, the query results are sorted by advice submission time in descending order.
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
   * The number of entries to return on each page. Valid values:
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
   * The name of the database and table. Format: **database.table**.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  /**
   * @remarks
   * The start date of the query. The date is in the `yyyyMMdd` format.
   * 
   * @example
   * 20220811
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      adviceType: 'AdviceType',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      keyword: 'Keyword',
      lang: 'Lang',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      schemaTableName: 'SchemaTableName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceType: 'string',
      DBClusterId: 'string',
      endTime: 'number',
      keyword: 'string',
      lang: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      schemaTableName: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

