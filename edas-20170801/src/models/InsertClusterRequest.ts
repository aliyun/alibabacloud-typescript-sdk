// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ****_product_test2
   */
  clusterName?: string;
  /**
   * @remarks
   * The type of the cluster. Valid values:
   * 
   * *   2: Elastic Compute Service (ECS) cluster
   * *   3: self-managed Kubernetes cluster in Enterprise Distributed Application Service (EDAS)
   * *   5: Kubernetes cluster
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The provider of Infrastructure as a Service (IaaS) resources that are used in the cluster.
   * 
   * When you use Alibaba Cloud, set the value to `ALIYUN`. The value is case-sensitive.
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The ID of the custom namespace. The ID is in the `physical region ID:custom namespace identifier` format. Example: `cn-hangzhou:test`.
   * 
   * @example
   * cn-beijing:td****
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The network type of the cluster. Valid values:
   * 
   * *   1: classic network
   * *   2: virtual private cloud (VPC)
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  networkMode?: number;
  /**
   * @remarks
   * **This parameter is deprecated.** The CPU overcommit ratio supported by a Docker cluster. Valid values:
   * 
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
   * The ID of the VPC. This parameter is required if you set the NetworkMode parameter to 2.
   * 
   * @example
   * vpc-2zef6ob8mrlzv8x3q****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      clusterType: 'ClusterType',
      iaasProvider: 'IaasProvider',
      logicalRegionId: 'LogicalRegionId',
      networkMode: 'NetworkMode',
      oversoldFactor: 'OversoldFactor',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      clusterType: 'number',
      iaasProvider: 'string',
      logicalRegionId: 'string',
      networkMode: 'number',
      oversoldFactor: 'number',
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

