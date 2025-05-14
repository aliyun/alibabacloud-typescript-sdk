// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPermissionShrinkRequest extends $dara.Model {
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  membersShrink?: string;
  optionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleId?: string;
  tenantContextShrink?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      membersShrink: 'Members',
      optionShrink: 'Option',
      roleId: 'RoleId',
      tenantContextShrink: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      membersShrink: 'string',
      optionShrink: 'string',
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

