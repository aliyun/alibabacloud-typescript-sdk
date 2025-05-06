// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances } from "./GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances";


export class GetResourceComplianceByConfigRuleResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results based on compliance types.
   */
  compliances?: GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances[];
  /**
   * @remarks
   * The total number of evaluated resources.
   * 
   * @example
   * 10
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
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceByConfigRuleResponseBodyComplianceResultCompliances },
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

