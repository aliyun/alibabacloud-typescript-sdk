// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScalingPolicy } from "./ScalingPolicy";
import { ScheduledPolicy } from "./ScheduledPolicy";


export class PutElasticConfigInput extends $dara.Model {
  minInstances?: number;
  residentPoolId?: string;
  scalingPolicies?: ScalingPolicy[];
  scheduledPolicies?: ScheduledPolicy[];
  static names(): { [key: string]: string } {
    return {
      minInstances: 'minInstances',
      residentPoolId: 'residentPoolId',
      scalingPolicies: 'scalingPolicies',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minInstances: 'number',
      residentPoolId: 'string',
      scalingPolicies: { 'type': 'array', 'itemType': ScalingPolicy },
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
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

