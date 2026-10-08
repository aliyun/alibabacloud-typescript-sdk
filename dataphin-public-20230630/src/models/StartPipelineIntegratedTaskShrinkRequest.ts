// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPipelineIntegratedTaskShrinkRequest extends $dara.Model {
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
   * 30110121
   */
  opUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startCommandShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contextShrink: 'Context',
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      startCommandShrink: 'StartCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
      opTenantId: 'number',
      opUserId: 'string',
      startCommandShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

