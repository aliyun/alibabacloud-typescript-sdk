// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of a tag used for filtering. You can specify up to 20 tags. The `n` in `Tag.n.Key` indicates the tag number and must be a consecutive integer starting from 1.
   * 
   * > The tag key cannot exceed 128 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * MySQL
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * > The tag value cannot exceed 128 characters in length and cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * 5.6
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The database endpoint.
   * 
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The cluster description. Fuzzy search is supported.
   * 
   * @example
   * pc-****************
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The IDs of one or more clusters. Separate multiple IDs with a comma.
   * 
   * @example
   * pc-****************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The cluster status. For more information, see [Cluster state table](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The IDs of one or more nodes. Separate multiple IDs with a comma.
   * 
   * @example
   * pi-***************
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database version.
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The query mode. Set the value to Simple to return only the basic metadata of clusters.
   * 
   * > If you do not specify this parameter, the operation returns detailed information about the clusters.
   * 
   * @example
   * Simple
   */
  describeType?: string;
  /**
   * @remarks
   * Specifies whether the cluster has expired. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * @example
   * true
   */
  expired?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0. Default value: **1**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **30**, **50**, and **100**.
   * 
   * Default value: **30**.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Filters the query to return only clusters created within the specified number of days. Valid values: 0 to 15.
   * 
   * @example
   * 7
   */
  recentCreationInterval?: number;
  /**
   * @remarks
   * Filters the query to return only clusters that will expire within the specified number of days. Valid values: 0 to 15.
   * 
   * @example
   * 6
   */
  recentExpirationInterval?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags used to filter clusters.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      describeType: 'DescribeType',
      expired: 'Expired',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      payType: 'PayType',
      recentCreationInterval: 'RecentCreationInterval',
      recentExpirationInterval: 'RecentExpirationInterval',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBNodeIds: 'string',
      DBType: 'string',
      DBVersion: 'string',
      describeType: 'string',
      expired: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      payType: 'string',
      recentCreationInterval: 'number',
      recentExpirationInterval: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

