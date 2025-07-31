// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserGroupRequestUpdateCommand extends $dara.Model {
  adminUserIdList?: string[];
  /**
   * @example
   * xx
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13423
   */
  id?: string;
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  updateCommand?: UpdateUserGroupRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

