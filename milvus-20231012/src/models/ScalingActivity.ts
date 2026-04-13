// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingActivity extends $dara.Model {
  componentTypes?: string;
  description?: string;
  endTime?: string;
  instanceId?: string;
  policyType?: string;
  scalingActivityId?: string;
  scalingActivityState?: string;
  scalingPolicyId?: string;
  scalingRuleDetail?: string;
  scalingRuleId?: string;
  scalingRuleName?: string;
  startTime?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      componentTypes: 'componentTypes',
      description: 'description',
      endTime: 'endTime',
      instanceId: 'instanceId',
      policyType: 'policyType',
      scalingActivityId: 'scalingActivityId',
      scalingActivityState: 'scalingActivityState',
      scalingPolicyId: 'scalingPolicyId',
      scalingRuleDetail: 'scalingRuleDetail',
      scalingRuleId: 'scalingRuleId',
      scalingRuleName: 'scalingRuleName',
      startTime: 'startTime',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentTypes: 'string',
      description: 'string',
      endTime: 'string',
      instanceId: 'string',
      policyType: 'string',
      scalingActivityId: 'string',
      scalingActivityState: 'string',
      scalingPolicyId: 'string',
      scalingRuleDetail: 'string',
      scalingRuleId: 'string',
      scalingRuleName: 'string',
      startTime: 'string',
      timeZone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

