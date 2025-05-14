// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePermissionShrinkRequest extends $dara.Model {
  /**
   * @example
   * kDnRL6jAJMLgNkw7tBnw5aY4VyMoPYe1
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  membersShrink?: string;
  optionShrink?: string;
  /**
   * @example
   * READER
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

