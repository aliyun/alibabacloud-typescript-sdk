// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class PutScalingConfigInput extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the mix mode.
   * 
   * @example
   * False
   */
  enableMixMode?: boolean;
  /**
   * @remarks
   * Specifies whether to enable on-demand scaling.
   * 
   * @example
   * True
   */
  enableOnDemandScaling?: boolean;
  /**
   * @remarks
   * The horizontal scaling policies.
   */
  horizontalScalingPolicies?: ScalingPolicy[];
  /**
   * @remarks
   * The minimum number of instances.
   * 
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @remarks
   * The request dispatch policy.
   * 
   * @example
   * Balanced
   */
  requestDispatchPolicy?: string;
  /**
   * @remarks
   * The ID of the resident resource pool.
   * 
   * @example
   * fc-pool-a2b664c1f87171j4******
   */
  residentPoolId?: string;
  /**
   * @remarks
   * The scheduled elastic policies.
   */
  scheduledPolicies?: ScheduledPolicy[];
  static names(): { [key: string]: string } {
    return {
      enableMixMode: 'enableMixMode',
      enableOnDemandScaling: 'enableOnDemandScaling',
      horizontalScalingPolicies: 'horizontalScalingPolicies',
      minInstances: 'minInstances',
      requestDispatchPolicy: 'requestDispatchPolicy',
      residentPoolId: 'residentPoolId',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMixMode: 'boolean',
      enableOnDemandScaling: 'boolean',
      horizontalScalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
      minInstances: 'number',
      requestDispatchPolicy: 'string',
      residentPoolId: 'string',
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.horizontalScalingPolicies)) {
      $dara.Model.validateArray(this.horizontalScalingPolicies);
    }
    if(Array.isArray(this.scheduledPolicies)) {
      $dara.Model.validateArray(this.scheduledPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

