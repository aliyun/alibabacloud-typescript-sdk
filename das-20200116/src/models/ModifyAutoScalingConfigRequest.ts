// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAutoScalingConfigRequestBandwidth } from "./ModifyAutoScalingConfigRequestBandwidth";
import { ModifyAutoScalingConfigRequestResource } from "./ModifyAutoScalingConfigRequestResource";
import { ModifyAutoScalingConfigRequestShard } from "./ModifyAutoScalingConfigRequestShard";
import { ModifyAutoScalingConfigRequestSpec } from "./ModifyAutoScalingConfigRequestSpec";
import { ModifyAutoScalingConfigRequestStorage } from "./ModifyAutoScalingConfigRequestStorage";


export class ModifyAutoScalingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item of the bandwidth auto scaling feature.
   */
  bandwidth?: ModifyAutoScalingConfigRequestBandwidth;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The configuration item of the resource auto scaling feature.
   */
  resource?: ModifyAutoScalingConfigRequestResource;
  /**
   * @remarks
   * The configuration item of the shard auto scaling feature.
   */
  shard?: ModifyAutoScalingConfigRequestShard;
  /**
   * @remarks
   * The configuration item of the specification auto scaling feature.
   */
  spec?: ModifyAutoScalingConfigRequestSpec;
  /**
   * @remarks
   * The configuration item of the automatic storage expansion feature.
   */
  storage?: ModifyAutoScalingConfigRequestStorage;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      instanceId: 'InstanceId',
      resource: 'Resource',
      shard: 'Shard',
      spec: 'Spec',
      storage: 'Storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: ModifyAutoScalingConfigRequestBandwidth,
      instanceId: 'string',
      resource: ModifyAutoScalingConfigRequestResource,
      shard: ModifyAutoScalingConfigRequestShard,
      spec: ModifyAutoScalingConfigRequestSpec,
      storage: ModifyAutoScalingConfigRequestStorage,
    };
  }

  validate() {
    if(this.bandwidth && typeof (this.bandwidth as any).validate === 'function') {
      (this.bandwidth as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.shard && typeof (this.shard as any).validate === 'function') {
      (this.shard as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

