// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert rule group.
   * 
   * @example
   * sample
   */
  alertRuleGroupName?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * sample
   */
  alertRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleGroupName: 'alert_rule_group_name',
      alertRuleName: 'alert_rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleGroupName: 'string',
      alertRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

