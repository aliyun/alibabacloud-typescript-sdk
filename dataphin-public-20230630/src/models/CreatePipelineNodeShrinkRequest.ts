// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePipelineNodeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The command to create a pipeline. Both offline and real-time pipelines are supported.
   * 
   * This parameter is required.
   */
  createPipelineNodeCommandShrink?: string;
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
      createPipelineNodeCommandShrink: 'CreatePipelineNodeCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createPipelineNodeCommandShrink: 'string',
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

