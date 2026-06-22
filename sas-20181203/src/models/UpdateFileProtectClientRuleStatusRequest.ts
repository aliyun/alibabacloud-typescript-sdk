// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFileProtectClientRuleStatusRequest extends $dara.Model {
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
   * The list of excluded rule IDs.
   */
  excludeIdList?: number[];
  /**
   * @remarks
   * The list of rule IDs.
   */
  idList?: number[];
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
   * - **block**: Block.
   * 
   * - **monitor**: Monitor.
   * 
   * - **pass**: Allow.
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
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to select all rules.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  selectAll?: boolean;
  /**
   * @remarks
   * The policy status. Valid values:
   * - **0**: disabled.
   * - **1**: enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alertLevel: 'AlertLevel',
      excludeIdList: 'ExcludeIdList',
      idList: 'IdList',
      platform: 'Platform',
      ruleAction: 'RuleAction',
      ruleName: 'RuleName',
      selectAll: 'SelectAll',
      status: 'Status',
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
      status: 'number',
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

