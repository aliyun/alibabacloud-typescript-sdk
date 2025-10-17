// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode extends $dara.Model {
  /**
   * @remarks
   * The specifications of the node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **Writer**: primary node
   * *   **Reader**: read-only node
   * *   **ColumnReader**: column store read-only node
   * *   **AI**: AI node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * Indicates whether the hot standby feature is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * OFF
   */
  hotReplicaMode?: string;
  /**
   * @remarks
   * Indicates whether the In-Memory Column Index (IMCI) feature is enabled. Valid values:
   * 
   * *   **ON**
   * *   **OFF**
   * 
   * @example
   * OFF
   */
  imciSwitch?: string;
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
   * Indicates whether the serverless feature is enabled for the node.
   * 
   * *   **ON** indicates that the serverless feature is enabled.
   * *   No value is returned if the serverless feature is disabled.
   * 
   * @example
   * ON
   */
  serverless?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      hotReplicaMode: 'HotReplicaMode',
      imciSwitch: 'ImciSwitch',
      regionId: 'RegionId',
      serverless: 'Serverless',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      hotReplicaMode: 'string',
      imciSwitch: 'string',
      regionId: 'string',
      serverless: 'string',
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

export class DescribeDBClustersResponseBodyItemsDBClusterDBNodes extends $dara.Model {
  DBNode?: DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode[];
  static names(): { [key: string]: string } {
    return {
      DBNode: 'DBNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNode: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterDBNodesDBNode },
    };
  }

  validate() {
    if(Array.isArray(this.DBNode)) {
      $dara.Model.validateArray(this.DBNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItemsDBClusterTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * MySQL
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class DescribeDBClustersResponseBodyItemsDBClusterTags extends $dara.Model {
  tag?: DescribeDBClustersResponseBodyItemsDBClusterTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBClusterTagsTag },
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

export class DescribeDBClustersResponseBodyItemsDBCluster extends $dara.Model {
  /**
   * @remarks
   * The type of the AI node. Valid values:
   * 
   * *   SearchNode: search node
   * *   DLNode: AI node
   * 
   * Enumeration values:
   * 
   * *   SearchNode | DLNode: both
   * *   DLNode: AI node
   * *   SearchNode: search node
   * 
   * @example
   * SearchNode
   */
  aiType?: string;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **Normal**: Cluster Edition
   * *   **Basic**: Single Node Edition
   * *   **Archive**: X-Engine Edition
   * *   **NormalMultimaster**: Multi-master Cluster (Database/Table) Edition
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 1
   */
  cpuCores?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * GDN-1
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
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
   * The state of the cluster.
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
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 2
   */
  DBNodeNumber?: number;
  /**
   * @remarks
   * The information about the nodes.
   */
  DBNodes?: DescribeDBClustersResponseBodyItemsDBClusterDBNodes;
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
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * Indicates whether the cluster is protected from deletion. Valid values:
   * 
   * *   **0**: The cluster is not protected from deletion.
   * *   **1**: The cluster is protected from deletion.
   * 
   * >  You cannot delete clusters that are protected from deletion.
   * 
   * @example
   * 0
   */
  deletionLock?: number;
  /**
   * @remarks
   * The database engine of the cluster.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * >  A specific value is returned only for subscription (**Prepaid**) clusters. For pay-as-you-go (**Postpaid**) clusters, no value is returned.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  A specific value is returned only for subscription (**Prepaid**) clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * Indicates whether the hot standby storage cluster feature is enabled. Valid values:
   * 
   * *   ON
   * *   OFF
   * 
   * @example
   * OFF
   */
  hotStandbyCluster?: string;
  /**
   * @remarks
   * The lock state of the cluster. Valid values:
   * 
   * *   **Unlock**: The cluster is unlocked.
   * *   **ManualLock**: The cluster is manually locked.
   * *   **LockByExpiration**: The cluster is locked due to cluster expiration.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The memory size for local operations. Unit: MB.
   * 
   * @example
   * 2048
   */
  memorySize?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Prepaid
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
   * The memory size for distributed operations. Unit: MB.
   * 
   * @example
   * 3612
   */
  remoteMemorySize?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  searchStorageUsed?: number;
  /**
   * @remarks
   * Indicates whether the cluster is a serverless cluster. **AgileServerless** indicates the cluster is a serverless cluster. No value is returned for a common cluster.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage billing method of the cluster. Valid values:
   * 
   * *   **Postpaid**: pay-as-you-go
   * *   **Prepaid**: subscription
   * 
   * @example
   * Prepaid
   */
  storagePayType?: string;
  /**
   * @remarks
   * The storage that is billed based on the subscription billing method. Unit: bytes.
   * 
   * @example
   * 50
   */
  storageSpace?: number;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * essdautopl
   */
  storageType?: string;
  /**
   * @remarks
   * The used storage. Unit: bytes.
   * 
   * @example
   * 3009413120
   */
  storageUsed?: number;
  /**
   * @remarks
   * Indicates whether multi-zone data consistency is enabled for the cluster. Valid values:
   * 
   * *   **ON**: Multi-zone data consistency is enabled. For Standard Edition clusters of Multi-zone Edition, this value is returned.
   * *   **OFF**: Multi-zone data consistency is disabled.
   * 
   * @example
   * ON
   */
  strictConsistency?: string;
  /**
   * @remarks
   * The specification type of the compute node. Valid values:
   * 
   * *   **Exclusive**: dedicated.
   * *   **General**: general-purpose.
   * 
   * @example
   * Exclusive
   */
  subCategory?: string;
  /**
   * @remarks
   * The information about the tags.
   */
  tags?: DescribeDBClustersResponseBodyItemsDBClusterTags;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID of the cluster.
   * 
   * @example
   * vpc-****************
   */
  vpcId?: string;
  /**
   * @remarks
   * The vSwitch ID of the cluster.
   * 
   * @example
   * vsw-***************
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      aiType: 'AiType',
      category: 'Category',
      cpuCores: 'CpuCores',
      createTime: 'CreateTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterNetworkType: 'DBClusterNetworkType',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodeNumber: 'DBNodeNumber',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      deletionLock: 'DeletionLock',
      engine: 'Engine',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      hotStandbyCluster: 'HotStandbyCluster',
      lockMode: 'LockMode',
      memorySize: 'MemorySize',
      payType: 'PayType',
      regionId: 'RegionId',
      remoteMemorySize: 'RemoteMemorySize',
      resourceGroupId: 'ResourceGroupId',
      searchStorageUsed: 'SearchStorageUsed',
      serverlessType: 'ServerlessType',
      storagePayType: 'StoragePayType',
      storageSpace: 'StorageSpace',
      storageType: 'StorageType',
      storageUsed: 'StorageUsed',
      strictConsistency: 'StrictConsistency',
      subCategory: 'SubCategory',
      tags: 'Tags',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiType: 'string',
      category: 'string',
      cpuCores: 'string',
      createTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterNetworkType: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodeNumber: 'number',
      DBNodes: DescribeDBClustersResponseBodyItemsDBClusterDBNodes,
      DBType: 'string',
      DBVersion: 'string',
      deletionLock: 'number',
      engine: 'string',
      expireTime: 'string',
      expired: 'string',
      hotStandbyCluster: 'string',
      lockMode: 'string',
      memorySize: 'string',
      payType: 'string',
      regionId: 'string',
      remoteMemorySize: 'string',
      resourceGroupId: 'string',
      searchStorageUsed: 'number',
      serverlessType: 'string',
      storagePayType: 'string',
      storageSpace: 'number',
      storageType: 'string',
      storageUsed: 'number',
      strictConsistency: 'string',
      subCategory: 'string',
      tags: DescribeDBClustersResponseBodyItemsDBClusterTags,
      vpcId: 'string',
      vswitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.DBNodes && typeof (this.DBNodes as any).validate === 'function') {
      (this.DBNodes as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClustersResponseBodyItems extends $dara.Model {
  DBCluster?: DescribeDBClustersResponseBodyItemsDBCluster[];
  static names(): { [key: string]: string } {
    return {
      DBCluster: 'DBCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBCluster: { 'type': 'array', 'itemType': DescribeDBClustersResponseBodyItemsDBCluster },
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

export class DescribeDBClustersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the clusters.
   */
  items?: DescribeDBClustersResponseBodyItems;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 12
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of clusters returned per page.
   * 
   * @example
   * 5
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9B7BFB11-C077-4FE3-B051-F69CEB******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 16
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
      items: DescribeDBClustersResponseBodyItems,
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

