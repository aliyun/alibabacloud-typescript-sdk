// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ScalingConfigStatus extends $dara.Model {
  /**
   * @remarks
   * The error message that is returned when an instance fails to be created.
   * 
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @remarks
   * The current number of instances.
   * 
   * @example
   * 1
   */
  currentInstances?: number;
  /**
   * @remarks
   * Specifies whether mix mode is enabled.
   * 
   * @example
   * False
   */
  enableMixMode?: boolean;
  /**
   * @remarks
   * Specifies whether on-demand scaling is enabled.
   * 
   * @example
   * True
   */
  enableOnDemandScaling?: boolean;
  /**
   * @remarks
   * The resource identifier of the function.
   * 
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
   */
  functionArn?: string;
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
   * The scheduled scaling policies.
   */
  scheduledPolicies?: ScheduledPolicy[];
  /**
   * @remarks
   * The target number of instances.
   * 
   * @example
   * 10
   */
  targetInstances?: number;
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      currentInstances: 'currentInstances',
      enableMixMode: 'enableMixMode',
      enableOnDemandScaling: 'enableOnDemandScaling',
      functionArn: 'functionArn',
      horizontalScalingPolicies: 'horizontalScalingPolicies',
      minInstances: 'minInstances',
      requestDispatchPolicy: 'requestDispatchPolicy',
      residentPoolId: 'residentPoolId',
      scheduledPolicies: 'scheduledPolicies',
      targetInstances: 'targetInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      currentInstances: 'number',
      enableMixMode: 'boolean',
      enableOnDemandScaling: 'boolean',
      functionArn: 'string',
      horizontalScalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
      minInstances: 'number',
      requestDispatchPolicy: 'string',
      residentPoolId: 'string',
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
      targetInstances: 'number',
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

