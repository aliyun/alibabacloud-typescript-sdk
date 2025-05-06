// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateConfigRuleSummaryByRiskLevelResponseBodyConfigRuleSummaries extends $dara.Model {
  /**
   * @remarks
   * The number of rules against which specific resources are evaluated as compliant.
   * 
   * @example
   * 3
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of rules against which specific resources are evaluated as non-compliant.
   * 
   * @example
   * 1
   */
  nonCompliantCount?: number;
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
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliantCount: 'number',
      nonCompliantCount: 'number',
      riskLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

