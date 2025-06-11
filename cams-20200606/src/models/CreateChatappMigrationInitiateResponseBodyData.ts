// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappMigrationInitiateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the mobile number.
   * 
   * @example
   * 82828893332
   */
  id?: string;
  /**
   * @remarks
   * The mobile number.
   * 
   * @example
   * 8613900001234
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The state of the mobile number. Only MIGRATING may be returned, which indicates that the mobile number is being migrated.
   * 
   * @example
   * MIGRATING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneNumber: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

