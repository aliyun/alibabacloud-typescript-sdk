// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateWorkspaceDocMembersRequestMembers } from "./UpdateWorkspaceDocMembersRequestMembers";
import { UpdateWorkspaceDocMembersRequestTenantContext } from "./UpdateWorkspaceDocMembersRequestTenantContext";


export class UpdateWorkspaceDocMembersRequest extends $dara.Model {
  members?: UpdateWorkspaceDocMembersRequestMembers[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * node_feb8fea0
   */
  nodeId?: string;
  tenantContext?: UpdateWorkspaceDocMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xb8bkxxxxxrXJNaL
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      nodeId: 'NodeId',
      tenantContext: 'TenantContext',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': UpdateWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: UpdateWorkspaceDocMembersRequestTenantContext,
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

