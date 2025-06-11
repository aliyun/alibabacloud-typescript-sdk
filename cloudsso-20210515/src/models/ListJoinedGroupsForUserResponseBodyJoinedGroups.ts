// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJoinedGroupsForUserResponseBodyJoinedGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the group.
   * 
   * @example
   * This is a group.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * g-00jqzghi2n3o5hkh****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * TestGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the user was added to the group.
   * 
   * @example
   * 2021-11-01T06:58:18Z
   */
  joinTime?: string;
  /**
   * @remarks
   * The type of the group. Valid values:
   * 
   * *   Manual: The group is manually created.
   * *   Synchronized: The group is synchronized from an external identity provider (IdP).
   * 
   * @example
   * Manual
   */
  provisionType?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinTime: 'JoinTime',
      provisionType: 'ProvisionType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      groupName: 'string',
      joinTime: 'string',
      provisionType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

