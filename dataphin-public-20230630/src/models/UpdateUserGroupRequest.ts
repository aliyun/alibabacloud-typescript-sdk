// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequestUpdateCommand extends $dara.Model {
  /**
   * @remarks
   * The user group administrators.
   */
  adminUserIdList?: string[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 13423
   */
  id?: string;
  /**
   * @remarks
   * The user group name.
   * 
   * @example
   * xx test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      adminUserIdList: 'AdminUserIdList',
      description: 'Description',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminUserIdList)) {
      $dara.Model.validateArray(this.adminUserIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The operator user ID.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update user group command.
   */
  updateCommand?: UpdateUserGroupRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateCommand: UpdateUserGroupRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

