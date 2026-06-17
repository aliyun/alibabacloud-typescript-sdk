// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersZonalRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag \\`n\\`. You can filter clusters by specifying up to 20 tags. The \\`n\\` must be a unique and consecutive integer that starts from 1. \\`Tag.n.Key\\` corresponds to \\`Tag.n.Value\\`.
   * 
   * @example
   * MySQL
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag key.
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

export class DescribeDBClustersZonalRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider.
   * 
   * @example
   * AlibabaCloud
   */
  cloudProvider?: string;
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
   * The description of the cluster. Fuzzy search is supported.
   * 
   * @example
   * pc-****************
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID. To specify multiple cluster IDs, separate them with commas (,).
   * 
   * @example
   * pc-****************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The status of the cluster.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node ID. You can specify multiple node IDs. Separate them with commas (,).
   * 
   * @example
   * pi-***************
   */
  DBNodeIds?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - MySQL
   * 
   * - PostgreSQL
   * 
   * - Oracle
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
   * The query mode. Set the value to \\`Simple\\`. In this mode, only the basic metadata of the clusters is returned.
   * 
   * @example
   * Simple
   */
  describeType?: string;
  /**
   * @remarks
   * Specifies whether the cluster has expired. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  expired?: string;
  /**
   * @remarks
   * The maximum number of entries to return for the current request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A token used to retrieve the next page of results. Set this parameter to the \\`NextToken\\` value returned from the previous API call. You do not need to specify this parameter for the first call.
   * 
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: 1.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 30, 50, and 100.
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - Postpaid: pay-as-you-go
   * 
   * - Prepaid: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * Filters for clusters created in the last N days. Valid values: 0 to 15.
   * 
   * @example
   * 7
   */
  recentCreationInterval?: number;
  /**
   * @remarks
   * Filters for clusters that expire in N days. Valid values: 0 to 15.
   * 
   * @example
   * 6
   */
  recentExpirationInterval?: number;
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
   * The list of tags.
   */
  tag?: DescribeDBClustersZonalRequestTag[];
  static names(): { [key: string]: string } {
    return {
      cloudProvider: 'CloudProvider',
      connectionString: 'ConnectionString',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeIds: 'DBNodeIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      describeType: 'DescribeType',
      expired: 'Expired',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
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
      cloudProvider: 'string',
      connectionString: 'string',
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBNodeIds: 'string',
      DBType: 'string',
      DBVersion: 'string',
      describeType: 'string',
      expired: 'string',
      maxResults: 'number',
      nextToken: 'string',
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
      tag: { 'type': 'array', 'itemType': DescribeDBClustersZonalRequestTag },
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

