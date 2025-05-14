// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeletePermissionRequestMembers } from "./DeletePermissionRequestMembers";
import { DeletePermissionRequestTenantContext } from "./DeletePermissionRequestTenantContext";


export class DeletePermissionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a9E05BDRVQRkezKGCE3nlwPDJ63zgkYA
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  members?: DeletePermissionRequestMembers[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MANAGER
   */
  roleId?: string;
  tenantContext?: DeletePermissionRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      members: 'Members',
      roleId: 'RoleId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      members: { 'type': 'array', 'itemType': DeletePermissionRequestMembers },
      roleId: 'string',
      tenantContext: DeletePermissionRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
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

