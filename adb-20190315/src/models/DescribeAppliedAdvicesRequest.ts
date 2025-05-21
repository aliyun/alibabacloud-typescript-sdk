// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppliedAdvicesRequest extends $dara.Model {
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
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of AnalyticDB for MySQL Data Warehouse Edition clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6g8w25jacm7****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyyMMdd format. The time must be in UTC.
   * 
   * @example
   * 20220824
   */
  endTime?: number;
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
   * The display language of the suggestion. Valid values:
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
   *     *   `JobStatus`: the status of the BUILD job that is triggered on the table.
   *     *   `SubmitTime`: the time when the suggestion was submitted.
   *     *   `Benefit`: the expected benefits of the applied optimization suggestion.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, optimization suggestions are sorted in descending order based on the submission time.
   * 
   * @example
   * [{"Field":"Benefit","Type":"Desc"}]
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
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyyMMdd format. The time must be in UTC.
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

