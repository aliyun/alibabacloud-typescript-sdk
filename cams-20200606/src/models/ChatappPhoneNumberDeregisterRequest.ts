// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappPhoneNumberDeregisterRequest extends $dara.Model {
  /**
   * @remarks
   * The space ID of the RAM user within the independent software vendor (ISV) account.
   * 
   * This parameter is required.
   * 
   * @example
   * 939283893939
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The phone number that you want to deregister.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800000000
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      custSpaceId: 'CustSpaceId',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      custSpaceId: 'string',
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

