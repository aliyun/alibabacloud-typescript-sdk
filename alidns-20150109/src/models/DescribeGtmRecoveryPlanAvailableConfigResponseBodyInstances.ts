// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance } from "./DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance";


export class DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstances extends $dara.Model {
  instance?: DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': DescribeGtmRecoveryPlanAvailableConfigResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

