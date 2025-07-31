// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTenantMembersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  addCommandShrink?: string;
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
      addCommandShrink: 'AddCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCommandShrink: 'string',
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

