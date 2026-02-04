// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterMemberInfoResponseBodyClusterChildren extends $dara.Model {
  /**
   * @remarks
   * The maximum bandwidth of the node. Unit: MB/s.
   * 
   * > This parameter is returned only if the return value of **Service** is **redis**, which indicates a data node.
   * 
   * @example
   * 96
   */
  bandWidth?: number;
  /**
   * @remarks
   * The retention period of binlogs.
   * 
   * @example
   * 7
   */
  binlogRetentionDays?: number;
  /**
   * @remarks
   * The type of workload. The return value is **ALIYUN**.
   * 
   * @example
   * ALIYUN
   */
  bizType?: string;
  /**
   * @remarks
   * The maximum memory capacity per data node. Unit: MB.
   * 
   * > This parameter is returned only if the return value of **Service** is **redis**, which indicates a data node.
   * 
   * @example
   * 1024
   */
  capacity?: number;
  /**
   * @remarks
   * The specifications of the data node. For more information, see [Community Edition instances that use cloud disks](https://help.aliyun.com/document_detail/164477.html).
   * 
   * @example
   * redis.shard.small.ce
   */
  classCode?: string;
  /**
   * @remarks
   * The maximum number of connections supported by the data node.
   * 
   * @example
   * 20000
   */
  connections?: number;
  /**
   * @remarks
   * The current bandwidth of the data node, which is the sum of the default bandwidth and any extra bandwidth that is purchased. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  currentBandWidth?: number;
  /**
   * @remarks
   * The storage capacity of the [enhanced SSD (ESSD)](https://help.aliyun.com/document_detail/122389.html) that is used by the data node. Unit: MB.
   * 
   * > The ESSD is used only to store system operating data, such as Persistent Memory (PMEM). It is not used as a medium to write and read data.
   * 
   * @example
   * 4096
   */
  diskSizeMB?: number;
  /**
   * @remarks
   * The ID of the replica set in the node.
   * 
   * @example
   * 501791111
   */
  id?: number;
  /**
   * @remarks
   * The name of the data node.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  name?: string;
  /**
   * @remarks
   * The number of replica nodes.
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
   * 
   * *   **redis**: data node
   * *   **redis_cs**: config server
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
   * The ID of the user.
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
   * Details about data nodes in the cluster instance.
   */
  clusterChildren?: DescribeClusterMemberInfoResponseBodyClusterChildren[];
  /**
   * @remarks
   * The ID of the request.
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

