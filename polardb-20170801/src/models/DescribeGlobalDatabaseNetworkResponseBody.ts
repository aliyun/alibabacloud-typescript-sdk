// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworkResponseBodyConnections extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * abc.polardb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port number of the connection string.
   * 
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes extends $dara.Model {
  /**
   * @remarks
   * The time when the node was created.
   * 
   * @example
   * 2020-03-23T21:35:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * - **Writer**: the primary node
   * 
   * - **Reader**: a read-only node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * - **Creating**: The node is being created.
   * 
   * - **Running**: The node is running.
   * 
   * - **Deleting**: The node is being deleted.
   * 
   * - **Rebooting**: The node is being restarted.
   * 
   * - **ClassChanging**: The node type is being changed.
   * 
   * - **NetAddressCreating**: A network connection is being created.
   * 
   * - **NetAddressDeleting**: A network connection is being deleted.
   * 
   * - **NetAddressModifying**: A network connection is being modified.
   * 
   * - **MinorVersionUpgrading**: The minor version is being upgraded.
   * 
   * - **Maintaining**: The cluster is being maintained.
   * 
   * - **Switching**: A failover is in progress.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. In the event of a failover, the system promotes a read-only node to the primary node. A larger value indicates a higher priority. Each read-only node is assigned a failover priority. Valid values: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum I/O operations per second (IOPS).
   * 
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeId: 'DBNodeId',
      DBNodeRole: 'DBNodeRole',
      DBNodeStatus: 'DBNodeStatus',
      failoverPriority: 'FailoverPriority',
      maxConnections: 'MaxConnections',
      maxIOPS: 'MaxIOPS',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeId: 'string',
      DBNodeRole: 'string',
      DBNodeStatus: 'string',
      failoverPriority: 'number',
      maxConnections: 'number',
      maxIOPS: 'number',
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

export class DescribeGlobalDatabaseNetworkResponseBodyDBClusters extends $dara.Model {
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * `Normal`: Cluster Edition `Basic`: Single-node Edition `Archive`: X-Engine Edition `NormalMultimaster`: Multi-master Cluster Edition `SENormal`: Standard Edition
   * 
   * > - Single-node Edition is not supported for PolarDB for PostgreSQL clusters that run PostgreSQL 11.
   * >
   * > - Standard Edition is supported for PolarDB for MySQL clusters that run MySQL 8.0 or 5.7 and for PolarDB for PostgreSQL clusters that run PostgreSQL 14.
   * >
   * > - X-Engine Edition and Multi-master Cluster Edition are supported only for PolarDB for MySQL clusters that run MySQL 8.0.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster. For more information, see [Cluster statuses](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The details of the nodes in the cluster.
   */
  DBNodes?: DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes[];
  /**
   * @remarks
   * The database engine. Only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for subscription clusters. An empty string is returned for pay-as-you-go clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - **true**: The cluster has expired.
   * 
   * - **false**: The cluster has not expired.
   * 
   * > This parameter is returned only for subscription clusters.
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The billing method of the cluster. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * 
   * - **Prepaid**: subscription.
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
   * The replication lag for cross-region replication between the primary and standby clusters. Unit: seconds.
   * 
   * @example
   * 1
   */
  replicaLag?: string;
  /**
   * @remarks
   * The role of the cluster in the GDN. Valid values:
   * 
   * - **primary**: the primary cluster
   * 
   * - **standby**: a standby cluster
   * 
   * > A GDN consists of one primary cluster and up to four standby clusters.
   * 
   * @example
   * primary
   */
  role?: string;
  /**
   * @remarks
   * The type of the Serverless cluster. The value is fixed as `AgileServerless`.
   * 
   * > This parameter is returned only for Serverless clusters.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The amount of storage space used. Unit: bytes.
   * 
   * @example
   * 3012558848
   */
  storageUsed?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodeClass: 'DBNodeClass',
      DBNodes: 'DBNodes',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      payType: 'PayType',
      regionId: 'RegionId',
      replicaLag: 'ReplicaLag',
      role: 'Role',
      serverlessType: 'ServerlessType',
      storageUsed: 'StorageUsed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodeClass: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes },
      DBType: 'string',
      DBVersion: 'string',
      expireTime: 'string',
      expired: 'string',
      payType: 'string',
      regionId: 'string',
      replicaLag: 'string',
      role: 'string',
      serverlessType: 'string',
      storageUsed: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBodyLabels extends $dara.Model {
  /**
   * @remarks
   * The version of the GDN.
   * 
   * @example
   * 2.0
   */
  GDNVersion?: string;
  static names(): { [key: string]: string } {
    return {
      GDNVersion: 'GDNVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalDatabaseNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The connection details.
   */
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  /**
   * @remarks
   * The time when the GDN was created.
   * 
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The clusters in the GDN.
   */
  DBClusters?: DescribeGlobalDatabaseNetworkResponseBodyDBClusters[];
  /**
   * @remarks
   * The database engine type. Only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the GDN. It must meet the following requirements:
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must start with a letter or a Chinese character.
   * 
   * - It can contain only letters, Chinese characters, digits, underscores (_), and hyphens (-).
   * 
   * - It must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The GDN ID.
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the Global Database Network (GDN). Valid values:
   * 
   * - **creating**: The GDN is being created.
   * 
   * - **active**: The GDN is running.
   * 
   * - **deleting**: The GDN is being deleted.
   * 
   * - **locked**: The GDN is locked. In this state, you cannot perform any operations on any cluster in the GDN.
   * 
   * - **removing_member**: A cluster is being removed from the GDN.
   * 
   * @example
   * active
   */
  GDNStatus?: string;
  /**
   * @remarks
   * The global domain name.
   * 
   * @example
   * [gdnid].gdn.rds.aliyuncs.com
   */
  globalDomainName?: string;
  /**
   * @remarks
   * The labels of the GDN.
   */
  labels?: DescribeGlobalDatabaseNetworkResponseBodyLabels;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 67F2E75F-AE67-4FB2-821F-A81237EACD15
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      DBClusters: 'DBClusters',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      GDNDescription: 'GDNDescription',
      GDNId: 'GDNId',
      GDNStatus: 'GDNStatus',
      globalDomainName: 'GlobalDomainName',
      labels: 'Labels',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyConnections },
      createTime: 'string',
      DBClusterId: 'string',
      DBClusters: { 'type': 'array', 'itemType': DescribeGlobalDatabaseNetworkResponseBodyDBClusters },
      DBType: 'string',
      DBVersion: 'string',
      GDNDescription: 'string',
      GDNId: 'string',
      GDNStatus: 'string',
      globalDomainName: 'string',
      labels: DescribeGlobalDatabaseNetworkResponseBodyLabels,
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connections)) {
      $dara.Model.validateArray(this.connections);
    }
    if(Array.isArray(this.DBClusters)) {
      $dara.Model.validateArray(this.DBClusters);
    }
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

