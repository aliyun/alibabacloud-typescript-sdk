// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupsForUserResponseBodyGroupsGroup extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Dev-Team
   */
  comments?: string;
  /**
   * @remarks
   * The ID of the RAM user group.
   * 
   * @example
   * g-zYtroLrgbZR1****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the RAM user group.
   * 
   * @example
   * Dev-Team
   */
  groupName?: string;
  /**
   * @remarks
   * The time when the RAM user was added to the RAM user group.
   * 
   * @example
   * 2015-01-23T12:33:18Z
   */
  joinDate?: string;
  static names(): { [key: string]: string } {
    return {
      comments: 'Comments',
      groupId: 'GroupId',
      groupName: 'GroupName',
      joinDate: 'JoinDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comments: 'string',
      groupId: 'string',
      groupName: 'string',
      joinDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

