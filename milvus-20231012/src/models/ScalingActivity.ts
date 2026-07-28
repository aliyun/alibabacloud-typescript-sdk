// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingActivity extends $dara.Model {
  /**
   * @remarks
   * The types of components involved in the scaling activity.
   */
  componentTypes?: string;
  /**
   * @remarks
   * The description of the scaling activity.
   */
  description?: string;
  /**
   * @remarks
   * The end time of the scaling activity.
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the scaling policy.
   */
  policyType?: string;
  /**
   * @remarks
   * The ID of the scaling activity.
   */
  scalingActivityId?: string;
  /**
   * @remarks
   * The state of the scaling activity.
   */
  scalingActivityState?: string;
  /**
   * @remarks
   * The ID of the scaling policy.
   */
  scalingPolicyId?: string;
  /**
   * @remarks
   * The details of the scaling rule.
   */
  scalingRuleDetail?: string;
  /**
   * @remarks
   * The ID of the scaling rule.
   */
  scalingRuleId?: string;
  /**
   * @remarks
   * The name of the scaling rule that triggered the activity.
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * The start time of the scaling activity.
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone of the scaling activity.
   */
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

