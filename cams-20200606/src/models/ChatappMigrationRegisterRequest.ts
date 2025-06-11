// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappMigrationRegisterRequest extends $dara.Model {
  /**
   * @remarks
   * None
   * 
   * This parameter is required.
   * 
   * @example
   * 29348393884****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 8613800****
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

