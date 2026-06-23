// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to find information about all clusters in the destination region, including the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1190tj036am****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the query.
   * 
   * @example
   * 6c69d508-f05f-4c74-857c-d982b7e7e79f
   */
  initialQueryId?: string;
  /**
   * @remarks
   * The database account.
   * 
   * @example
   * user
   */
  initialUser?: string;
  /**
   * @remarks
   * The keyword for the query.
   * 
   * @example
   * join
   */
  keyword?: string;
  /**
   * @remarks
   * The column to use for sorting. Valid values:
   * 
   * - elapsed: The total running time.
   * 
   * - written_rows: The number of rows written.
   * 
   * - read_rows: The number of rows read.
   * 
   * - memory_usage: The amount of memory used.
   * 
   * @example
   * elapsed
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be greater than 0 and cannot exceed the maximum value of the Integer data type. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (Default)
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
   * The shortest query duration. The minimum value is **1000**. The default value is **1000**. The unit is milliseconds. The response returns queries that run longer than this duration.
   * 
   * @example
   * 500
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to find the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      initialQueryId: 'InitialQueryId',
      initialUser: 'InitialUser',
      keyword: 'Keyword',
      order: 'Order',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryDurationMs: 'QueryDurationMs',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      initialQueryId: 'string',
      initialUser: 'string',
      keyword: 'string',
      order: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryDurationMs: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

