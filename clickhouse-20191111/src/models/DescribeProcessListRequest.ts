// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProcessListRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query all clusters in the specified region, including their cluster IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1190tj036am****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The ID of the query statement.
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
   * The query keyword.
   * 
   * @example
   * join
   */
  keyword?: string;
  /**
   * @remarks
   * The column by which to sort the results. Valid values:
   * - elapsed: cumulative execution time
   * - written_rows: number of written rows
   * - read_rows: number of read rows
   * - memory_usage: memory usage
   * 
   * @example
   * elapsed
   */
  order?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values: integers greater than 0 and less than or equal to the maximum value of the Integer data type. Default value: 1.
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
   * The minimum query duration. Minimum value: **1000**. Default value: **1000**. Unit: milliseconds. The response returns queries whose duration exceeds this value.
   * 
   * @example
   * 500
   */
  queryDurationMs?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/170875.html) operation to query the region ID.
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

