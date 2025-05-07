// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerSpec } from "./ContainerSpec";
import { Lifecycle } from "./Lifecycle";


export class ExtraPodSpec extends $dara.Model {
  initContainers?: ContainerSpec[];
  lifecycle?: Lifecycle;
  /**
   * @deprecated
   */
  podAnnotations?: { [key: string]: string };
  /**
   * @deprecated
   */
  podLabels?: { [key: string]: string };
  sharedVolumeMountPaths?: string[];
  sideCarContainers?: ContainerSpec[];
  static names(): { [key: string]: string } {
    return {
      initContainers: 'InitContainers',
      lifecycle: 'Lifecycle',
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

