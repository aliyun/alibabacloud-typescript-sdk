// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAnycastEipAddressSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the Anycast EIP. Unit: Mbit/s.
   * 
   * Valid values: **200** to **1000**.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  bandwidth?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      bandwidth: 'Bandwidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      bandwidth: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

