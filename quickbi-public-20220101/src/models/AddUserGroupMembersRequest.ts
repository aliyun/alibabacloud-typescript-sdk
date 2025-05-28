// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the user groups. Separate the IDs with commas (,). Example: aGroupId,bGroupId,cGroupIds
   * 
   * This parameter is required.
   * 
   * @example
   * 0d5fb19b-****-****-99da-1248fc27ca51
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The user ID of the Quick BI.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e5****37a5
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: 'string',
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

