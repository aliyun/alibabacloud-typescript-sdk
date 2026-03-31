// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEntitiesForPolicyResponseBodyGroupsGroup extends $dara.Model {
  attachDate?: string;
  comments?: string;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      comments: 'Comments',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      comments: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyGroups extends $dara.Model {
  group?: ListEntitiesForPolicyResponseBodyGroupsGroup[];
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyGroupsGroup },
    };
  }

  validate() {
    if(Array.isArray(this.group)) {
      $dara.Model.validateArray(this.group);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyRolesRole extends $dara.Model {
  arn?: string;
  attachDate?: string;
  description?: string;
  roleId?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      attachDate: 'AttachDate',
      description: 'Description',
      roleId: 'RoleId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      attachDate: 'string',
      description: 'string',
      roleId: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyRoles extends $dara.Model {
  role?: ListEntitiesForPolicyResponseBodyRolesRole[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyRolesRole },
    };
  }

  validate() {
    if(Array.isArray(this.role)) {
      $dara.Model.validateArray(this.role);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyUsersUser extends $dara.Model {
  attachDate?: string;
  displayName?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attachDate: 'AttachDate',
      displayName: 'DisplayName',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachDate: 'string',
      displayName: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBodyUsers extends $dara.Model {
  user?: ListEntitiesForPolicyResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyUsersUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEntitiesForPolicyResponseBody extends $dara.Model {
  groups?: ListEntitiesForPolicyResponseBodyGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  roles?: ListEntitiesForPolicyResponseBodyRoles;
  users?: ListEntitiesForPolicyResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      roles: 'Roles',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListEntitiesForPolicyResponseBodyGroups,
      requestId: 'string',
      roles: ListEntitiesForPolicyResponseBodyRoles,
      users: ListEntitiesForPolicyResponseBodyUsers,
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    if(this.roles && typeof (this.roles as any).validate === 'function') {
      (this.roles as any).validate();
    }
    if(this.users && typeof (this.users as any).validate === 'function') {
      (this.users as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

