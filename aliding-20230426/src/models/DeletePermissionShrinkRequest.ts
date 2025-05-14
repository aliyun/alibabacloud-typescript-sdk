// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePermissionShrinkRequest extends $dara.Model {
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
  membersShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MANAGER
   */
  roleId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      membersShrink: 'Members',
      roleId: 'RoleId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      membersShrink: 'string',
      roleId: 'string',
      tenantContextShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

