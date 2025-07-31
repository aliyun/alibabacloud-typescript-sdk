// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUserGroupMemberShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  removeCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      removeCommandShrink: 'RemoveCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      removeCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

