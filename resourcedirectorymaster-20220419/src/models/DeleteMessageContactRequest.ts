// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMessageContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * c-qL4HqKONzOM7****
   */
  contactId?: string;
  /**
   * @remarks
   * Specifies whether to retain the contact for members. Valid values:
   * 
   * *   true (default): retains the contact for members. In this case, the contact can still receive messages for the members.
   * *   false: does not retain the contact for members. In this case, the contact can no longer receive messages for the members. If you set this parameter to false, the response is asynchronously returned. You can call [GetMessageContactDeletionStatus](~~GetMessageContactDeletionStatus~~) to obtain the deletion result.
   * 
   * @example
   * true
   */
  retainContactInMembers?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      retainContactInMembers: 'RetainContactInMembers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      retainContactInMembers: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

