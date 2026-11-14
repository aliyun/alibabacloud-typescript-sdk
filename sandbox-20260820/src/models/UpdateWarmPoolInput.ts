// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolCapacityPolicyInput } from "./WarmPoolCapacityPolicyInput";


export class UpdateWarmPoolInput extends $dara.Model {
  /**
   * @remarks
   * The warm pool capacity policy, which includes the base target capacity and optional scheduled rules.
   * 
   * This parameter is required.
   */
  capacityPolicy?: WarmPoolCapacityPolicyInput;
  static names(): { [key: string]: string } {
    return {
      capacityPolicy: 'capacityPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityPolicy: WarmPoolCapacityPolicyInput,
    };
  }

  validate() {
    if(this.capacityPolicy && typeof (this.capacityPolicy as any).validate === 'function') {
      (this.capacityPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

