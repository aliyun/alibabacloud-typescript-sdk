// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user group.
   * 
   * This parameter is required.
   * 
   * @example
   * f5eeb52e-d9c2-4a8b-80e3-47ab55c2****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

