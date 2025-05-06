// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance } from "./ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCompliance";
import { ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy } from "./ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy";
import { ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags } from "./ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListTags";


export class ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleList extends $dara.Model {
  /**
   * @remarks
   * The ID of the management account to which the rules belong.
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
   * *   ACTIVE: The rule is being used to monitor resource configurations.
   * *   DELETING: The rule is being deleted.
   * *   EVALUATING: The rule is triggered and is being used to monitor resource configurations.
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
  createBy?: ListAggregateConfigRulesResponseBodyConfigRulesConfigRuleListCreateBy;
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
   * *   1: high
   * *   2: medium
   * *   3: low
   * 
   * @example
   * 1
   */
  riskLevel?: number;
  /**
   * @remarks
   * The identifier of the rule.
   * 
   * *   If the rule is a managed rule, the value of this parameter is the name of the managed rule.
   * *   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of a function.
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

