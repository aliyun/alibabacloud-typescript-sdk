// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class PutScalingConfigInput extends $dara.Model {
  enableMixMode?: boolean;
  enableOnDemandScaling?: boolean;
  horizontalScalingPolicies?: ScalingPolicy[];
  minInstances?: number;
  requestDispatchPolicy?: string;
  residentPoolId?: string;
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

