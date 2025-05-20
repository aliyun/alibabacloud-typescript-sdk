// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the group from which you want to remove a member.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the member. If member_type is set to user, set this parameter to the ID of the corresponding user.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e4***1b1
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member that you want to remove from the group. Only common users can be removed. If you want to remove all members from a group, you can directly delete the group. Valid value:
   * 
   * *   user
   * 
   * Note: A group can be a member of only one group. It cannot be a member of multiple groups. A user can be a member of multiple groups.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'group_id',
      memberId: 'member_id',
      memberType: 'member_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

