// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertClusterResponseBodyCluster extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
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
   * - 2: ECS cluster.
   * - 3: EDAS built-in Kubernetes cluster.
   * - 5: Kubernetes cluster.
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - 1: Classic network.
   * 
   * - 2: VPC.
   * 
   * @example
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * **[Deprecated]** The CPU overselling ratio for Docker clusters. Valid values:
   * 
   * - 2: 1:2 ratio.
   * 
   * - 4: 1:4 ratio.
   * 
   * - 8: 1:8 ratio.
   * 
   * @example
   * 1
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The region ID of the cluster.
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
   * The created cluster entity.
   */
  cluster?: InsertClusterResponseBodyCluster;
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
   * The additional information.
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

