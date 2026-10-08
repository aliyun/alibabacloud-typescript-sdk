// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. Call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation to obtain this ID.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The configuration of custom scaling behaviors. For more information about the data structure, see the example.
   * 
   * @example
   * {"scaleUp":{"stabilizationWindowSeconds":"0","selectPolicy":"Max","policies":[{"type":"Pods","value":5,"periodSeconds":15}]},"scaleDown":{"stabilizationWindowSeconds":"300","selectPolicy":"Max","policies":[{"type":"Percent","value":200,"periodSeconds":15}]}}
   */
  scalingBehaviour?: string;
  /**
   * @remarks
   * The status of the Auto Scaling policy.
   * 
   * - **true**: enabled
   * 
   * - **false**: disabled
   * 
   * @example
   * true
   */
  scalingRuleEnable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  scalingRuleMetric?: string;
  /**
   * @remarks
   * The name of the Auto Scaling policy.
   * 
   * @example
   * cpu-trigger
   */
  scalingRuleName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  scalingRuleTimer?: string;
  /**
   * @remarks
   * The trigger policy, which is a JSON string of a ScalingRuleTriggerDTO object. For more information about the format, see the Additional information about request parameters section.
   * 
   * @example
   * ScalingRuleTriggerDTO{......}
   */
  scalingRuleTrigger?: string;
  /**
   * @remarks
   * The type of the Auto Scaling policy. Only the following type is supported:
   * 
   * - trigger: a trigger-based policy.
   * 
   * @example
   * trigger
   */
  scalingRuleType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      scalingBehaviour: 'ScalingBehaviour',
      scalingRuleEnable: 'ScalingRuleEnable',
      scalingRuleMetric: 'ScalingRuleMetric',
      scalingRuleName: 'ScalingRuleName',
      scalingRuleTimer: 'ScalingRuleTimer',
      scalingRuleTrigger: 'ScalingRuleTrigger',
      scalingRuleType: 'ScalingRuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      scalingBehaviour: 'string',
      scalingRuleEnable: 'boolean',
      scalingRuleMetric: 'string',
      scalingRuleName: 'string',
      scalingRuleTimer: 'string',
      scalingRuleTrigger: 'string',
      scalingRuleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

