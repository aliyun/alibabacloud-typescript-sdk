// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportKgSchemaShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The instruction for importing the knowledge graph definition.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  importCommandShrink?: string;
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
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      importCommandShrink: 'ImportCommand',
      opTenantId: 'OpTenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importCommandShrink: 'string',
      opTenantId: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

