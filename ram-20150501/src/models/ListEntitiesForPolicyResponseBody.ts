// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesForPolicyResponseBodyGroups } from "./ListEntitiesForPolicyResponseBodyGroups";
import { ListEntitiesForPolicyResponseBodyRoles } from "./ListEntitiesForPolicyResponseBodyRoles";
import { ListEntitiesForPolicyResponseBodyUsers } from "./ListEntitiesForPolicyResponseBodyUsers";


export class ListEntitiesForPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the Resource Access Management (RAM) user groups.
   */
  groups?: ListEntitiesForPolicyResponseBodyGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7B8A4E7D-6CFF-471D-84DF-195A7A241ECB
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the RAM roles.
   */
  roles?: ListEntitiesForPolicyResponseBodyRoles;
  /**
   * @remarks
   * The information about the RAM users.
   */
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

