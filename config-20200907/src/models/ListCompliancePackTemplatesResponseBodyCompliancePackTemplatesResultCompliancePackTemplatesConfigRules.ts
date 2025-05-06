// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters } from "./ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters";


export class ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRules extends $dara.Model {
  /**
   * @remarks
   * The input parameter of the managed rule.
   */
  configRuleParameters?: ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters[];
  /**
   * @remarks
   * The description of the regulation. This parameter is available only for regulation compliance packages.
   * 
   * @example
   * No classic networks exist.
   */
  controlDescription?: string;
  /**
   * @remarks
   * The regulation ID.
   * 
   * >  This parameter is available only for regulation compliance packages.
   * 
   * @example
   * 3.1
   */
  controlId?: string;
  /**
   * @remarks
   * Indicates whether the rules are enabled together with the compliance package. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  defaultEnable?: boolean;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * If the expiration time of the SLB certificate is later than the specified number of days after the check time, the configuration is considered compliant. Default value: 90 days.
   */
  description?: string;
  /**
   * @remarks
   * The identifier of the managed rule.
   * 
   * @example
   * slb-servercertificate-expired-check
   */
  managedRuleIdentifier?: string;
  /**
   * @remarks
   * The name of the managed rule.
   * 
   * @example
   * slb-servercertificate-expired-check
   */
  managedRuleName?: string;
  /**
   * @remarks
   * The types of the resources evaluated based on the rule.
   * 
   * @example
   * ACS::SLB::ServerCertificate
   */
  resourceTypesScope?: string;
  /**
   * @remarks
   * The risk level of the managed rule. Valid values:
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
      configRuleParameters: 'ConfigRuleParameters',
      controlDescription: 'ControlDescription',
      controlId: 'ControlId',
      defaultEnable: 'DefaultEnable',
      description: 'Description',
      managedRuleIdentifier: 'ManagedRuleIdentifier',
      managedRuleName: 'ManagedRuleName',
      resourceTypesScope: 'ResourceTypesScope',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRuleParameters: { 'type': 'array', 'itemType': ListCompliancePackTemplatesResponseBodyCompliancePackTemplatesResultCompliancePackTemplatesConfigRulesConfigRuleParameters },
      controlDescription: 'string',
      controlId: 'string',
      defaultEnable: 'boolean',
      description: 'string',
      managedRuleIdentifier: 'string',
      managedRuleName: 'string',
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

