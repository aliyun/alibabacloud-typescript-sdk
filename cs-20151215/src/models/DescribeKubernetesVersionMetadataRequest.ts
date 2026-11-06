// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKubernetesVersionMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster, including ACK Pro clusters, ACK Basic clusters, ACK Serverless Pro clusters, ACK Serverless Basic clusters, ACK Edge Pro clusters, and ACK Edge Basic clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster, which is consistent with the Kubernetes community baseline version. We recommend that you select the latest version. If you do not specify this parameter, the latest version is used by default.
   * 
   * For more information about the Kubernetes versions supported by ACK, see [Overview of Kubernetes versions](https://help.aliyun.com/document_detail/185269.html).
   * 
   * @example
   * 1.32.1-aliyun.1
   */
  kubernetesVersion?: string;
  /**
   * @remarks
   * The query mode. Valid values:
   * - `supported`: queries supported versions.
   * - `creatable`: queries versions available for cluster creation.
   * 
   * If you specify KubernetesVersion, the query mode is ignored.
   * 
   * If you do not specify a query mode, versions available for cluster creation are returned by default.
   * 
   * @example
   * supported
   */
  mode?: string;
  /**
   * @remarks
   * The cluster profile used to differentiate cluster scenarios. Valid values:
   * 
   * - `Default`: non-edge cluster.
   * - `Edge`: edge cluster.
   * - `Serverless`: ASK cluster.
   * 
   * Default value: `Default`.
   * 
   * @example
   * Default
   */
  profile?: string;
  /**
   * @remarks
   * Specifies whether to query the upgradable versions of the cluster version. This parameter takes effect only when the KubernetesVersion parameter is specified. Valid values:
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
   * The version support policy. The value is case-sensitive. Valid values:
   * - Standard: standard support. This is the default value.
   * - Extended: extended support.
   * If you set this parameter to Extended: when Mode is set to `supported`, versions in the extended support period are additionally returned; when Mode is set to `creatable`, the latest extended support patch version of the major version in the extended support period is additionally returned; upgradable_versions returns the extended support patch versions of the major version.
   * Extended support applies only to ACK Pro managed clusters (where ClusterSpec is set to `ack.pro.*` and Profile is set to `Default`). Other cluster types (ACK Standard, ACS, ACK Edge managed, and ACK dedicated clusters) do not support extended support. If you specify a version in the extended support period to create or upgrade these clusters, the request will be rejected.
   * 
   * @example
   * Extended
   */
  supportPolicy?: string;
  /**
   * @remarks
   * The runtime type. You can specify a runtime type to filter the system images supported by the runtime. Valid values:
   * 
   * - `docker`: Docker runtime.
   * - `containerd`: containerd runtime.
   * - `Sandboxed-Container.runv`: sandboxed container.
   * 
   * If you specify a runtime type, the image versions supported by the specified runtime are returned.
   * 
   * If you do not specify a runtime type, all images are returned by default.
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
      supportPolicy: 'SupportPolicy',
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
      supportPolicy: 'string',
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

