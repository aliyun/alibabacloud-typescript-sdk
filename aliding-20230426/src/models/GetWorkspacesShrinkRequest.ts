// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspacesShrinkRequest extends $dara.Model {
  optionShrink?: string;
  tenantContextShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace_id
   */
  workspaceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      optionShrink: 'Option',
      tenantContextShrink: 'TenantContext',
      workspaceIdsShrink: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      optionShrink: 'string',
      tenantContextShrink: 'string',
      workspaceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

