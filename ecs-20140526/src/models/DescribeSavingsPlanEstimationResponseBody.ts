// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlanEstimationResponseBody extends $dara.Model {
  committedAmount?: string;
  currency?: string;
  instanceTypeFamily?: string;
  instanceTypeFamilyGroup?: string;
  offeringType?: string;
  period?: number;
  periodUnit?: string;
  planType?: string;
  requestId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      committedAmount: 'CommittedAmount',
      currency: 'Currency',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeFamilyGroup: 'InstanceTypeFamilyGroup',
      offeringType: 'OfferingType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      planType: 'PlanType',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedAmount: 'string',
      currency: 'string',
      instanceTypeFamily: 'string',
      instanceTypeFamilyGroup: 'string',
      offeringType: 'string',
      period: 'number',
      periodUnit: 'string',
      planType: 'string',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

