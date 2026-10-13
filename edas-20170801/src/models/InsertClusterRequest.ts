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
   * - 2: ECS cluster.
   * - 3: EDAS built-in Kubernetes cluster.
   * - 5: Kubernetes cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  clusterType?: number;
  /**
   * @remarks
   * The IaaS resource provider.
   * 
   * <note>When you select Alibaba Cloud, you must use uppercase Pinyin, such as `ALIYUN`.</note>
   * 
   * @example
   * ALIYUN
   */
  iaasProvider?: string;
  /**
   * @remarks
   * The region ID of the custom namespace. Format: `physical region:custom namespace identifier`, such as `cn-hangzhou:test`.
   * 
   * @example
   * cn-beijing:td****
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * 
   * - 1: Classic network.
   * - 2: VPC.
   * 
   * This parameter is required.
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
   * - 4: 1:4 ratio.
   * - 8: 1:8 ratio.
   * 
   * @example
   * 2
   */
  oversoldFactor?: number;
  /**
   * @remarks
   * The ID of the VPC. This parameter is required if the network type is set to VPC.
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

