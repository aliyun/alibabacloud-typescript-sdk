// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationCustomRulesRequestRules extends $dara.Model {
  /**
   * @remarks
   * The name of the custom rule. The name cannot be empty and can be up to 64 characters in length. It can contain Chinese characters, English letters, digits, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * CustomRule01
   */
  applicationCustomRuleName?: string;
  /**
   * @remarks
   * The list of application IDs associated with the rule. A single rule can be associated with 1 to 200 applications. The IDs cannot be 0, must be unique, and must exist in the built-in application signature library. You can call the ListApplications operation to query the IDs.
   */
  applicationIds?: number[];
  /**
   * @remarks
   * The priority of the rule. Valid values: integers from 1 to 200. A smaller value indicates a higher priority. Priorities must be unique within the same batch and the same template.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The action to perform when the rule is matched. Valid values:
   * - **Allow**: allows the traffic.
   * - **Alert**: monitors the traffic.
   * - **Deny**: blocks the traffic.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRuleName: 'ApplicationCustomRuleName',
      applicationIds: 'ApplicationIds',
      priority: 'Priority',
      ruleAction: 'RuleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRuleName: 'string',
      applicationIds: { 'type': 'array', 'itemType': 'number' },
      priority: 'number',
      ruleAction: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateApplicationCustomRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application template to which the custom rules belong. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The list of custom rules for the application. You can specify up to 100 rules at a time, and the total number of rules in the template after creation must not exceed 100.
   * 
   * This parameter is required.
   */
  rules?: CreateApplicationCustomRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      rules: { 'type': 'array', 'itemType': CreateApplicationCustomRulesRequestRules },
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

