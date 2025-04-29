// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlanPriceRequest extends $dara.Model {
  committedAmount?: string;
  instanceTypeFamily?: string;
  instanceTypeFamilyGroup?: string;
  offeringType?: string;
  period?: number;
  periodUnit?: string;
  planType?: string;
  regionId?: string;
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      committedAmount: 'CommittedAmount',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeFamilyGroup: 'InstanceTypeFamilyGroup',
      offeringType: 'OfferingType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      planType: 'PlanType',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedAmount: 'string',
      instanceTypeFamily: 'string',
      instanceTypeFamilyGroup: 'string',
      offeringType: 'string',
      period: 'number',
      periodUnit: 'string',
      planType: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

