// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerSpec } from "./ContainerSpec";
import { Lifecycle } from "./Lifecycle";
import { SecurityContext } from "./SecurityContext";


export class ExtraPodSpec extends $dara.Model {
  /**
   * @remarks
   * A list of init containers that run to completion before the main container starts.
   */
  initContainers?: ContainerSpec[];
  /**
   * @remarks
   * Defines lifecycle hooks for the main container.
   */
  lifecycle?: Lifecycle;
  /**
   * @remarks
   * Defines the security context for the main container.
   */
  mainContainerSecurityContext?: SecurityContext;
  /**
   * @remarks
   * Key-value pairs to apply to the pod as annotations. Use annotations to attach arbitrary, non-identifying metadata.
   * 
   * @deprecated
   */
  podAnnotations?: { [key: string]: string };
  /**
   * @remarks
   * Key-value pairs to apply to the pod as labels. Use labels to organize and select pods.
   * 
   * @deprecated
   */
  podLabels?: { [key: string]: string };
  /**
   * @remarks
   * A list of local directory paths to mount and share among all containers in the pod.
   */
  sharedVolumeMountPaths?: string[];
  /**
   * @remarks
   * A list of sidecar containers.
   */
  sideCarContainers?: ContainerSpec[];
  static names(): { [key: string]: string } {
    return {
      initContainers: 'InitContainers',
      lifecycle: 'Lifecycle',
      mainContainerSecurityContext: 'MainContainerSecurityContext',
      podAnnotations: 'PodAnnotations',
      podLabels: 'PodLabels',
      sharedVolumeMountPaths: 'SharedVolumeMountPaths',
      sideCarContainers: 'SideCarContainers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initContainers: { 'type': 'array', 'itemType': ContainerSpec },
      lifecycle: Lifecycle,
      mainContainerSecurityContext: SecurityContext,
      podAnnotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      podLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sharedVolumeMountPaths: { 'type': 'array', 'itemType': 'string' },
      sideCarContainers: { 'type': 'array', 'itemType': ContainerSpec },
    };
  }

  validate() {
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(this.lifecycle && typeof (this.lifecycle as any).validate === 'function') {
      (this.lifecycle as any).validate();
    }
    if(this.mainContainerSecurityContext && typeof (this.mainContainerSecurityContext as any).validate === 'function') {
      (this.mainContainerSecurityContext as any).validate();
    }
    if(this.podAnnotations) {
      $dara.Model.validateMap(this.podAnnotations);
    }
    if(this.podLabels) {
      $dara.Model.validateMap(this.podLabels);
    }
    if(Array.isArray(this.sharedVolumeMountPaths)) {
      $dara.Model.validateArray(this.sharedVolumeMountPaths);
    }
    if(Array.isArray(this.sideCarContainers)) {
      $dara.Model.validateArray(this.sideCarContainers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

