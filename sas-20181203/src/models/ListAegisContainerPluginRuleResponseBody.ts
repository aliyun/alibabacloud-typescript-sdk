// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAegisContainerPluginRuleResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 69
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAegisContainerPluginRuleResponseBodyRuleListPolicies extends $dara.Model {
  /**
   * @remarks
   * The policy key.
   * 
   * @example
   * system_auto_****
   */
  policyKey?: string;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * System self-starting task\\*\\*\\*\\*
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyKey: 'PolicyKey',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyKey: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAegisContainerPluginRuleResponseBodyRuleList extends $dara.Model {
  /**
   * @remarks
   * The time when the rule was created. Unit: milliseconds.
   * 
   * @example
   * 1676355025000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the rule was modified. Unit: milliseconds.
   * 
   * @example
   * 1681985833000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The action of the rule. Valid values:
   * 
   * *   **1**: Alert
   * *   **2**: Block
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * An array that consists of policies.
   */
  policies?: ListAegisContainerPluginRuleResponseBodyRuleListPolicies[];
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * system_call
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 30****
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-18****
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the rule template. The ListSystemClientRules operation returns the ID of a rule template.
   * 
   * @example
   * 868**
   */
  ruleTemplateId?: string;
  /**
   * @remarks
   * The name of the rule template.
   * 
   * @example
   * system_call
   */
  ruleTemplateName?: string;
  /**
   * @remarks
   * The fields in the value of the rule subtype.
   */
  selectedPolicy?: string[];
  /**
   * @remarks
   * The switch ID of the rule.
   * 
   * @example
   * USER-ENABLE-SWITCH-TYPE_****
   */
  switchId?: string;
  /**
   * @remarks
   * The images that are added to the whitelist of the rule.
   */
  whiteImages?: string[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mode: 'Mode',
      policies: 'Policies',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleTemplateId: 'RuleTemplateId',
      ruleTemplateName: 'RuleTemplateName',
      selectedPolicy: 'SelectedPolicy',
      switchId: 'SwitchId',
      whiteImages: 'WhiteImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      mode: 'number',
      policies: { 'type': 'array', 'itemType': ListAegisContainerPluginRuleResponseBodyRuleListPolicies },
      ruleDescription: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleTemplateId: 'string',
      ruleTemplateName: 'string',
      selectedPolicy: { 'type': 'array', 'itemType': 'string' },
      switchId: 'string',
      whiteImages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    if(Array.isArray(this.selectedPolicy)) {
      $dara.Model.validateArray(this.selectedPolicy);
    }
    if(Array.isArray(this.whiteImages)) {
      $dara.Model.validateArray(this.whiteImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAegisContainerPluginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAegisContainerPluginRuleResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The rules.
   */
  ruleList?: ListAegisContainerPluginRuleResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListAegisContainerPluginRuleResponseBodyPageInfo,
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': ListAegisContainerPluginRuleResponseBodyRuleList },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

