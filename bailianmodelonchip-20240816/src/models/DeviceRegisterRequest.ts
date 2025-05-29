// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceRegisterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2a64edd96296880f55aa61987b
   */
  nonce?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * el3SzmCU2p0x4RBc
   */
  productKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1748312544852
   */
  requestTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3spKwUgUpAGsXbbrHKnpVJPlI9wamoyhh96uqJuSyCKyJ7oscLAHRcz15dSzLG5L+ywFgYXSQNqdRtsn/Ri0j7pD0IuoKt9R7EnNo/U6viPvWD3Ldp3ehDDtOFtSrpUg6LTedvGtUWYU4x/zSD2jgCXijEdZCCMGCypcheMHRXfInYWF1xFtnCEXJfxtrBrnCk1p/pW3JSmdHJzmInnUEO3dWbNe3A==
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      nonce: 'nonce',
      productKey: 'productKey',
      requestTime: 'requestTime',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonce: 'string',
      productKey: 'string',
      requestTime: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

