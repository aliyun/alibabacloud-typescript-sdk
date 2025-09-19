// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateAutoTagRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to check the rule on the backend. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  checkAll?: boolean;
  /**
   * @remarks
   * The expression of the rule.
   * 
   * @example
   * [{"groups":"0","fieldValueType":"string","field":"internetIp","operator":"equals","value":"12.0.0.1"}]
   */
  expression?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * describe
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * >  You can call the [ListAutoTagRules](~~ListAutoTagRules~~) operation to query the ID.
   * 
   * @example
   * 300566
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
   * The tag specified by the operation type of the rule.
   * 
   * *   If TagType is set to group, set this parameter to {"groupId":XXX}. XXX specifies the ID of the group. You can call the [DescribeGroupStruct](~~DescribeGroupStruct~~) operation to query the ID.
   * *   If TagType is set to tag, set this parameter to {"tagId":XXX}. XXX specifies the ID of the tag. You can call the [DescribeGroupedTags](~~DescribeGroupedTags~~) operation to query the ID.
   * 
   * @example
   * {"tagId":7804789}
   */
  tagContext?: string;
  /**
   * @remarks
   * The operation type of the rule. Valid values:
   * 
   * *   **group**
   * *   **tag**
   * 
   * This parameter is required.
   * 
   * @example
   * tag
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      checkAll: 'CheckAll',
      expression: 'Expression',
      ruleDesc: 'RuleDesc',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      tagContext: 'TagContext',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAll: 'boolean',
      expression: 'string',
      ruleDesc: 'string',
      ruleId: 'number',
      ruleName: 'string',
      tagContext: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

