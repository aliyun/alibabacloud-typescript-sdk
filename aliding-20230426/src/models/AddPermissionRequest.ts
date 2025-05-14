// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddPermissionRequestMembers } from "./AddPermissionRequestMembers";
import { AddPermissionRequestOption } from "./AddPermissionRequestOption";
import { AddPermissionRequestTenantContext } from "./AddPermissionRequestTenantContext";


export class AddPermissionRequest extends $dara.Model {
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  members?: AddPermissionRequestMembers[];
  option?: AddPermissionRequestOption;
  /**
   * @remarks
   * This parameter is required.
   */
  roleId?: string;
  tenantContext?: AddPermissionRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      members: 'Members',
      option: 'Option',
      roleId: 'RoleId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      members: { 'type': 'array', 'itemType': AddPermissionRequestMembers },
      option: AddPermissionRequestOption,
      roleId: 'string',
      tenantContext: AddPermissionRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

