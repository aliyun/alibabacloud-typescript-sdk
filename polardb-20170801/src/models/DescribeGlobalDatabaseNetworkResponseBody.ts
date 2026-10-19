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
   * The time when the database node was created.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2020-03-23T21:35:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The node specifications of the database node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The database node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The role of the database node. Valid values:
   * 
   * - **Writer**: primary node
   * 
   * - **Reader**: read-only node
   * 
   * @example
   * Reader
   */
  DBNodeRole?: string;
  /**
   * @remarks
   * The status of the node. Valid values:
   * 
   * - **Creating**: Being created.
   * 
   * - **Running**: Running.
   * 
   * - **Deleting**: Being deleted.
   * 
   * - **Rebooting**: Being restarted.
   * 
   * - **ClassChanging**: The node specifications are being changed.
   * 
   * - **NetAddressCreating**: Network connectivity is being created.
   * 
   * - **NetAddressDeleting**: Network connectivity is being deleted.
   * 
   * - **NetAddressModifying**: Network connectivity is being modified.
   * 
   * - **MinorVersionUpgrading**: A minor engine version upgrade is in progress.
   * 
   * - **Maintaining**: The cluster is under maintenance.
   * 
   * - **Switching**: A failover is in progress.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The failover priority. Each node has a failover priority that determines the likelihood of the node being elected as the primary node during a failover. A higher value indicates a higher priority. Valid values: 1 to 15.
   * 
   * @example
   * 1
   */
  failoverPriority?: number;
  /**
   * @remarks
   * The maximum number of concurrent connections to the cluster.
   * 
   * @example
   * 8000
   */
  maxConnections?: number;
  /**
   * @remarks
   * The maximum number of I/O requests per second (IOPS).
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
   * The edition of the product. Valid values:
   * 
   * Normal: Cluster Edition
   * Basic: Single Node Edition
   * Archive: PolarDB X-Engine Edition
   * NormalMultimaster: Multi-master Cluster Edition
   * SENormal: PolarDB for MySQL Standard Edition
   * 
   * >- PolarDB for PostgreSQL 11 does not support Single Node Edition.
   * >- PolarDB for MySQL 8.0, PolarDB for MySQL 5.7, and PolarDB for PostgreSQL 14 support PolarDB for MySQL Standard Edition.
   * >- PolarDB for MySQL 8.0 supports PolarDB X-Engine Edition and Multi-master Cluster Edition.
   * 
   * @example
   * Normal
   */
  category?: string;
  /**
   * @remarks
   * The cluster description.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID in the GDN.
   * 
   * @example
   * pc-wz9fb5nn44u1d****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The status of the cluster in the GDN. For more information, see [Cluster status table](https://help.aliyun.com/document_detail/99286.html).
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node specifications of the database node.
   * 
   * @example
   * polar.mysql.x4.large
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The details of the database nodes.
   */
  DBNodes?: DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes[];
  /**
   * @remarks
   * The database engine type. Currently, only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Currently, only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription). An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - **true**
   * 
   * - **false**
   * 
   * > This parameter is returned only for clusters whose billing method is **Prepaid** (subscription).
   * 
   * @example
   * false
   */
  expired?: string;
  /**
   * @remarks
   * The billing method. Valid values:
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The cross-region replication delay between the primary and secondary clusters. Unit: seconds.
   * 
   * @example
   * 1
   */
  replicaLag?: string;
  /**
   * @remarks
   * The role of the cluster. Valid values:
   * 
   * - **primary**: primary cluster
   * 
   * - **standby**: secondary cluster
   * 
   * > A GDN contains one primary cluster and up to four secondary clusters.
   * 
   * @example
   * primary
   */
  role?: string;
  /**
   * @remarks
   * The serverless type. The value is fixed as AgileServerless.
   * > This parameter is supported only for serverless clusters.
   * 
   * @example
   * AgileServerless
   */
  serverlessType?: string;
  /**
   * @remarks
   * The storage usage. Unit: bytes.
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
   * The GDN version.
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
   * The connection information.
   */
  connections?: DescribeGlobalDatabaseNetworkResponseBodyConnections[];
  /**
   * @remarks
   * The time when the GDN was created.
   * 
   * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
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
   * The database engine type. Currently, only MySQL is supported.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version. Currently, only version 8.0 is supported.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The description of the GDN. The description must meet the following requirements:
   * 
   * - It cannot start with http:// or https://.
   * 
   * - It must start with an uppercase letter, a lowercase letter, or a Chinese character.
   * 
   * - It can contain uppercase letters, lowercase letters, Chinese characters, digits, underscores (_), or hyphens (-).
   * 
   * - It must be 2 to 126 characters in length.
   * 
   * @example
   * GDN-fortest
   */
  GDNDescription?: string;
  /**
   * @remarks
   * GDN ID。
   * 
   * @example
   * gdn-bp1fttxsrmv*****
   */
  GDNId?: string;
  /**
   * @remarks
   * The status of the GDN. Valid values:
   * 
   * - **creating**: Being created.
   * 
   * - **active**: Running.
   * 
   * - **deleting**: Being deleted.
   * 
   * - **locked**: Locked. No operations can be performed on any cluster in the GDN.
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
   * The property labels.
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

