// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDatabaseNetworkResponseBodyDBClustersDBNodes } from "./DescribeGlobalDatabaseNetworkResponseBodyDbclustersDbnodes";


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

