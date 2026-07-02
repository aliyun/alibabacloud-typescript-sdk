// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferUsergroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the parent user group.
   * 
   * This parameter is required.
   * 
   * @example
   * asdasva***123124asdasd
   */
  parentUserGroupId?: string;
  /**
   * @remarks
   * The ID of the user group to migrate.
   * 
   * This parameter is required.
   * 
   * @example
   * 12qwda****sdada
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      parentUserGroupId: 'ParentUserGroupId',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parentUserGroupId: 'string',
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

