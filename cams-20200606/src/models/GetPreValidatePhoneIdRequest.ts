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
   * 86138****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The verification code provided when you purchased the pre-validated phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 2083**
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

