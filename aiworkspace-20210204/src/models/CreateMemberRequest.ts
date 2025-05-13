// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMemberRequestMembers } from "./CreateMemberRequestMembers";


export class CreateMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The members.
   * 
   * This parameter is required.
   */
  members?: CreateMemberRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberRequestMembers },
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

