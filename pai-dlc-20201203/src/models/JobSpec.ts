// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignNodeSpec } from "./AssignNodeSpec";
import { AutoScalingSpec } from "./AutoScalingSpec";
import { ExtraPodSpec } from "./ExtraPodSpec";
import { ImageConfig } from "./ImageConfig";
import { LocalMountSpec } from "./LocalMountSpec";
import { ResourceConfig } from "./ResourceConfig";
import { ServiceSpec } from "./ServiceSpec";
import { SpotSpec } from "./SpotSpec";


export class JobSpec extends $dara.Model {
  assignNodeSpec?: AssignNodeSpec;
  autoScalingSpec?: AutoScalingSpec;
  /**
   * @example
   * ecs.c6.large
   */
  ecsSpec?: string;
  extraPodSpec?: ExtraPodSpec;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-dlc/tensorflow-training:1.12.2PAI-cpu-py27-ubuntu16.04
   */
  image?: string;
  imageConfig?: ImageConfig;
  isCheif?: boolean;
  localMountSpecs?: LocalMountSpec[];
  /**
   * @example
   * 1
   */
  podCount?: number;
  resourceConfig?: ResourceConfig;
  restartPolicy?: string;
  serviceSpec?: ServiceSpec;
  spotSpec?: SpotSpec;
  /**
   * @example
   * Worker
   */
  type?: string;
  /**
   * @example
   * false
   * 
   * @deprecated
   */
  useSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      assignNodeSpec: 'AssignNodeSpec',
      autoScalingSpec: 'AutoScalingSpec',
      ecsSpec: 'EcsSpec',
      extraPodSpec: 'ExtraPodSpec',
      image: 'Image',
      imageConfig: 'ImageConfig',
      isCheif: 'IsCheif',
      localMountSpecs: 'LocalMountSpecs',
      podCount: 'PodCount',
      resourceConfig: 'ResourceConfig',
      restartPolicy: 'RestartPolicy',
      serviceSpec: 'ServiceSpec',
      spotSpec: 'SpotSpec',
      type: 'Type',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignNodeSpec: AssignNodeSpec,
      autoScalingSpec: AutoScalingSpec,
      ecsSpec: 'string',
      extraPodSpec: ExtraPodSpec,
      image: 'string',
      imageConfig: ImageConfig,
      isCheif: 'boolean',
      localMountSpecs: { 'type': 'array', 'itemType': LocalMountSpec },
      podCount: 'number',
      resourceConfig: ResourceConfig,
      restartPolicy: 'string',
      serviceSpec: ServiceSpec,
      spotSpec: SpotSpec,
      type: 'string',
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
    }
    if(this.autoScalingSpec && typeof (this.autoScalingSpec as any).validate === 'function') {
      (this.autoScalingSpec as any).validate();
    }
    if(this.extraPodSpec && typeof (this.extraPodSpec as any).validate === 'function') {
      (this.extraPodSpec as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(Array.isArray(this.localMountSpecs)) {
      $dara.Model.validateArray(this.localMountSpecs);
    }
    if(this.resourceConfig && typeof (this.resourceConfig as any).validate === 'function') {
      (this.resourceConfig as any).validate();
    }
    if(this.serviceSpec && typeof (this.serviceSpec as any).validate === 'function') {
      (this.serviceSpec as any).validate();
    }
    if(this.spotSpec && typeof (this.spotSpec as any).validate === 'function') {
      (this.spotSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

