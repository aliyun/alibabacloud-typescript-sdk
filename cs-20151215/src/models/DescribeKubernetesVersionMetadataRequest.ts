// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKubernetesVersionMetadataRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster type. Valid values:
   * 
   * - `Kubernetes`: ACK dedicated cluster.
   * - `ManagedKubernetes`: ACK managed cluster, including ACK Pro clusters, ACK basic clusters, ACK Serverless Pro clusters, ACK Serverless basic clusters, ACK Edge Pro clusters, and ACK Edge basic clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * Kubernetes
   */
  clusterType?: string;
  /**
   * @remarks
   * The Kubernetes version of the cluster. This version is consistent with the Kubernetes community baseline version. We recommend that you select the latest version. If you do not specify this parameter, the latest version is used by default.
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
   * 
   * - `supported`: Supported versions.
   * - `creatable`: Versions available for cluster creation.
   * 
   * If you specify KubernetesVersion, the system ignores the query mode.
   * 
   * If you do not specify a query mode, the system returns versions available for cluster creation by default.
   * 
   * @example
   * supported
   */
  mode?: string;
  /**
   * @remarks
   * The cluster profile. Valid values:
   * 
   * - `Default`: cluster for non-edge scenarios.
   * - `Edge`: cluster for edge scenarios.
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
   * - true: Queries upgradable versions.
   * - false: Does not query upgradable versions.
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
   * The runtime type. You can specify a runtime type to filter system images supported by the runtime. Valid values:
   * 
   * - `docker`: Docker runtime.
   * - `containerd`: containerd runtime.
   * - `Sandboxed-Container.runv`: sandboxed container.
   * 
   * If you specify a runtime type, the system returns the image versions supported by the specified runtime.
   * 
   * If you do not specify a runtime type, the system returns all images by default.
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

