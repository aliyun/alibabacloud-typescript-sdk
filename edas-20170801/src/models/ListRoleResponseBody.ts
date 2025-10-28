// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleResponseBodyRoleListRoleItemActionListAction extends $dara.Model {
  /**
   * @remarks
   * The serial number of the permission that is granted to the role.
   * 
   * @example
   * 1
   */
  code?: string;
  /**
   * @remarks
   * The description of the permission to be granted to the role.
   * 
   * @example
   * Operations in operation records
   */
  description?: string;
  /**
   * @remarks
   * The ID of the permission group to which the permission that is granted to the role belongs.
   * 
   * @example
   * 31
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the permission to be granted to the role.
   * 
   * @example
   * Operation records
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      groupId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItemActionList extends $dara.Model {
  action?: ListRoleResponseBodyRoleListRoleItemActionListAction[];
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: { 'type': 'array', 'itemType': ListRoleResponseBodyRoleListRoleItemActionListAction },
    };
  }

  validate() {
    if(Array.isArray(this.action)) {
      $dara.Model.validateArray(this.action);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItemRole extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * test**@aliyun.com
   */
  adminUserId?: string;
  /**
   * @remarks
   * The timestamp when the role was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1542717260156
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the role.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the role is a default role.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The name of the role.
   * 
   * @example
   * Super Admin(All privileges)
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the role was last modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1542717260156
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      adminUserId: 'AdminUserId',
      createTime: 'CreateTime',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserId: 'string',
      createTime: 'number',
      id: 'number',
      isDefault: 'boolean',
      name: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleListRoleItem extends $dara.Model {
  /**
   * @remarks
   * The set of permissions to be granted to the role.
   */
  actionList?: ListRoleResponseBodyRoleListRoleItemActionList;
  /**
   * @remarks
   * The roles.
   */
  role?: ListRoleResponseBodyRoleListRoleItemRole;
  static names(): { [key: string]: string } {
    return {
      actionList: 'ActionList',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionList: ListRoleResponseBodyRoleListRoleItemActionList,
      role: ListRoleResponseBodyRoleListRoleItemRole,
    };
  }

  validate() {
    if(this.actionList && typeof (this.actionList as any).validate === 'function') {
      (this.actionList as any).validate();
    }
    if(this.role && typeof (this.role as any).validate === 'function') {
      (this.role as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBodyRoleList extends $dara.Model {
  roleItem?: ListRoleResponseBodyRoleListRoleItem[];
  static names(): { [key: string]: string } {
    return {
      roleItem: 'RoleItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleItem: { 'type': 'array', 'itemType': ListRoleResponseBodyRoleListRoleItem },
    };
  }

  validate() {
    if(Array.isArray(this.roleItem)) {
      $dara.Model.validateArray(this.roleItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 57609587-DFA2-41EC-****-*********
   */
  requestId?: string;
  /**
   * @remarks
   * The roles.
   */
  roleList?: ListRoleResponseBodyRoleList;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleList: 'RoleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      roleList: ListRoleResponseBodyRoleList,
    };
  }

  validate() {
    if(this.roleList && typeof (this.roleList as any).validate === 'function') {
      (this.roleList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

