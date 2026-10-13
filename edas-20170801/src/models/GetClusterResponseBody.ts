// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterResponseBodyCluster extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 5439271a-015b-433d-befb-d76d****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster import status. Valid values:
   * - 1: Imported.
   * - 2: Import failed.
   * - 3: Importing.
   * - 4: Cluster deleted.
   * - 0: Not imported.
   * 
   * @example
   * 0
   */
  clusterImportStatus?: number;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * ClusterTest
   */
  clusterName?: string;
  /**
   * @remarks
   * The cluster type. Valid values:
   * - 0: Common Docker cluster.
   * - 1: Swarm cluster.
   * - 2: ECS cluster.
   * - 3: EDAS self-managed Kubernetes cluster.
   * - 4: Pandora auto-registered application cluster.
   * - 5: Container Service Kubernetes cluster.
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
   * The timestamp when the cluster was created.
   * 
   * @example
   * 1570708232145
   */
  createTime?: number;
  /**
   * @remarks
   * The Container Service cluster ID.
   * 
   * @example
   * c2ce62869f4d4466b920312315f05****
   */
  csClusterId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The IaaS resource provider.
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The total memory. Unit: MB.
   * 
   * @example
   * 2048
   */
  mem?: number;
  /**
   * @remarks
   * The amount of used memory. Unit: MB.
   * 
   * @example
   * 1024
   */
  memUsed?: number;
  /**
   * @remarks
   * The network type. Valid values:
   * - 1: Classic network.
   * - 2: VPC.
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
   * The CPU overselling ratio for Docker clusters. Valid values:
   * - 1: 1:1 ratio. No overselling.
   * - 2: 1:2 overselling ratio.
   * - 4: 1:4 overselling ratio.
   * - 8: 1:8 overselling ratio.
   * 
   * @example
   * 2
   */
  oversoldFactor?: number;
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
   * The subtype of the Kubernetes cluster. ManagedKubernetes indicates an ACK cluster, Ask indicates an ASK cluster, and ExternalKubernetes indicates an external cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  subClusterType?: string;
  /**
   * @remarks
   * The timestamp when the cluster was last modified.
   * 
   * @example
   * 1570708232145
   */
  updateTime?: number;
  /**
   * @remarks
   * The VPC ID.
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
   * The cluster information.
   */
  cluster?: GetClusterResponseBodyCluster;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The detailed message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

