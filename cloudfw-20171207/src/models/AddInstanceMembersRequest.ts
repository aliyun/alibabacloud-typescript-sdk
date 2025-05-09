// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddInstanceMembersRequestMembers } from "./AddInstanceMembersRequestMembers";


export class AddInstanceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The members.
   * 
   * This parameter is required.
   */
  members?: AddInstanceMembersRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': AddInstanceMembersRequestMembers },
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

