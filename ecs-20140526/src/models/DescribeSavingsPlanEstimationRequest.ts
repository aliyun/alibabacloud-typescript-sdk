// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSavingsPlanEstimationRequest extends $dara.Model {
  estimationResource?: string;
  instanceTypeScope?: string;
  offeringType?: string;
  period?: string;
  periodUnit?: string;
  planType?: string;
  regionId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      estimationResource: 'EstimationResource',
      instanceTypeScope: 'InstanceTypeScope',
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
      estimationResource: 'string',
      instanceTypeScope: 'string',
      offeringType: 'string',
      period: 'string',
      periodUnit: 'string',
      planType: 'string',
      regionId: 'string',
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

