// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesRequest extends $dara.Model {
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
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end date for querying suggestions, in the yyyyMMdd format.
   * 
   * @example
   * 20220824
   */
  endTime?: number;
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
   * The display language for the suggestions. Valid values:
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
   * The field by which to sort the query results. The value is a JSON string, such as [{"Field":"SchemaName","Type":"Asc"}].
   * - `Field`: the sort field. Valid values:
   *     - `SchemaName`: the database name.
   *     - `TableName`: the table name.
   *     - `JobStatus`: the status of the table build task.
   *     - `SubmitTime`: the time when the suggestion was issued.
   *     - `Benefit`: the expected optimization benefit.
   * - `Type`: the sort order. Valid values:
   *     - `Asc`: ascending order.
   *     - `Desc`: descending order.
   * 
   * > If this parameter is not specified, the results are sorted in descending order by the time when the optimization suggestions were issued.
   * 
   * @example
   * [{\\"Field\\":\\"AdviceType\\",\\"Type\\":\\"Desc\\"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and no more than the maximum value of the Integer data type. Default value: 1.
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
   * The database name and table name. Format: **database.table**.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  /**
   * @remarks
   * The start date for querying suggestions, in the yyyyMMdd format.
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

