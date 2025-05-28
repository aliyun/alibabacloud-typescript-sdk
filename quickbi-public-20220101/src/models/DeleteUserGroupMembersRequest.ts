// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserGroupMembersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group(s) to exit.
   * 
   * - Supports batch parameters, separate IDs with a comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * 34fd141d-4598-4093-8c33-8e066dcb****,3d2c23d4-2b41-4af8-a1f5-f6390f32****
   */
  userGroupIds?: string;
  /**
   * @remarks
   * The UserID of the user to be removed from the user group. Note that this UserID refers to the Quick BI UserID, not the Alibaba Cloud UID.
   * 
   * This parameter is required.
   * 
   * @example
   * 204627493484****
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

