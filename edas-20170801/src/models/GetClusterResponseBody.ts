// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * 5439271a-015b-433d-befb-d76d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The import status of the cluster. Valid values:
   * 
   * *   1: The cluster is imported.
   * *   2: The cluster fails to be imported.
   * *   3: The cluster is being imported.
   * *   4: The cluster is deleted.
   * *   0: The cluster is not imported.
   * 
   * @example
   * 0
   */
  clusterImportStatus?: number;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ClusterTest
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   0: regular Docker cluster
   * *   1: Swarm cluster
   * *   2: Elastic Compute Service (ECS) cluster
   * *   3: self-managed Kubernetes cluster in EDAS
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
   * 4
   */
  cpu?: number;
  /**
   * @remarks
   * The number of used CPU cores.
   * 
   * @example
   * 2
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The time when the cluster was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1570708232145
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) cluster.
   * 
   * @example
   * c2ce62869f4d4466b920312315f05****
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
   * The provider of Infrastructure as a Service (IaaS) resources used in the cluster.
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
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * The size of used memory. Unit: MB.
   * 
   * @example
   * 1024
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
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * @example
   * 4
   */
  nodeNum?: number;
  /**
   * @remarks
   * The overcommit ratio supported by a Docker cluster. Valid values:
   * 
   * *   1: 1:1, which means that resources are not overcommitted.
   * *   2: 1:2, which means that resources are overcommitted by 1:2.
   * *   4: 1:4, which means that resources are overcommitted by 1:4.
   * *   8: 1:8, which means that resources are overcommitted by 1:8.
   * 
   * @example
   * 2
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The ID of the region where the cluster resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The subtype of the Kubernetes cluster. Valid values: ManagedKubernetes, Ask, and ExternalKubernetes. ManagedKubernetes refers to the ACK cluster. Ask refers to the Serverless Kubernetes (ASK) cluster. ExternalKubernetes refers to the external cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  subClusterType?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1570708232145
   */
  updateTime?: number;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-xxxxz1mlwpb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterImportStatus: 'ClusterImportStatus',
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
      subClusterType: 'SubClusterType',
      updateTime: 'UpdateTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterImportStatus: 'number',
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
      subClusterType: 'string',
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

export class GetClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the cluster.
   */
  cluster?: GetClusterResponseBodyCluster;
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
   * The detailed information that is returned.
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
   * d76db491
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'Cluster',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: GetClusterResponseBodyCluster,
      code: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.cluster && typeof (this.cluster as any).validate === 'function') {
      (this.cluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

