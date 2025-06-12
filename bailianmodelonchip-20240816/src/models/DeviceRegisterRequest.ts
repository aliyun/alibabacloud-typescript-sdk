// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeviceRegisterRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
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
   */
  requestTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      nonce: 'nonce',
      requestTime: 'requestTime',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      nonce: 'string',
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

