// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodeSupplementShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @example
   * DEV/PROD
   */
  env?: string;
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
      env: 'Env',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommandShrink: 'string',
      env: 'string',
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

