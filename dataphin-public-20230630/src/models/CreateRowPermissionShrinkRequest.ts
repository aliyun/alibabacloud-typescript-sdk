// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRowPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createRowPermissionCommandShrink?: string;
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
      createRowPermissionCommandShrink: 'CreateRowPermissionCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createRowPermissionCommandShrink: 'string',
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

