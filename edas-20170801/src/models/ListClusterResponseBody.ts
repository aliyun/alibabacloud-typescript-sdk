// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterResponseBodyClusterListCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster in EDAS.
   * 
   * @example
   * b98b5919-c111-4dad-9f74-7233********
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * cluster-test
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   0: regular Docker cluster
   * *   1: Swarm cluster
   * *   2: Elastic Compute Service (ECS) cluster
   * *   3: self-managed Kubernetes cluster in Enterprise Distributed Application Service (EDAS)
   * *   4: cluster in which Pandora automatically registers applications
   * *   5: ACK cluster
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: number;
  /**
   * @remarks
   * The number of used CPU cores.
   * 
   * @example
   * 1
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The timestamp when the cluster was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1502888064561
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the cluster in Container Service for Kubernetes (ACK).
   * 
   * @example
   * c2ce************b9203a9
   */
  csClusterId?: string;
  /**
   * @remarks
   * The description of the cluster.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The provider of the cluster.
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The total size of memory. Unit: MB.
   * 
   * @example
   * 3072
   */
  mem?: number;
  /**
   * @remarks
   * The size of used memory. Unit: MB.
   * 
   * @example
   * 200
   */
  memUsed?: number;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   1: classic network
   * *   2: virtual private cloud (VPC)
   * 
   * @example
   * 1
   */
  networkMode?: number;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 2
   */
  nodeNum?: number;
  /**
   * @remarks
   * The CPU overcommit ratio that is supported by a Docker cluster. Valid values:
   * 
   * *   1: 1:1, which means that CPU resources are not overcommitted.
   * *   2: 1:2, which means that CPU resources are overcommitted by 1:2.
   * *   4: 1:4, which means that CPU resources are overcommitted by 1:4.
   * *   8: 1:8, which means that CPU resources are overcommitted by 1:8.
   * 
   * @example
   * 1
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * 461
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The timestamp when the cluster was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1533820823203
   */
  updateTime?: number;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-23727****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      cpu: 'Cpu',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      csClusterId: 'CsClusterId',
      description: 'Description',
      iaasProvider: 'IaasProvider',
      mem: 'Mem',
      memUsed: 'MemUsed',
      networkMode: 'NetworkMode',
      nodeNum: 'NodeNum',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      cpu: 'number',
      cpuUsed: 'number',
      createTime: 'number',
      csClusterId: 'string',
      description: 'string',
      iaasProvider: 'string',
      mem: 'number',
      memUsed: 'number',
      networkMode: 'number',
      nodeNum: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      updateTime: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBodyClusterList extends $dara.Model {
  cluster?: ListClusterResponseBodyClusterListCluster[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: { 'type': 'array', 'itemType': ListClusterResponseBodyClusterListCluster },
    };
  }

  validate() {
    if(Array.isArray(this.cluster)) {
      $dara.Model.validateArray(this.cluster);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The clusters.
   */
  clusterList?: ListClusterResponseBodyClusterList;
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1053-08e4-47a5-b2ab-5c0323de****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterList: 'ClusterList',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterList: ListClusterResponseBodyClusterList,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterList && typeof (this.clusterList as any).validate === 'function') {
      (this.clusterList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

