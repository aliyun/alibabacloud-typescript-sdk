// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberVerificationStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * VERIFIED
   */
  codeVerificationStatus?: string;
  /**
   * @remarks
   * The ID of the number.
   * 
   * @example
   * 2224342624
   */
  id?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613900001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      codeVerificationStatus: 'CodeVerificationStatus',
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVerificationStatus: 'string',
      id: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

