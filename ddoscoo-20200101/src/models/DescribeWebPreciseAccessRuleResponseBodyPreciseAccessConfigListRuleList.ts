// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList } from "./DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList";


export class DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleList extends $dara.Model {
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: The requests that match the rule are allowed.
   * *   **block**: The requests that match the rule are blocked.
   * *   **challenge**: Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests that match the rule is implemented.
   * 
   * @example
   * accept
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   */
  conditionList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList[];
  /**
   * @remarks
   * The validity period of the rule. Unit: seconds. This parameter takes effect only when **action** of a rule is **block**. Access requests that match the rule are blocked within the specified validity period of the rule. The value **0** indicates that the whitelist takes effect all the time.
   * 
   * @example
   * 0
   */
  expires?: number;
  /**
   * @remarks
   * The name of the scheduling rule.
   * 
   * @example
   * testrule
   */
  name?: string;
  /**
   * @remarks
   * The source of the rule. Valid values:
   * 
   * *   **manual** (default): manually created.
   * *   **auto**: automatically generated.
   * 
   * @example
   * manual
   */
  owner?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditionList: 'ConditionList',
      expires: 'Expires',
      name: 'Name',
      owner: 'Owner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditionList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigListRuleListConditionList },
      expires: 'number',
      name: 'string',
      owner: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionList)) {
      $dara.Model.validateArray(this.conditionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

