// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworkResponseBodyConnections extends $dara.Model {
  /**
   * @remarks
   * The endpoint URL of the database service.
   * 
   * @example
   * abc.polardb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type for the database connection.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port number for the database connection.
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
   * The specifications of the node.
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
   * *   **Writer**: the primary node
   * *   **Reader**: a read-only node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * *   **Creating**: The node is being created.
   * *   **Running**: The node is running.
   * *   **Deleting**: The node is being deleted.
   * *   **Rebooting**: The node is restarting.
   * *   **ClassChanging**: The specifications of the node are being changed.
   * *   **NetAddressCreating**: The network connection is being created.
   * *   **NetAddressDeleting**: The network connection is being deleted.
   * *   **NetAddressModifying**: The network connection is being modified.
   * *   **MinorVersionUpgrading**: The minor version of the node is being updated.
   * *   **Maintaining**: The node is being maintained.
   * *   **Switching**: A failover is being performed.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node is assigned a failover priority. The failover priority determines which node is selected as the primary node when a failover occurs. A larger value indicates a higher priority. Valid values: 1 to 15.
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
   * The maximum input/output operations per second (IOPS).
   * 
   * @example
   * 32000
   */
  maxIOPS?: number;
  /**
   * @remarks
   * The zone ID of the node.
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
   * Normal: Cluster Edition Basic: Single Node Edition Archive: X-Engine Edition NormalMultimaster: Multi-master Cluster Edition SENormal: Standard Edition
   * 
   * > 
   * 
   * *   PolarDB for PostgreSQL clusters that run the PostgreSQL 11 database engine do not support Single Node Edition.
   * 
   * *   PolarDB for MySQL 8.0 and 5.7 clusters, and PolarDB for PostgreSQL clusters that run the PostgreSQL 14 database engine support Standard Edition.
   * 
   * *   PolarDB for MySQL 8.0 clusters support X-Engine Edition and Multi-master Cluster Edition.
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
   * The ID of the cluster.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster. For more information, see [Cluster status table](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node specifications of the cluster.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The nodes of the cluster.
   */
  DBNodes?: DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes[];
  /**
   * @remarks
   * The database engine type of the cluster. Only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. Only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * >  A specific value is returned only for subscription (**Prepaid**) clusters. No value is returned for pay-as-you-go (**Postpaid**) clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * >  This parameter is returned only for subscription (**Prepaid**) clusters.
   * 
   * @example
   * false
   */
  expired?: string;
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
   * The cross-region data replication latency between the primary cluster and secondary clusters. Unit: seconds.
   * 
   * @example
   * 1
   */
  replicaLag?: string;
  /**
   * @remarks
   * The role of the cluster. Valid values:
   * 
   * *   **Primary**: the primary cluster
   * *   **standby**: a secondary cluster
   * 
   * >  A GDN consists of one primary cluster and up to four secondary clusters.
   * 
   * @example
   * primary
   */
  role?: string;
  /**
   * @remarks
   * Indicates whether the cluster is a serverless cluster. The value is fixed at AgileServerless.
   * 
   * >  This parameter is returned only for serverless clusters.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage usage of the cluster. Unit: bytes.
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
   * The information about the connection to the cluster.
   */
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  /**
   * @remarks
   * The time at which the GDN was created.
   * 
   * @example
   * 2020-02-24T11:57:54Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the cluster.
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
   * The type of the database engine. Only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. Only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must start with a letter.
   * *   It can contain letters, digits, underscores (_), and hyphens (-).
   * *   It must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * The ID of the GDN.
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * *   **Creating**: The GDN is being created.
   * *   **active**: The GDN is running.
   * *   **deleting**: The GDN is being deleted.
   * *   **locked**: The GDN is locked. If the GDN is locked, you cannot perform operations on clusters in the GDN.
   * *   **removing_member**: The secondary cluster is being removed from the GDN.
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
  labels?: DescribeGlobalDatabaseNetworkResponseBodyLabels;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 67F2E75F-AE67-4FB2-821F-A81237EACD15
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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

