// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query a list of cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * am-****************
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
   * The order in which to sort the queried information. Specify this parameter as an ordered JSON array that consists of the `Field` and `Type` fields. Example: `[{ "Field":"TableName", "Type":"Asc" }]`.
   * 
   * *   `Field` specifies the field that is used to sort the queried information. The following fields are supported: `TableName`, ColdDataSize, DataSize, PrimaryKeyIndexSize, RowCount, IndexSize, SchemaName, and PartitionCount.
   * 
   * *   `Type` specifies the sorting order. Valid values (case-insensitive):
   * 
   *     *   **Desc**: descending order.
   *     *   **Asc**: ascending order.
   * 
   * @example
   * [ { "Field":"TableName", "Type":"Asc" } ]
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
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  schemaName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemaName: 'SchemaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

