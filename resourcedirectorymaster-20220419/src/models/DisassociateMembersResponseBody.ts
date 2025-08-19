// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateMembersResponseBodyMembers extends $dara.Model {
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
   * The ID of the object. Valid values:
   * 
   * - ID of the resource directory
   * - ID of the folder
   * - ID of the member
   * 
   * @example
   * fd-ZDNPiT****
   */
  memberId?: string;
  /**
   * @remarks
   * The time when the contact was unbound from the object.
   * 
   * @example
   * 2023-03-27 17:19:21
   */
  modifyDate?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      memberId: 'MemberId',
      modifyDate: 'ModifyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      memberId: 'string',
      modifyDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateMembersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the contact was unbound from the object.
   */
  members?: DisassociateMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 95060F1D-6990-4645-8920-A81D1BBFE992
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DisassociateMembersResponseBodyMembers },
      requestId: 'string',
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

