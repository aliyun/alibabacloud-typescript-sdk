// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopPipelineIntegratedTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
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
   * 30121101
   */
  opUserId?: string;
  /**
   * @remarks
   * The stop parameters.
   * 
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

