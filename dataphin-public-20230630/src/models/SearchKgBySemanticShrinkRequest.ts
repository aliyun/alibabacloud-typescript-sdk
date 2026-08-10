// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchKgBySemanticShrinkRequest extends $dara.Model {
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
   * The search command.
   * 
   * This parameter is required.
   */
  searchCommandShrink?: string;
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
      opTenantId: 'OpTenantId',
      searchCommandShrink: 'SearchCommand',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      searchCommandShrink: 'string',
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

