// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPipelineAsyncResultShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  asyncId?: number;
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
  static names(): { [key: string]: string } {
    return {
      asyncId: 'AsyncId',
      contextShrink: 'Context',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncId: 'number',
      contextShrink: 'string',
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

