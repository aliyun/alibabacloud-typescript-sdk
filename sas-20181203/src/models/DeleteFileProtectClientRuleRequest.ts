// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileProtectClientRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The alert notification level. Valid values:
   * 
   * - 0: No alerts.
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
   * The list of excluded policy IDs.
   */
  excludeIdList?: number[];
  /**
   * @remarks
   * The list of policy IDs.
   */
  idList?: number[];
  /**
   * @remarks
   * The type of the operating system. Valid values:
   * 
   * - **windows**: Windows.
   * - **linux**: Linux.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The action of the policy. Valid values:
   * 
   * - **monitor**: Alert.
   * - **block**: Block.
   * - **pass**: Allow.
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
   * text-001
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to select all.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  selectAll?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      excludeIdList: 'ExcludeIdList',
      idList: 'IdList',
      platform: 'Platform',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      selectAll: 'SelectAll',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevel: 'number',
      excludeIdList: { 'type': 'array', 'itemType': 'number' },
      idList: { 'type': 'array', 'itemType': 'number' },
      platform: 'string',
      ruleAction: 'string',
      ruleName: 'string',
      selectAll: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.excludeIdList)) {
      $dara.Model.validateArray(this.excludeIdList);
    }
    if(Array.isArray(this.idList)) {
      $dara.Model.validateArray(this.idList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

