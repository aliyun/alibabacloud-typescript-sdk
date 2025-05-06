// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances } from "./GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances";


export class GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the compliance package.
   * 
   * @example
   * cp-541e626622af0087****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The rule enabled in the compliance package and the compliance evaluation result returned by the rule.
   */
  configRuleCompliances?: GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
  /**
   * @remarks
   * The number of rules against which specific resources are evaluated as non-compliant.
   * 
   * @example
   * 0
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of rules enabled in the compliance package.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      configRuleCompliances: 'ConfigRuleCompliances',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      configRuleCompliances: { 'type': 'array', 'itemType': GetConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configRuleCompliances)) {
      $dara.Model.validateArray(this.configRuleCompliances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

