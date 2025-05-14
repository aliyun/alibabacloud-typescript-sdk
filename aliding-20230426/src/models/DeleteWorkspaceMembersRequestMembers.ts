// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteWorkspaceMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  memberId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

