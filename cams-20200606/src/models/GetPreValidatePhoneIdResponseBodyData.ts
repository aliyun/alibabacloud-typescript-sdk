// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPreValidatePhoneIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 929833
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The ID of the phone number.
   * 
   * @example
   * 8613800000000
   */
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneNumberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

