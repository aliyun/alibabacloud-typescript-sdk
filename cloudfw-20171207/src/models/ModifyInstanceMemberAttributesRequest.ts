// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceMemberAttributesRequestMembers } from "./ModifyInstanceMemberAttributesRequestMembers";


export class ModifyInstanceMemberAttributesRequest extends $dara.Model {
  /**
   * @remarks
   * The members that to be modified.
   * 
   * This parameter is required.
   */
  members?: ModifyInstanceMemberAttributesRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ModifyInstanceMemberAttributesRequestMembers },
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

