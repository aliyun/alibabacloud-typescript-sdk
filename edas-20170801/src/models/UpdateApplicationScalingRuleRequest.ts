// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You can call the ListApplication operation to query the application ID. For more information, see [ListApplication](https://help.aliyun.com/document_detail/149390.html).
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The behavior of the auto scaling. See the example for the data structure.
   * 
   * @example
   * {"scaleUp":{"stabilizationWindowSeconds":"0","selectPolicy":"Max","policies":[{"type":"Pods","value":5,"periodSeconds":15}]},"scaleDown":{"stabilizationWindowSeconds":"300","selectPolicy":"Max","policies":[{"type":"Percent","value":200,"periodSeconds":15}]}}
   */
  scalingBehaviour?: string;
  /**
   * @remarks
   * Specifies whether to enable the auto scaling policy. Valid values:
   * 
   * *   **true**: enables the auto scaling policy.
   * *   **false**: disables the auto scaling policy.
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
   * The name of the auto scaling policy.
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
   * The trigger policy for the auto scaling policy. Set this parameter in the JSON format by using the ScalingRuleTriggerDTO class. For more information, see Additional description of request parameters.
   * 
   * @example
   * ScalingRuleTriggerDTO{......}
   */
  scalingRuleTrigger?: string;
  /**
   * @remarks
   * The type of the auto scaling policy.
   * 
   * *   Set the value to trigger.
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

