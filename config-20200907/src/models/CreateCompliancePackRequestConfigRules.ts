// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateCompliancePackRequestConfigRulesConfigRuleParameters } from "./CreateCompliancePackRequestConfigRulesConfigRuleParameters";


export class CreateCompliancePackRequestConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID. If you specify this parameter, Cloud Config adds the rule that has the specified ID to the compliance package.
   * 
   * You need to only specify `ManagedRuleIdentifier` or `ConfigRuleId`. If you specify both parameters, Cloud Config adds a rule based on the value of `ConfigRuleId`. You can call the [ListConfigRules](https://help.aliyun.com/document_detail/169607.html) operation to obtain the rule ID.
   * 
   * @example
   * cr-e918626622af000f****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * eip-bandwidth-limit
   */
  configRuleName?: string;
  /**
   * @remarks
   * The input parameters of the rule.
   */
  configRuleParameters?: CreateCompliancePackRequestConfigRulesConfigRuleParameters[];
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
   * The identifier of the managed rule. Cloud Config automatically creates a managed rule based on the specified identifier and adds the rule to the compliance package.
   * 
   * You need to only specify `ManagedRuleIdentifier` or `ConfigRuleId`. If you specify both parameters, Cloud Config adds a rule based on the value of `ConfigRuleId`. You can call the [ListCompliancePackTemplates](https://help.aliyun.com/document_detail/261176.html) operation to obtain the identifier of the managed rule.
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
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
      configRuleParameters: { 'type': 'array', 'itemType': CreateCompliancePackRequestConfigRulesConfigRuleParameters },
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

