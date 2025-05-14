// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceShrinkRequest extends $dara.Model {
  tenantContextShrink?: string;
  /**
   * @example
   * false
   */
  withPermissionRole?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MJ0pDSKMV9dO20E4
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantContextShrink: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContextShrink: 'string',
      withPermissionRole: 'boolean',
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

