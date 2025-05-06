// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances } from "./GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances";


export class GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResult extends $dara.Model {
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
   * The information about rules in the compliance package.
   */
  configRuleCompliances?: GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances[];
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
   * The total number of rules in the compliance package.
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
      configRuleCompliances: { 'type': 'array', 'itemType': GetAggregateConfigRuleComplianceByPackResponseBodyConfigRuleComplianceResultConfigRuleCompliances },
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

