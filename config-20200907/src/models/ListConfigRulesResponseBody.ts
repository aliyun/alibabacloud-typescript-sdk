// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result of the rule. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of resources that are evaluated based on the rule.
   * 
   * @example
   * 2
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-fdc8626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The name of the compliance package.
   * 
   * @example
   * test-pack-name
   */
  compliancePackName?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      compliancePackName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRulesConfigRuleListTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the rule.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the rule.
   * 
   * @example
   * prod
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRulesConfigRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the account to which the rule belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The type of the remediation template. Only OOS is returned, which indicates CloudOps Orchestration Service.
   * 
   * @example
   * OOS
   */
  automationType?: string;
  /**
   * @remarks
   * The compliance aggregation result of the rule.
   */
  compliance?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
  /**
   * @remarks
   * The ARN of the rule.
   * 
   * @example
   * acs:config::100931896542****:rule/cr-fdc8626622af00f9****
   */
  configRuleArn?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * *   ACTIVE: The rule is enabled.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is being used to evaluate resource configurations.
   * *   INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The information about the creation of the rule.
   */
  createBy?: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  createDate?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * The description of the test rule.
   */
  description?: string;
  /**
   * @remarks
   * The types of resources evaluated by the rule. Multiple resource types are separated with commas (,).
   * 
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the resources that do not comply with the rule. Valid values:
   * 
   * *   1: high.
   * *   2: medium.
   * *   3: low.
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of the rule.
   * 
   * @example
   * eip-bandwidth-limit
   */
  sourceIdentifier?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   CUSTOM_FC: a custom rule.
   * *   ALIYUN: a managed rule.
   * 
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
  /**
   * @remarks
   * The tags of the rule.
   */
  tags?: ListConfigRulesResponseBodyConfigRulesConfigRuleListTags[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      automationType: 'AutomationType',
      compliance: 'Compliance',
      configRuleArn: 'ConfigRuleArn',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleState: 'ConfigRuleState',
      createBy: 'CreateBy',
      createDate: 'CreateDate',
      description: 'Description',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
      sourceIdentifier: 'SourceIdentifier',
      sourceOwner: 'SourceOwner',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      automationType: 'string',
      compliance: ListConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createBy: ListConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      createDate: 'string',
      description: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tags: { 'type': 'array', 'itemType': ListConfigRulesResponseBodyConfigRulesConfigRuleListTags },
    };
  }

  validate() {
    if(this.compliance && typeof (this.compliance as any).validate === 'function') {
      (this.compliance as any).validate();
    }
    if(this.createBy && typeof (this.createBy as any).validate === 'function') {
      (this.createBy as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBodyConfigRules extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  configRuleList?: ListConfigRulesResponseBodyConfigRulesConfigRuleList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configRuleList: 'ConfigRuleList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleList: { 'type': 'array', 'itemType': ListConfigRulesResponseBodyConfigRulesConfigRuleList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleList)) {
      $dara.Model.validateArray(this.configRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the rules.
   */
  configRules?: ListConfigRulesResponseBodyConfigRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC3A7E12-72E6-5CC9-A5C1-D8D8919829A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configRules: 'ConfigRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRules: ListConfigRulesResponseBodyConfigRules,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configRules && typeof (this.configRules as any).validate === 'function') {
      (this.configRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

