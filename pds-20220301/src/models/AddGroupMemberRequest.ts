// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination group to which the member is added.
   * 
   * This parameter is required.
   * 
   * @example
   * 3e5***2c2
   */
  groupId?: string;
  /**
   * @remarks
   * The member ID. If member_type is set to user, set this parameter to a user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2e4***1b1
   */
  memberId?: string;
  /**
   * @remarks
   * The type of the member. Set the value to user. When you create a group, you can directly add the group to a parent group.
   * 
   * * user
   * 
   * Note: A group can be added to only one group. A user can be added to multiple groups.
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

