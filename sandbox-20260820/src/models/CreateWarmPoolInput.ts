// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolCapacityPolicyInput } from "./WarmPoolCapacityPolicyInput";


export class CreateWarmPoolInput extends $dara.Model {
  /**
   * @remarks
   * The warm pool capacity policy, which includes the base target capacity and optional scheduled rules.
   * 
   * This parameter is required.
   */
  capacityPolicy?: WarmPoolCapacityPolicyInput;
  /**
   * @remarks
   * The template ID, which specifies the template associated with the warm pool.
   * 
   * This parameter is required.
   * 
   * @example
   * tpl-example1234567890
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      capacityPolicy: 'capacityPolicy',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityPolicy: WarmPoolCapacityPolicyInput,
      templateID: 'string',
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

