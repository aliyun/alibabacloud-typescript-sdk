// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution } from "./CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution";


export class CreateAutoProvisioningGroupRequestPrePaidOptions extends $dara.Model {
  /**
   * @remarks
   * The minimum capacity set for different instance types. This parameter is valid only when `AutoProvisioningGroupType` is set to request.
   */
  specifyCapacityDistribution?: CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution[];
  static names(): { [key: string]: string } {
    return {
      specifyCapacityDistribution: 'SpecifyCapacityDistribution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specifyCapacityDistribution: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupRequestPrePaidOptionsSpecifyCapacityDistribution },
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

