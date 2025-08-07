// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersWithBackupsResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-05-09T09:33:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The network type of the cluster.
   * 
   * @example
   * VPC
   */
  DBClusterNetworkType?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   Creating: The cluster is being created.
   * *   Running: The cluster is running.
   * *   Deleting: The cluster is being released.
   * *   Rebooting: The cluster is restarting.
   * *   DBNodeCreating: The node is being added.
   * *   DBNodeDeleting: The node is being deleted.
   * *   ClassChanging: The specifications of the node are being changed.
   * *   NetAddressCreating: The network connection is being created.
   * *   NetAddressDeleting: The network connection is being deleted.
   * *   NetAddressModifying: The network connection is being modified.
   * *   Deleted: The cluster has been released.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * polar.mysql.x4.medium
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The time when the cluster was deleted.
   * 
   * @example
   * 2022-05-12T03:25:37Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster is locked and can be deleted. Valid values:
   * 
   * *   **0**: The cluster is not locked and can be deleted.
   * *   **1**: The cluster is locked and cannot be deleted.
   * 
   * @example
   * 0
   */
  deletionLock?: number;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The time when the cluster expires.
   * 
   * > A specific value will be returned only for subscription clusters. For pay-as-you-go clusters, an empty string will be returned.
   * 
   * @example
   * 2022-09-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired.
   * 
   * > A specific value will be returned only for subscription clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Indicates whether the cluster was released. Valid values:
   * 
   * *   1: released
   * *   0: not released
   * 
   * @example
   * 1
   */
  isDeleted?: number;
  /**
   * @remarks
   * The state of the cluster lock. Valid values:
   * 
   * *   **Unlock**: The cluster is not locked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is automatically locked after the cluster expires.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go.
   * *   **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC ID of the cluster.
   * 
   * @example
   * vpc-******************
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone in which the instance is located.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deletedTime: 'DeletedTime',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      isDeleted: 'IsDeleted',
      lockMode: 'LockMode',
      payType: 'PayType',
      regionId: 'RegionId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBType: 'string',
      DBVersion: 'string',
      deletedTime: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      isDeleted: 'number',
      lockMode: 'string',
      payType: 'string',
      regionId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBodyItems extends $dara.Model {
  DBCluster?: DescribeDBClustersWithBackupsResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersWithBackupsResponseBodyItemsDBCluster },
    };
  }

  validate() {
    if(Array.isArray(this.DBCluster)) {
      $dara.Model.validateArray(this.DBCluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersWithBackupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the cluster.
   */
  items?: DescribeDBClustersWithBackupsResponseBodyItems;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters returned per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F8529AA2-522F-4B30-B80B-8F7D39******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDBClustersWithBackupsResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

