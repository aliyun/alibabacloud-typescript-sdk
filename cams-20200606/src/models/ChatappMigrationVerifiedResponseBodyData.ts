// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappMigrationVerifiedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the phone number.
   * 
   * @example
   * 82828893332
   */
  id?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 8613800001234
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

