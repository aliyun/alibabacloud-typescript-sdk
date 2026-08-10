// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request context.
   * 
   * This parameter is required.
   */
  contextShrink?: string;
  /**
   * @remarks
   * The query parameters.
   * 
   * This parameter is required.
   */
  listCommandShrink?: string;
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
      contextShrink: 'Context',
      listCommandShrink: 'ListCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
      listCommandShrink: 'string',
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

