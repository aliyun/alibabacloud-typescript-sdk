// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the user group. If not specified, the description is not modified.
   * 
   * @example
   * South China Sales Organization
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to move the user group to the root node. This parameter cannot be set together with parentId.
   * 
   * @example
   * false
   */
  moveToRoot?: boolean;
  /**
   * @remarks
   * The ID of the new parent user group. If not specified, the user group is not moved.
   * 
   * @example
   * 7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11
   */
  parentId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user group.
   * 
   * This parameter is required.
   * 
   * @example
   * 7ea8973f-7a5c-4e8a-956b-4fe0e7e2eb11
   */
  userGroupId?: string;
  /**
   * @remarks
   * The new name of the user group. If not specified, the name is not modified.
   * 
   * @example
   * South China Sales
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      moveToRoot: 'moveToRoot',
      parentId: 'parentId',
      tenantId: 'tenantId',
      userGroupId: 'userGroupId',
      userGroupName: 'userGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moveToRoot: 'boolean',
      parentId: 'string',
      tenantId: 'string',
      userGroupId: 'string',
      userGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

