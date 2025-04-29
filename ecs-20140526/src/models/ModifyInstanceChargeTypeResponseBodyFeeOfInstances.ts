// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance } from "./ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance";


export class ModifyInstanceChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
  feeOfInstance?: ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance[];
  static names(): { [key: string]: string } {
    return {
      feeOfInstance: 'FeeOfInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      feeOfInstance: { 'type': 'array', 'itemType': ModifyInstanceChargeTypeResponseBodyFeeOfInstancesFeeOfInstance },
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

