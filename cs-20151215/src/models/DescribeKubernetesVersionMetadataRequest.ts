// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKubernetesVersionMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type that you want to use. Valid values:
   * 
   * *   `Kubernetes`: ACK dedicated cluster.
   * *   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * *   `ExternalKubernetes`: registered cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. The Kubernetes versions supported by ACK are the same as the Kubernetes versions supported by open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not configure this parameter, the latest Kubernetes version is used.
   * 
   * For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.16.9-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * 
   * *   `supported`: queries all supported Kubernetes versions.
   * *   `creatable`: queries only Kubernetes versions of clusters that you can create.
   * 
   * If you specify `KubernetesVersion`, this parameter does not take effect.
   * 
   * If you do not specify a query mode, Kubernetes versions of clusters that you can create are returned.
   * 
   * @example
   * supported
   */
  mode?: string;
  /**
   * @remarks
   * The scenario where clusters are used. Valid values:
   * 
   * *   `Default`: non-edge computing scenarios
   * *   `Edge`: edge computing scenarios
   * *   `Serverless`: serverless scenarios.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to query the Kubernetes versions available for updates. This parameter takes effect only when the KubernetesVersion parameter is specified.
   * 
   * *   true: queries the Kubernetes versions available for updates.
   * *   false: does not query the Kubernetes versions available for updates.
   * 
   * @example
   * 1.30.1-aliyun.1
   */
  queryUpgradableVersion?: boolean;
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
  /**
   * @remarks
   * The container runtime type that you want to use. You can specify a runtime type to query only OS images that support the runtime type. Valid values:
   * 
   * *   `docker`: Docker
   * *   `containerd`: containerd
   * *   `Sandboxed-Container.runv`: Sandboxed-Container
   * 
   * If you specify a runtime type, only the OS images that support the specified runtime type are returned.
   * 
   * Otherwise, all OS images are returned.
   * 
   * @example
   * docker
   */
  runtime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      kubernetesVersion: 'KubernetesVersion',
      mode: 'Mode',
      profile: 'Profile',
      queryUpgradableVersion: 'QueryUpgradableVersion',
      region: 'Region',
      runtime: 'runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      kubernetesVersion: 'string',
      mode: 'string',
      profile: 'string',
      queryUpgradableVersion: 'boolean',
      region: 'string',
      runtime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

