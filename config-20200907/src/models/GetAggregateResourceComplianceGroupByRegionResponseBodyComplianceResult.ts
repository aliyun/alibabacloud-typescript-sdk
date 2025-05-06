// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList } from "./GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList";


export class GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The evaluation results grouped by region.
   */
  complianceResultList?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList },
    };
  }

  validate() {
    if(Array.isArray(this.complianceResultList)) {
      $dara.Model.validateArray(this.complianceResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

