// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of suggestions to return. Valid values:
   * 
   * - **INDEX**: index optimization.
   * 
   * - **TIERING**: data tiering.
   * 
   * @example
   * INDEX
   */
  adviceType?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * > To query the IDs of AnalyticDB for MySQL Data Warehouse Edition clusters, call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end date of the query time range, in yyyyMMdd format and in UTC.
   * 
   * @example
   * 20220824
   */
  endTime?: number;
  /**
   * @remarks
   * A keyword for performing a fuzzy search by table name.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the suggestions. Valid values:
   * 
   * - **zh**: Simplified Chinese (default)
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
   * The sort order for the results. The value must be a JSON string, such as `[{"Field":"SchemaName","Type":"Asc"}]`. The JSON string contains the following fields:
   * 
   * - `Field`: The field by which to sort the results. Valid values:
   * 
   *   - `SchemaName`: schema name.
   * 
   *   - `TableName`: table name.
   * 
   *   - `JobStatus`: Status of the table build job.
   * 
   *   - `SubmitTime`: Time when the suggestion was created.
   * 
   *   - `Benefit`: Expected optimization benefit.
   * 
   * - `Type`: the sort order. Valid values:
   * 
   *   - `Asc`: ascending order.
   * 
   *   - `Desc`: descending order.
   * 
   * > If this parameter is not specified, the results are sorted by creation time (`SubmitTime`) in descending order by default.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
   */
  order?: string;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the integer data type. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return per page. Valid values:
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
   * > To query available region IDs, call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The schema name and table name. The value must be in the **`<schema>.<table>`** format.
   * 
   * @example
   * tpch.lineitem
   */
  schemaTableName?: string;
  /**
   * @remarks
   * The start date of the query time range, in yyyyMMdd format and in UTC.
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

