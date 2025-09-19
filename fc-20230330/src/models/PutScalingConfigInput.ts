// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class PutScalingConfigInput extends $dara.Model {
  horizontalScalingPolicies?: ScalingPolicy[];
  minInstances?: number;
  residentPoolId?: string;
  scheduledPolicies?: ScheduledPolicy[];
  static names(): { [key: string]: string } {
    return {
      horizontalScalingPolicies: 'horizontalScalingPolicies',
      minInstances: 'minInstances',
      residentPoolId: 'residentPoolId',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      horizontalScalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
      minInstances: 'number',
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

