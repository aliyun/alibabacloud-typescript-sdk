// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: no alert
   * 
   * - 1: reminder
   * 
   * - 2: suspicious
   * 
   * - 3: high-risk.
   * 
   * @example
   * 0
   */
  alertLevel?: number;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The operating system type. Valid values:
   * 
   * - **windows**: Windows
   * - **linux**: Linux.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The rule action. Valid values:
   * 
   * - **block**: blocks the request.
   * 
   * - **monitor**: monitors the request.
   * 
   * - **pass**: allows the request.
   * 
   * @example
   * pass
   */
  ruleAction?: string;
  /**
   * @remarks
   * The rule name.
   * 
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

