// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * linux
   */
  platform?: string;
  /**
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @example
   * tetsRule
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

