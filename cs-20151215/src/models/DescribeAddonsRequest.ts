// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * - `Default`: managed cluster.
   * - `Serverless`: serverless cluster.
   * - `Edge`: edge cluster.
   * 
   * @example
   * Default
   */
  clusterProfile?: string;
  /**
   * @remarks
   * After you set `cluster_type` to `ManagedKubernetes` and configure `profile`, you can further specify the cluster specification.
   * 
   * - `ack.pro.small`: Pro cluster.
   * 
   * - `ack.standard`: Basic cluster (selected by default if this parameter is left empty).
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * - `Kubernetes`: ACK dedicated cluster.
   * 
   * - `ManagedKubernetes`: ACK managed cluster types, including ACK managed clusters (ACK Pro and ACK Basic), ACK Serverless clusters (Pro and Basic), ACK Edge clusters (Pro and Basic), and ACK Lingjun clusters (Pro).
   * 
   * - `ExternalKubernetes`: registered cluster.
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
   * The ID of the region where the cluster resides.
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

