// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKubernetesVersionMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster, including ACK Pro cluster, ACK Basic cluster, ACK Serverless Pro cluster, ACK Serverless Basic cluster, ACK Edge Pro cluster, and ACK Edge Basic cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version, which is consistent with the Kubernetes community baseline version. We recommend that you select the latest version. If you do not specify this parameter, the latest version is used by default.
   * 
   * For more information about the Kubernetes versions supported by ACK, see [Kubernetes version release overview](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * - `supported`: queries supported versions.
   * - `creatable`: queries creatable versions.
   * 
   * If you specify `KubernetesVersion`, the query mode is ignored.
   * 
   * If you do not specify the query mode, creatable versions are returned by default.
   * 
   * @example
   * supported
   */
  mode?: string;
  /**
   * @remarks
   * The cluster type for specific scenarios. Valid values:
   * 
   * - `Default`: non-edge scenario cluster.
   * - `Edge`: edge scenario cluster.
   * - `Serverless`: ACK Serverless cluster.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to query upgradable versions for the specified cluster version. This parameter takes effect only when the KubernetesVersion parameter is specified.
   * 
   * - true: queries upgradable versions.
   * 
   * - false: does not query upgradable versions.
   * 
   * @example
   * 1.30.1-aliyun.1
   */
  queryUpgradableVersion?: boolean;
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
  /**
   * @remarks
   * The runtime type. You can specify the runtime type to filter the system images that are supported by the runtime. Valid values:
   * 
   * - `docker`: Docker runtime.
   * - `containerd`: containerd runtime.
   * - `Sandboxed-Container.runv`: sandboxed container.
   * 
   * If you specify the runtime type, the image versions supported by the specified runtime are returned.
   * 
   * If you do not specify the runtime type, all images are returned by default.
   * 
   * @example
   * containerd
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

