// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The create request.
   * 
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
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

