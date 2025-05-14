// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAddonsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * *   `Default`: ACK managed cluster
   * *   `Serverless`: ACK Serverless cluster
   * *   `Edge`: ACK Edge cluster
   * 
   * @example
   * Default
   */
  clusterProfile?: string;
  /**
   * @remarks
   * If you set `cluster_type` to `ManagedKubernetes` and specify `profile`, you can further specify the edition of the cluster. Valid values:
   * 
   * *   `ack.pro.small`: creates an ACK Pro cluster.
   * *   `ack.standard`: creates an ACK Basic cluster. If you leave the parameter empty, an ACK Basic cluster is created.
   * 
   * @example
   * ack.pro.small
   */
  clusterSpec?: string;
  /**
   * @remarks
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * @example
   * kubernetes
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
   * The region ID of the cluster.
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

