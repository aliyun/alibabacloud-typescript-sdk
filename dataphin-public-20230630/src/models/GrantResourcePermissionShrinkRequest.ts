// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantResourcePermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  grantCommandShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      grantCommandShrink: 'GrantCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantCommandShrink: 'string',
      opTenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

