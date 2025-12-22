// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstanceResourcesResponseBodyHelmRelease extends $dara.Model {
  /**
   * @example
   * ack-node-problem-detector
   */
  chartName?: string;
  /**
   * @example
   * 1.2.28
   */
  chartVersion?: string;
  /**
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @example
   * ack-node-problem-detector
   */
  releaseName?: string;
  static names(): { [key: string]: string } {
    return {
      chartName: 'chart_name',
      chartVersion: 'chart_version',
      namespace: 'namespace',
      releaseName: 'release_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartName: 'string',
      chartVersion: 'string',
      namespace: 'string',
      releaseName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstanceResourcesResponseBodyKubernetesObjects extends $dara.Model {
  /**
   * @example
   * rbac.authorization.k8s.io
   */
  group?: string;
  /**
   * @example
   * ClusterRole
   */
  kind?: string;
  /**
   * @example
   * terway-pod-reader
   */
  name?: string;
  /**
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      kind: 'kind',
      name: 'name',
      namespace: 'namespace',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      kind: 'string',
      name: 'string',
      namespace: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAddonInstanceResourcesResponseBody extends $dara.Model {
  helmRelease?: ListClusterAddonInstanceResourcesResponseBodyHelmRelease;
  kubernetesObjects?: ListClusterAddonInstanceResourcesResponseBodyKubernetesObjects[];
  static names(): { [key: string]: string } {
    return {
      helmRelease: 'helm_release',
      kubernetesObjects: 'kubernetes_objects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helmRelease: ListClusterAddonInstanceResourcesResponseBodyHelmRelease,
      kubernetesObjects: { 'type': 'array', 'itemType': ListClusterAddonInstanceResourcesResponseBodyKubernetesObjects },
    };
  }

  validate() {
    if(this.helmRelease && typeof (this.helmRelease as any).validate === 'function') {
      (this.helmRelease as any).validate();
    }
    if(Array.isArray(this.kubernetesObjects)) {
      $dara.Model.validateArray(this.kubernetesObjects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

