// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * *   COMPLIANT: The relevant resources are evaluated as compliant.
   * *   NON_COMPLIANT: The relevant resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to your resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The ID of the rule enabled in the compliance package.
   * 
   * @example
   * cr-fdc8626622af00f9****
   */
  configRuleId?: string;
  /**
   * @remarks
   * The name of the rule enabled in the compliance package.
   * 
   * @example
   * test-rule-name
   */
  configRuleName?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
      configRuleName: 'ConfigRuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
      configRuleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

