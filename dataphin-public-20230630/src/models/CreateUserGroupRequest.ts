// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserGroupRequestCreateCommand extends $dara.Model {
  /**
   * @example
   * true
   */
  active?: boolean;
  adminUserIdList?: string[];
  /**
   * @example
   * xx
   */
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      adminUserIdList: 'AdminUserIdList',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      adminUserIdList: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
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

export class CreateUserGroupRequest extends $dara.Model {
  createCommand?: CreateUserGroupRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateUserGroupRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

