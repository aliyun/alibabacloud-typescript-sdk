// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceDocMembersRequestMembers extends $dara.Model {
  /**
   * @example
   * 012345
   */
  memberId?: string;
  /**
   * @example
   * USER
   */
  memberType?: string;
  /**
   * @example
   * ONLY_VIEWER
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

