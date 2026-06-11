// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContactForIncidentView extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * "contact-123456"
   */
  contactId?: string;
  /**
   * @remarks
   * The contact name.
   * 
   * @example
   * "张三"
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'contactId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

