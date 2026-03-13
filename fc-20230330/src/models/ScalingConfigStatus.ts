// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ScalingConfigStatus extends $dara.Model {
  /**
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @example
   * 1
   */
  currentInstances?: number;
  /**
   * @example
   * False
   */
  enableMixMode?: boolean;
  /**
   * @example
   * True
   */
  enableOnDemandScaling?: boolean;
  /**
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
   */
  functionArn?: string;
  horizontalScalingPolicies?: ScalingPolicy[];
  /**
   * @example
   * 1
   */
  minInstances?: number;
  /**
   * @example
   * Balanced
   */
  requestDispatchPolicy?: string;
  /**
   * @example
   * fc-pool-a2b664c1f87171j4******
   */
  residentPoolId?: string;
  scheduledPolicies?: ScheduledPolicy[];
  /**
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

