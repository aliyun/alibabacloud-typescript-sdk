// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances } from "./GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances";


export class GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  compliances?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances[];
  /**
   * @remarks
   * The region ID of the evaluated resource.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances },
      regionId: 'string',
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

