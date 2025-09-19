// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInterceptionRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](https://help.aliyun.com/document_detail/182997.html) operation to query the IDs of container clusters.
   * 
   * @example
   * c17ef568f81884cdab402decd5fcd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The destination objects of the rule. The following parameters are included:
   * 
   * *   targetId: the ID of the destination object. You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the ID.
   * *   ports: the destination port ranges.
   * 
   * @example
   * {"targetId":600069,"ports":["80/8088"]}
   */
  dstTargetShrink?: string;
  /**
   * @remarks
   * The interception mode. Valid values:
   * 
   * *   **1**: block
   * *   **2**: alert
   * *   **3**: allow
   * 
   * @example
   * 1
   */
  interceptType?: number;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 500018
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * tetsRule
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The source object of the rule. The following parameters are included:
   * 
   * *   targetId: the ID of the source object. You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the ID.
   * 
   * @example
   * {"targetId":400989}
   */
  srcTargetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dstTargetShrink: 'DstTarget',
      interceptType: 'InterceptType',
      orderIndex: 'OrderIndex',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      srcTargetShrink: 'SrcTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dstTargetShrink: 'string',
      interceptType: 'number',
      orderIndex: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      srcTargetShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

