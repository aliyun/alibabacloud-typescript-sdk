// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteWorkspaceMembersRequestMembers } from "./DeleteWorkspaceMembersRequestMembers";
import { DeleteWorkspaceMembersRequestTenantContext } from "./DeleteWorkspaceMembersRequestTenantContext";


export class DeleteWorkspaceMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  members?: DeleteWorkspaceMembersRequestMembers[];
  tenantContext?: DeleteWorkspaceMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': DeleteWorkspaceMembersRequestMembers },
      tenantContext: DeleteWorkspaceMembersRequestTenantContext,
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

