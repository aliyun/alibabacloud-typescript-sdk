// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcessivePrimaryKeysRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u8c0mgfg58****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2023-05-15T07:15Z
   */
  endTime?: string;
  /**
   * @remarks
   * The display language of the suggestion. Valid values:
   * 
   * *   **zh (default)**: simplified Chinese.
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
   * The order by which to sort query results. Specify the parameter value in the JSON format. Example: `[{"Field":"TableSchema","Type":"Asc"}]`.
   * 
   * *   `Field` specifies the field by which to sort the query results. Valid values:
   * 
   *     *   `TableSchema`: the name of the database to which the table belongs.
   *     *   `TableName`: the name of the table.
   *     *   `AccessCount`: the number of accesses to the table.
   * 
   * *   `Type` specifies the sorting order. Valid values:
   * 
   *     *   `Asc`: ascending order.
   *     *   `Desc`: descending order.
   * 
   * >  If you do not specify this parameter, query results are sorted in ascending order based on the database and the table.
   * 
   * @example
   * [{"Field":"TableName","Type":"Desc"}]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time must be in UTC.
   * 
   * @example
   * 2021-09-30T00:10Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      lang: 'Lang',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      lang: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

