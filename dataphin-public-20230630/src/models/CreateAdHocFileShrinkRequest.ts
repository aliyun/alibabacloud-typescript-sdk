// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAdHocFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
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
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
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

