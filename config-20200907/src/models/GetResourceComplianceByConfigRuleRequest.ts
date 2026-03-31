// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceByConfigRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cr-d369626622af008e****
   */
  configRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      configRuleId: 'ConfigRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      configRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

