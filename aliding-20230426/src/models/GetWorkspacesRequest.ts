// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspacesRequestOption extends $dara.Model {
  /**
   * @example
   * true
   */
  withPermissionRole?: boolean;
  static names(): { [key: string]: string } {
    return {
      withPermissionRole: 'WithPermissionRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      withPermissionRole: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspacesRequestTenantContext extends $dara.Model {
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

export class GetWorkspacesRequest extends $dara.Model {
  option?: GetWorkspacesRequestOption;
  tenantContext?: GetWorkspacesRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace_id
   */
  workspaceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      tenantContext: 'TenantContext',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: GetWorkspacesRequestOption,
      tenantContext: GetWorkspacesRequestTenantContext,
      workspaceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.workspaceIds)) {
      $dara.Model.validateArray(this.workspaceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

