// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserIdByPhoneNumberRequest extends $dara.Model {
  /**
   * @remarks
   * The mobile number of the user who owns the account.
   * 
   * This parameter is required.
   * 
   * @example
   * 156xxxxxxx
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'phoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

