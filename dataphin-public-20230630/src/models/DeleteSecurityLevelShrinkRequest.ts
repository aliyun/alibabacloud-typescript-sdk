// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecurityLevelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deleteCommandShrink?: string;
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
      deleteCommandShrink: 'DeleteCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteCommandShrink: 'string',
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

