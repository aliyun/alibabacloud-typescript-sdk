// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution } from "./CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution";


export class CreateAutoProvisioningGroupShrinkRequestPrePaidOptions extends $dara.Model {
  /**
   * @remarks
   * The minimum capacity set for different instance types. This parameter is valid only when `AutoProvisioningGroupType` is set to request.
   */
  specifyCapacityDistribution?: CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution[];
  static names(): { [key: string]: string } {
    return {
      specifyCapacityDistribution: 'SpecifyCapacityDistribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specifyCapacityDistribution: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupShrinkRequestPrePaidOptionsSpecifyCapacityDistribution },
    };
  }

  validate() {
    if(Array.isArray(this.specifyCapacityDistribution)) {
      $dara.Model.validateArray(this.specifyCapacityDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

