// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceRequest extends $dara.Model {
  tenantContext?: GetWorkspaceRequestTenantContext;
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
      tenantContext: 'TenantContext',
      withPermissionRole: 'WithPermissionRole',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantContext: GetWorkspaceRequestTenantContext,
      withPermissionRole: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

