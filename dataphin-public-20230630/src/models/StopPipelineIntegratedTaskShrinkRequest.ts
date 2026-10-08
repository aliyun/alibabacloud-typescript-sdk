// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPipelineIntegratedTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @example
   * 30121101
   */
  opUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  stopCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contextShrink: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      stopCommandShrink: 'StopCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      stopCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

