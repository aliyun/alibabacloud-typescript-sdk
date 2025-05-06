// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters } from "./GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters";


export class GetCompliancePackResponseBodyCompliancePackConfigRules extends $dara.Model {
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * cr-a260626622af0005****
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
  configRuleParameters?: GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * example-description
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * eip-bandwidth-limit
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The type of the resource evaluated based on the rule. Separate multiple resource types with commas (,).
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
  static names(): { [key: string]: string } {
    return {
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
      configRuleParameters: 'ConfigRuleParameters',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleId: 'string',
      configRuleName: 'string',
      configRuleParameters: { 'type': 'array', 'itemType': GetCompliancePackResponseBodyCompliancePackConfigRulesConfigRuleParameters },
      description: 'string',
      managedRuleIdentifier: 'string',
      resourceTypesScope: 'string',
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

