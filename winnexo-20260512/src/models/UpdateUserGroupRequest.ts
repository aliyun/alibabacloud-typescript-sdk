// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is executed as the user identified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The new description of the user group. If this parameter is not specified, the description is not modified.
   * 
   * @example
   * string_value
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to move the user group to the root node. This parameter cannot be set at the same time as a non-null parentId.
   * 
   * @example
   * false
   */
  moveToRoot?: boolean;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The ID of the new parent user group. If this parameter is not specified, the user group is not moved. If this parameter is explicitly set to null, the user group is moved to the root node.
   * 
   * @example
   * string_value
   */
  parentId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. For winnexo-cli, explicitly pass this parameter by using `--tenant-id`.
   * 
   * @example
   * string_value
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the target user group.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  userGroupId?: string;
  /**
   * @remarks
   * The new name of the user group. If this parameter is not specified, the name is not modified.
   * 
   * @example
   * string_value
   */
  userGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      description: 'description',
      moveToRoot: 'moveToRoot',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      parentId: 'parentId',
      tenantId: 'tenantId',
      userGroupId: 'userGroupId',
      userGroupName: 'userGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      description: 'string',
      moveToRoot: 'boolean',
      opsUserCode: 'string',
      opsUserId: 'string',
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

