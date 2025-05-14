// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPermissionsResponseBodyPermissionsMember } from "./ListPermissionsResponseBodyPermissionsMember";
import { ListPermissionsResponseBodyPermissionsRole } from "./ListPermissionsResponseBodyPermissionsRole";


export class ListPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @example
   * 123456
   */
  dentryUuid?: string;
  member?: ListPermissionsResponseBodyPermissionsMember;
  role?: ListPermissionsResponseBodyPermissionsRole;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      member: 'Member',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      member: ListPermissionsResponseBodyPermissionsMember,
      role: ListPermissionsResponseBodyPermissionsRole,
    };
  }

  validate() {
    if(this.member && typeof (this.member as any).validate === 'function') {
      (this.member as any).validate();
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

