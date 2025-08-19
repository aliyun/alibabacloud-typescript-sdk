// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * The IDs of objects to which you want to bind the contact.
   */
  members?: string[];
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      members: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

