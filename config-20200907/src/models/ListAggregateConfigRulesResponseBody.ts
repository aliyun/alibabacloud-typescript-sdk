// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance extends $dara.Model {
  /**
   * @remarks
   * The summary of the compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule does not apply to the resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of resources that are evaluated based on the summary of the compliance evaluation.
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

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * @example
   * ca-f632626622af0079****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The name of the account group.
   * 
   * @example
   * Test_Group
   */
  aggregatorName?: string;
  /**
   * @remarks
   * The ID of the compliance package.
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
   * The name of the compliance package.
   */
  compliancePackName?: string;
  /**
   * @remarks
   * The ID of the management account that created the rule.
   * 
   * @example
   * 100931896542****
   */
  creatorId?: string;
  /**
   * @remarks
   * The name of the management account that created the rule.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The type of the creator. The value is fixed to AGGREGATOR.
   * 
   * @example
   * AGGREGATOR
   */
  creatorType?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      aggregatorName: 'AggregatorName',
      compliancePackId: 'CompliancePackId',
      compliancePackName: 'CompliancePackName',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      creatorType: 'CreatorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      aggregatorName: 'string',
      compliancePackId: 'string',
      compliancePackName: 'string',
      creatorId: 'string',
      creatorName: 'string',
      creatorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the rule belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The remediation type. The value is fixed to OOS, which indicates Operation Orchestration Service.
   * 
   * @example
   * OOS
   */
  automationType?: string;
  /**
   * @remarks
   * The compliance evaluation result.
   */
  compliance?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance;
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
   * The ID of the rule.
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
   * The name of the rule.
   */
  configRuleName?: string;
  /**
   * @remarks
   * The state of the rule. Valid values:
   * 
   * - ACTIVE: The rule is enabled.
   * 
   * - DELETING: The rule is being deleted.
   * 
   * - EVALUATING: The rule is being evaluated.
   * 
   * - INACTIVE: The rule is disabled.
   * 
   * @example
   * ACTIVE
   */
  configRuleState?: string;
  /**
   * @remarks
   * The information about the creator of the rule.
   */
  createBy?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
  /**
   * @remarks
   * The time when the rule was created. The time is displayed in UTC+8.
   * 
   * @example
   * 2025-09-19T15:51:00
   */
  createDate?: string;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * The description of the rule.
   */
  description?: string;
  /**
   * @remarks
   * The types of the resources that are evaluated by the rule. Multiple resource types are separated by commas (,).
   * 
   * @example
   * ACS::EIP::EipAddress
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the rule. Valid values:
   * 
   * - 1: high
   * 
   * - 2: medium
   * 
   * - 3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * - If the rule is a managed rule, the value of this parameter is the identifier of the rule template.
   * 
   * - If the rule is a custom rule, the value of this parameter is the ARN of the function.
   * 
   * @example
   * eip-bandwidth-limit
   */
  sourceIdentifier?: string;
  /**
   * @remarks
   * The owner of the rule. Valid values:
   * 
   * - CUSTOM_FC: a custom rule.
   * 
   * - ALIYUN: a managed rule.
   * 
   * @example
   * ALIYUN
   */
  sourceOwner?: string;
  /**
   * @remarks
   * The tags of the rule.
   */
  tags?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags[];
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
      compliance: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance,
      configRuleArn: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleState: 'string',
      createBy: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy,
      createDate: 'string',
      description: 'string',
      resourceTypesScope: 'string',
      riskLevel: 'number',
      sourceIdentifier: 'string',
      sourceOwner: 'string',
      tags: { 'type': 'array', 'itemType': ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags },
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

export class ListAggregateConfigRulesResponseBodyConfigRules extends $dara.Model {
  /**
   * @remarks
   * The details of the rules.
   */
  configRuleList?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList[];
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
   * The number of entries returned on each page.
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
      configRuleList: { 'type': 'array', 'itemType': ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList },
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

export class ListAggregateConfigRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rules.
   */
  configRules?: ListAggregateConfigRulesResponseBodyConfigRules;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 22EF8287-2C9A-4F1F-80A6-CEFA7612689D
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
      configRules: ListAggregateConfigRulesResponseBodyConfigRules,
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

