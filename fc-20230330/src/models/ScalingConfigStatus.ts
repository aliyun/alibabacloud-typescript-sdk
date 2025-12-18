// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ScalingConfigStatus extends $dara.Model {
  currentError?: string;
  currentInstances?: number;
  enableMixMode?: boolean;
  enableOnDemandScaling?: boolean;
  functionArn?: string;
  horizontalScalingPolicies?: ScalingPolicy[];
  minInstances?: number;
  requestDispatchPolicy?: string;
  residentPoolId?: string;
  scheduledPolicies?: ScheduledPolicy[];
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

