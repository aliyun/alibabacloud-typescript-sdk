// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserGroupMemberRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 555c4cd****
   */
  userGroupId?: string;
  /**
   * @remarks
   * The ID of the Quick BI user. Separate multiple IDs with commas (,). Example: abc,efg. You can enter a maximum of 1000 entries.
   * 
   * This parameter is required.
   * 
   * @example
   * 46e537a5****,3dadsu****
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

