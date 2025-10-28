// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertClusterResponseBodyCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of cluster.
   * 
   * @example
   * 8705ad13-5d86-47fc-b68f-257b59ed****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * ****_product_test2
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   2: ECS cluster
   * *   3: self-managed Kubernetes cluster in EDAS
   * *   5: Kubernetes cluster
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The provider of the IaaS resources that are used in the cluster.
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   1: classic network
   * *   2\\. VPC
   * 
   * @example
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * **This parameter is deprecated.** The CPU overcommit ratio supported by the Docker cluster. Valid values:
   * 
   * *   2: 1:2, which means that resources are overcommitted by 1:2.
   * *   4: 1:4, which means that resources are overcommitted by 1:4.
   * *   8: 1:8, which means that resources are overcommitted by 1:8.
   * 
   * @example
   * 1
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The ID of the region in which the cluster resides.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-2zef6ob8mrlzv8x3q****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      iaasProvider: 'IaasProvider',
      networkMode: 'NetworkMode',
      oversoldFactor: 'OversoldFactor',
      regionId: 'RegionId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      clusterType: 'number',
      iaasProvider: 'string',
      networkMode: 'number',
      oversoldFactor: 'number',
      regionId: 'string',
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

export class InsertClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the cluster that was created.
   */
  cluster?: InsertClusterResponseBodyCluster;
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
   * b197-40ab-9155-****
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
      cluster: InsertClusterResponseBodyCluster,
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

