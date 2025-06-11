// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPreValidatePhoneIdRequest extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 861380000
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The verification code provided when you purchased the pre-registered phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 208393
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

