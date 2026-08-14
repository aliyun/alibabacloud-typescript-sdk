// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp183qgrwywa6****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The keyword for the query. Fuzzy search by table name is supported.
   * 
   * @example
   * you_table_name
   */
  keyword?: string;
  /**
   * @remarks
   * The sorting rule for the returned results. The value is a JSON array that is ordered by the sequence of the elements in the array. Each element consists of `Field` and `Type`. Example: `[{ "Field":"TableName", "Type":"Asc" }]`.
   * 
   * - `Field`: the field by which to sort the results. Valid values: TableName, ColdDataSize, DataSize, PrimaryKeyIndexSize, RowCount, IndexSize, SchemaName, and PartitionCount.
   * 
   * - `Type`: the sorting type. Valid values (case-insensitive):
   * 
   *   - **Desc**: descending.
   * 
   *   - **Asc**: ascending.
   * 
   * @example
   * [ { "Field":"TableName", "Type":"Asc" } ]
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
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
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * cust_pay_instruction
   */
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

