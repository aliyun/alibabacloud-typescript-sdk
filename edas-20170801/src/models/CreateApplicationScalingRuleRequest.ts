// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. To get this ID, call the [ListApplication](https://help.aliyun.com/document_detail/149390.html) operation.
   * 
   * @example
   * 78194c76-3dca-418e-a263-cccd1ab4****
   */
  appId?: string;
  /**
   * @remarks
   * The configuration for custom scaling behaviors. For more information about the data structure, see the example.
   * 
   * @example
   * {
   *       "scaleUp": {
   *             "stabilizationWindowSeconds": "0",
   *             "selectPolicy": "Max",
   *             "policies": [
   *                   {
   *                         "type": "Pods",
   *                         "value": 5,
   *                         "periodSeconds": 15
   *                   }
   *             ]
   *       },
   *       "scaleDown": {
   *             "stabilizationWindowSeconds": "300",
   *             "selectPolicy": "Max",
   *             "policies": [
   *                   {
   *                         "type": "Percent",
   *                         "value": 200,
   *                         "periodSeconds": 15
   *                   }
   *             ]
   *       }
   * }
   */
  scalingBehaviour?: string;
  /**
   * @remarks
   * Specifies whether to enable the Auto Scaling rule.
   * 
   * - **true**: enables the rule.
   * 
   * - **false**: disables the rule.
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
   * The name of the Auto Scaling rule. The name must start with a lowercase letter. It can contain lowercase letters, digits, and hyphens (-). The name must be 1 to 32 characters long.
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
   * The trigger policy. Set this parameter to a JSON string of the ScalingRuleTriggerDTO object. For more information about the format, see Additional information about request parameters.
   * 
   * @example
   * ScalingRuleTriggerDTO{......}
   */
  scalingRuleTrigger?: string;
  /**
   * @remarks
   * The type of the Auto Scaling rule. Only the **trigger** type is supported.
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

