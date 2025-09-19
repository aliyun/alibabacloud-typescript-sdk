// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ElasticConfigStatus extends $dara.Model {
  currentError?: string;
  currentInstances?: number;
  functionArn?: string;
  minInstances?: number;
  residentPoolId?: string;
  scalingPolicies?: ScalingPolicy[];
  scheduledPolicies?: ScheduledPolicy[];
  targetInstances?: number;
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      currentInstances: 'currentInstances',
      functionArn: 'functionArn',
      minInstances: 'minInstances',
      residentPoolId: 'residentPoolId',
      scalingPolicies: 'scalingPolicies',
      scheduledPolicies: 'scheduledPolicies',
      targetInstances: 'targetInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      currentInstances: 'number',
      functionArn: 'string',
      minInstances: 'number',
      residentPoolId: 'string',
      scalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
      targetInstances: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scalingPolicies)) {
      $dara.Model.validateArray(this.scalingPolicies);
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

