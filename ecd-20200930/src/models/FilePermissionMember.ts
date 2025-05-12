// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilePermissionMemberCdsIdentity } from "./FilePermissionMemberCdsIdentity";


export class FilePermissionMember extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cdsIdentity?: FilePermissionMemberCdsIdentity;
  disinheritSubGroup?: boolean;
  expireTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  roleId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsIdentity: 'CdsIdentity',
      disinheritSubGroup: 'DisinheritSubGroup',
      expireTime: 'ExpireTime',
      roleId: 'RoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsIdentity: FilePermissionMemberCdsIdentity,
      disinheritSubGroup: 'boolean',
      expireTime: 'number',
      roleId: 'string',
    };
  }

  validate() {
    if(this.cdsIdentity && typeof (this.cdsIdentity as any).validate === 'function') {
      (this.cdsIdentity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

