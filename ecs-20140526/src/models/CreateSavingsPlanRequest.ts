// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSavingsPlanRequest extends $dara.Model {
  chargeType?: string;
  committedAmount?: string;
  instanceTypeFamily?: string;
  instanceTypeFamilyGroup?: string;
  offeringType?: string;
  period?: string;
  periodUnit?: string;
  planType?: string;
  regionId?: string;
  resourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
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
      chargeType: 'string',
      committedAmount: 'string',
      instanceTypeFamily: 'string',
      instanceTypeFamilyGroup: 'string',
      offeringType: 'string',
      period: 'string',
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

