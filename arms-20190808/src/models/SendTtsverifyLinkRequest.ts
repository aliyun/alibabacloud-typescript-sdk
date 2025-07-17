// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendTTSVerifyLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

