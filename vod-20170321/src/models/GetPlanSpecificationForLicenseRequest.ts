// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlanSpecificationForLicenseRequest extends $dara.Model {
  fromApp?: string;
  needItemSpecification?: boolean;
  planCode?: string;
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      fromApp: 'FromApp',
      needItemSpecification: 'NeedItemSpecification',
      planCode: 'PlanCode',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromApp: 'string',
      needItemSpecification: 'boolean',
      planCode: 'string',
      planId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

