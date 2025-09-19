// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSystemClientRulesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * 17
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

export class ListSystemClientRulesResponseBodyRuleListPolicies extends $dara.Model {
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

export class ListSystemClientRulesResponseBodyRuleList extends $dara.Model {
  /**
   * @remarks
   * The name of the aggregation type for the system defense rule.
   * 
   * @example
   * Initial entry
   */
  aggregationName?: string;
  /**
   * @remarks
   * The description of the system defense rule.
   * 
   * @example
   * Supports alerting or blocking of images that have high-risk vulnerabilities\\*\\*\\*\\*
   */
  description?: string;
  /**
   * @remarks
   * The type of the OS. Valid values:
   * 
   * *   **windows**: Windows
   * *   **linux**: Linux
   * *   **all**: all types
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * An array that consists of policies.
   */
  policies?: ListSystemClientRulesResponseBodyRuleListPolicies[];
  /**
   * @remarks
   * The ID of the system defense rule.
   * 
   * @example
   * 30****
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the system defense rule.
   * 
   * @example
   * Rule\\*\\*\\*\\*
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the system defense rule. Valid values:
   * 
   * *   **1**: alihips, process-specific defense
   * *   **2**: alinet, network-specific defense
   * 
   * @example
   * alihips
   */
  ruleType?: number;
  /**
   * @remarks
   * The status of the system defense rule. Valid values:
   * 
   * *   **online**: enabled
   * *   **offline**: disabled
   * 
   * @example
   * online
   */
  status?: number;
  /**
   * @remarks
   * Whether the current rule switch takes effect. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  switchEnable?: boolean;
  /**
   * @remarks
   * The switch ID of the system defense rule.
   * 
   * @example
   * USER-ENABLE-SWITCH-TYPE_****
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationName: 'AggregationName',
      description: 'Description',
      platform: 'Platform',
      policies: 'Policies',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      status: 'Status',
      switchEnable: 'SwitchEnable',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationName: 'string',
      description: 'string',
      platform: 'string',
      policies: { 'type': 'array', 'itemType': ListSystemClientRulesResponseBodyRuleListPolicies },
      ruleId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      status: 'number',
      switchEnable: 'boolean',
      switchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemClientRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListSystemClientRulesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C43CA30F-EF67-51BB-8C95-F31B8303****
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the system defense rules.
   */
  ruleList?: ListSystemClientRulesResponseBodyRuleList[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: ListSystemClientRulesResponseBodyPageInfo,
      requestId: 'string',
      ruleList: { 'type': 'array', 'itemType': ListSystemClientRulesResponseBodyRuleList },
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

