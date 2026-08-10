// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteDDLShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The request context information.
   * 
   * This parameter is required.
   */
  contextShrink?: string;
  /**
   * @remarks
   * The one-click table creation parameters.
   * 
   * This parameter is required.
   */
  DDLCommandShrink?: string;
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
      DDLCommandShrink: 'DDLCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextShrink: 'string',
      DDLCommandShrink: 'string',
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

