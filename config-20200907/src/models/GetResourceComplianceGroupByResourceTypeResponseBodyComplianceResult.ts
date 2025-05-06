// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList } from "./GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList";


export class GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The evaluation results grouped by resource type.
   */
  complianceResultList?: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList },
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

