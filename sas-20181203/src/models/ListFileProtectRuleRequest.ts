// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: No alert.
   * 
   * - 1: Reminder.
   * 
   * - 2: Suspicious.
   * 
   * - 3: High-risk.
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The action of the rule on the client. Valid values:
   * 
   * - pass: allow
   * 
   * - alert: alert
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      platform: 'Platform',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      currentPage: 'number',
      pageSize: 'number',
      platform: 'string',
      ruleAction: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

