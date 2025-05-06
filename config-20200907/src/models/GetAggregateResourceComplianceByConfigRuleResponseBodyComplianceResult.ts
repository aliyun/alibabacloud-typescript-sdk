// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances } from "./GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances";


export class GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The compliance list result.
   */
  compliances?: GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  /**
   * @remarks
   * The total number of evaluated resources.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.compliances)) {
      $dara.Model.validateArray(this.compliances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

