// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPipelineIntegratedTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request context.
   * 
   * This parameter is required.
   */
  contextShrink?: string;
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
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30110121
   */
  opUserId?: string;
  /**
   * @remarks
   * The startup parameters.
   * 
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

