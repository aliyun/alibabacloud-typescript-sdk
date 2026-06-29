// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineByAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Request context information
   * 
   * This parameter is required.
   */
  contextShrink?: string;
  /**
   * @remarks
   * Create pipeline/workflow task configuration
   * 
   * This parameter is required.
   */
  createCommandShrink?: string;
  /**
   * @remarks
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      contextShrink: 'Context',
      createCommandShrink: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
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

