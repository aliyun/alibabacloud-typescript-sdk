// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster profile. Valid values:
   * - Default: managed cluster.
   * - Serverless: Serverless cluster.
   * - Edge: edge cluster.
   * 
   * @example
   * Default
   */
  clusterProfile?: string;
  /**
   * @remarks
   * The cluster specifications. You can specify this parameter when you set cluster_type to ManagedKubernetes and configure profile. Valid values:
   * 
   * - ack.pro.small: ACK Pro.
   * 
   * - ack.standard: ACK Basic. This is the default value if this parameter is left empty.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - Kubernetes: ACK dedicated cluster.
   * 
   * - ManagedKubernetes: ACK ACK clusters, including ACK ACK clusters (ACK Pro and ACK Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   * 
   * - ExternalKubernetes: registered cluster.
   * 
   * @example
   * ManagedKubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 1.24.6-aliyun.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The ID of the region where the cluster is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      clusterProfile: 'cluster_profile',
      clusterSpec: 'cluster_spec',
      clusterType: 'cluster_type',
      clusterVersion: 'cluster_version',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterProfile: 'string',
      clusterSpec: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

