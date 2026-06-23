// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterAddonInstanceResourcesResponseBodyHelmRelease extends $dara.Model {
  /**
   * @remarks
   * The Helm chart name of the component.
   * 
   * @example
   * ack-node-problem-detector
   */
  chartName?: string;
  /**
   * @remarks
   * The Helm chart version of the component.
   * 
   * @example
   * 1.2.28
   */
  chartVersion?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the Helm release instance.
   * 
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
   * @remarks
   * The Kubernetes API group to which the object belongs.
   * 
   * @example
   * rbac.authorization.k8s.io
   */
  group?: string;
  /**
   * @remarks
   * The Kubernetes API kind of the object.
   * 
   * @example
   * ClusterRole
   */
  kind?: string;
  /**
   * @remarks
   * The name of the object.
   * 
   * @example
   * terway-pod-reader
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the object belongs.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The Kubernetes API version to which the object belongs.
   * 
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
  /**
   * @remarks
   * The Helm release instance information of the component.
   */
  helmRelease?: ListClusterAddonInstanceResourcesResponseBodyHelmRelease;
  /**
   * @remarks
   * The list of Kubernetes objects contained in the component.
   */
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

