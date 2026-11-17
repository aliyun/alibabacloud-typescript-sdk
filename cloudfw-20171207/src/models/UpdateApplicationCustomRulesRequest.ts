// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationCustomRulesRequestRules extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs to be associated. You can specify up to 200 IDs. The IDs cannot be 0 and must exist in the built-in application signature library. The IDs must not overlap with those in RemoveApplicationIds. The combined list cannot be empty and can contain up to 200 IDs.
   */
  addApplicationIds?: number[];
  /**
   * @remarks
   * The ID of the custom application rule to be modified. The rule must exist within the current Alibaba Cloud account.
   * 
   * @example
   * acr-7d2e4f6a8b0c1d3e
   */
  applicationCustomRuleId?: string;
  /**
   * @remarks
   * The name of the custom rule. The name can be up to 64 characters in length and can contain Chinese characters, letters, digits, hyphens (-), underscores (_), and periods (.). If this parameter is not specified or is left empty, the original value is retained.
   * 
   * @example
   * CustomRule02
   */
  applicationCustomRuleName?: string;
  /**
   * @remarks
   * The priority of the rule. This parameter is required. Valid values: integers from 1 to 200. A smaller value indicates a higher priority. Priorities must be unique within the same template. You can swap priorities by deleting and then re-inserting rules.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The list of application IDs to be disassociated. You can specify up to 200 IDs. The IDs must not overlap with those in AddApplicationIds. The combined list cannot be empty and can contain up to 200 IDs.
   */
  removeApplicationIds?: number[];
  /**
   * @remarks
   * The action to perform when the rule is matched. This parameter is required. Valid values:
   * - **Allow**: allows the traffic.
   * - **Alert**: monitors the traffic.
   * - **Deny**: blocks the traffic.
   * 
   * @example
   * Alert
   */
  ruleAction?: string;
  static names(): { [key: string]: string } {
    return {
      addApplicationIds: 'AddApplicationIds',
      applicationCustomRuleId: 'ApplicationCustomRuleId',
      applicationCustomRuleName: 'ApplicationCustomRuleName',
      priority: 'Priority',
      removeApplicationIds: 'RemoveApplicationIds',
      ruleAction: 'RuleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addApplicationIds: { 'type': 'array', 'itemType': 'number' },
      applicationCustomRuleId: 'string',
      applicationCustomRuleName: 'string',
      priority: 'number',
      removeApplicationIds: { 'type': 'array', 'itemType': 'number' },
      ruleAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addApplicationIds)) {
      $dara.Model.validateArray(this.addApplicationIds);
    }
    if(Array.isArray(this.removeApplicationIds)) {
      $dara.Model.validateArray(this.removeApplicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApplicationCustomRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of custom application rules to be modified. You can specify up to 20 rules at a time. Rule IDs in the list must be unique.
   * 
   * This parameter is required.
   */
  rules?: UpdateApplicationCustomRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': UpdateApplicationCustomRulesRequestRules },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

