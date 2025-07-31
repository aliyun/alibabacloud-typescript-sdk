// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePhysicalNodeShrinkRequest extends $dara.Model {
  /**
   * @example
   * PROD
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
  /**
   * @remarks
   * This parameter is required.
   */
  pauseCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      env: 'Env',
      opTenantId: 'OpTenantId',
      pauseCommandShrink: 'PauseCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      opTenantId: 'number',
      pauseCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

