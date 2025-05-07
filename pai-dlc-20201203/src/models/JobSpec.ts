// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssignNodeSpec } from "./AssignNodeSpec";
import { ExtraPodSpec } from "./ExtraPodSpec";
import { ImageConfig } from "./ImageConfig";
import { ResourceConfig } from "./ResourceConfig";
import { SpotSpec } from "./SpotSpec";


export class JobSpec extends $dara.Model {
  assignNodeSpec?: AssignNodeSpec;
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
  /**
   * @example
   * 1
   */
  podCount?: number;
  resourceConfig?: ResourceConfig;
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
      ecsSpec: 'EcsSpec',
      extraPodSpec: 'ExtraPodSpec',
      image: 'Image',
      imageConfig: 'ImageConfig',
      podCount: 'PodCount',
      resourceConfig: 'ResourceConfig',
      spotSpec: 'SpotSpec',
      type: 'Type',
      useSpotInstance: 'UseSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignNodeSpec: AssignNodeSpec,
      ecsSpec: 'string',
      extraPodSpec: ExtraPodSpec,
      image: 'string',
      imageConfig: ImageConfig,
      podCount: 'number',
      resourceConfig: ResourceConfig,
      spotSpec: SpotSpec,
      type: 'string',
      useSpotInstance: 'boolean',
    };
  }

  validate() {
    if(this.assignNodeSpec && typeof (this.assignNodeSpec as any).validate === 'function') {
      (this.assignNodeSpec as any).validate();
    }
    if(this.extraPodSpec && typeof (this.extraPodSpec as any).validate === 'function') {
      (this.extraPodSpec as any).validate();
    }
    if(this.imageConfig && typeof (this.imageConfig as any).validate === 'function') {
      (this.imageConfig as any).validate();
    }
    if(this.resourceConfig && typeof (this.resourceConfig as any).validate === 'function') {
      (this.resourceConfig as any).validate();
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

