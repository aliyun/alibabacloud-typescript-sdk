// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterMemberInfoResponseBodyClusterChildren extends $dara.Model {
  /**
   * @remarks
   * The bandwidth of the node. Unit: MB/s.
   * > This parameter is returned only when the **Service** parameter is set to **redis**, which indicates that the node is a data node.
   * 
   * @example
   * 96
   */
  bandWidth?: number;
  /**
   * @remarks
   * The number of days for which binary logs are retained.
   * 
   * @example
   * 7
   */
  binlogRetentionDays?: number;
  /**
   * @remarks
   * The business type. The value is fixed as **ALIYUN**.
   * 
   * @example
   * ALIYUN
   */
  bizType?: string;
  /**
   * @remarks
   * The maximum memory capacity of a single data node. Unit: MB.
   * > This parameter is returned only when the **Service** parameter is set to **redis**, which indicates that the node is a data node.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The specifications of the data node. For more information, see [Cloud-native instance specifications](https://help.aliyun.com/document_detail/164477.html).
   * 
   * @example
   * redis.shard.small.ce
   */
  classCode?: string;
  /**
   * @remarks
   * The maximum number of connections for the data node.
   * 
   * @example
   * 20000
   */
  connections?: number;
  /**
   * @remarks
   * The current bandwidth of the node. Unit: MB/s. The value is the sum of the default bandwidth and the increased bandwidth of the node.
   * 
   * <props="china">This parameter is returned only when the instance is created in a dedicated cluster.
   * 
   * @example
   * 100
   */
  currentBandWidth?: number;
  /**
   * @remarks
   * The storage space of the [ESSD cloud disk](https://help.aliyun.com/document_detail/122389.html) for the data node. Unit: MB.
   * > The ESSD cloud disk is used only for system operations, such as data persistence, and is not used as a medium for data access.
   * 
   * @example
   * 4096
   */
  diskSizeMB?: number;
  /**
   * @remarks
   * The replica set ID of the node.
   * 
   * @example
   * 501791111
   */
  id?: number;
  /**
   * @remarks
   * The name of the node.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  name?: string;
  /**
   * @remarks
   * The number of child nodes.
   * 
   * @example
   * 0
   */
  replicaSize?: number;
  /**
   * @remarks
   * The name of the resource group to which the node belongs.
   * 
   * @example
   * GLOBAL_ZHANGJIAKOU_A
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **redis**: data node.
   * * **redis_cs**: configuration server node.
   * 
   * @example
   * redis
   */
  service?: string;
  /**
   * @remarks
   * The major version of the node.
   * 
   * @example
   * 5.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 2****_176498472570****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      binlogRetentionDays: 'BinlogRetentionDays',
      bizType: 'BizType',
      capacity: 'Capacity',
      classCode: 'ClassCode',
      connections: 'Connections',
      currentBandWidth: 'CurrentBandWidth',
      diskSizeMB: 'DiskSizeMB',
      id: 'Id',
      name: 'Name',
      replicaSize: 'ReplicaSize',
      resourceGroupName: 'ResourceGroupName',
      service: 'Service',
      serviceVersion: 'ServiceVersion',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      binlogRetentionDays: 'number',
      bizType: 'string',
      capacity: 'number',
      classCode: 'string',
      connections: 'number',
      currentBandWidth: 'number',
      diskSizeMB: 'number',
      id: 'number',
      name: 'string',
      replicaSize: 'number',
      resourceGroupName: 'string',
      service: 'string',
      serviceVersion: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterMemberInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data node information for the cluster instance.
   */
  clusterChildren?: DescribeClusterMemberInfoResponseBodyClusterChildren[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterChildren: 'ClusterChildren',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterChildren: { 'type': 'array', 'itemType': DescribeClusterMemberInfoResponseBodyClusterChildren },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clusterChildren)) {
      $dara.Model.validateArray(this.clusterChildren);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

