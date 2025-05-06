// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters } from "./CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters";


export class CreateAggregateCompliancePackRequestConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID. If you configure this parameter, Cloud Config adds the rule that has the specified ID to the compliance package.
   * 
   * You need to only configure the `ManagedRuleIdentifier` or `ConfigRuleId` parameter. If you configure both parameters, the value of the `ConfigRuleId` parameter takes precedence. For more information about how to obtain the ID of a rule, see [ListAggregateConfigRules](https://help.aliyun.com/document_detail/264148.html).
   * 
   * @example
   * cr-e918626622af000f****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * eip-bandwidth-limit
   */
  configRuleName?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   */
  configRuleParameters?: CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * Test rule description.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule. Cloud Config automatically creates a rule based on the identifier of the managed rule and adds the rule to the current compliance package.
   * 
   * You need to only configure the `ManagedRuleIdentifier` or `ConfigRuleId` parameter. If you configure both parameters, the value of the `ConfigRuleId` parameter takes precedence. For more information about how to obtain the identifier of a managed rule, see [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html).
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
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
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': CreateAggregateCompliancePackRequestConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      riskLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleParameters)) {
      $dara.Model.validateArray(this.configRuleParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

