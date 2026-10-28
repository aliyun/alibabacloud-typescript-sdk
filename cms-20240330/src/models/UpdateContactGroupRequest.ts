// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   */
  contacts?: string[];
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

