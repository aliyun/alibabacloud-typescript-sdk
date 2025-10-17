// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersZonalRequestTag extends $dara.Model {
  /**
   * @example
   * MySQL
   */
  key?: string;
  /**
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
   * @example
   * AlibabaCloud
   */
  cloudProvider?: string;
  /**
   * @example
   * ********.rwlb.polardb-pg-public.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @example
   * pc-****************
   */
  DBClusterDescription?: string;
  /**
   * @example
   * pc-****************
   */
  DBClusterIds?: string;
  /**
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @example
   * pi-***************
   */
  DBNodeIds?: string;
  /**
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @example
   * Simple
   */
  describeType?: string;
  /**
   * @example
   * true
   */
  expired?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 212db86sca4384811e0b5e8707e******
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @example
   * 7
   */
  recentCreationInterval?: number;
  /**
   * @example
   * 6
   */
  recentExpirationInterval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-**********
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
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

