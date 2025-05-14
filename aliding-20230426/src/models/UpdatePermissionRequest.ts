// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePermissionRequestMembers } from "./UpdatePermissionRequestMembers";
import { UpdatePermissionRequestOption } from "./UpdatePermissionRequestOption";
import { UpdatePermissionRequestTenantContext } from "./UpdatePermissionRequestTenantContext";


export class UpdatePermissionRequest extends $dara.Model {
  /**
   * @example
   * kDnRL6jAJMLgNkw7tBnw5aY4VyMoPYe1
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  members?: UpdatePermissionRequestMembers[];
  option?: UpdatePermissionRequestOption;
  /**
   * @example
   * READER
   */
  roleId?: string;
  tenantContext?: UpdatePermissionRequestTenantContext;
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
      members: { 'type': 'array', 'itemType': UpdatePermissionRequestMembers },
      option: UpdatePermissionRequestOption,
      roleId: 'string',
      tenantContext: UpdatePermissionRequestTenantContext,
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

