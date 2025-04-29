// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstancesFeeOfInstance } from "./ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstancesFeeOfInstance";


export class ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
  feeOfInstance?: ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstancesFeeOfInstance[];
  static names(): { [key: string]: string } {
    return {
      feeOfInstance: 'FeeOfInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstance: { 'type': 'array', 'itemType': ModifyDedicatedHostsChargeTypeResponseBodyFeeOfInstancesFeeOfInstance },
    };
  }

  validate() {
    if(Array.isArray(this.feeOfInstance)) {
      $dara.Model.validateArray(this.feeOfInstance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

