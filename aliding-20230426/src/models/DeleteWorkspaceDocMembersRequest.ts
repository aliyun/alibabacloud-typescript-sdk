// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteWorkspaceDocMembersRequestMembers } from "./DeleteWorkspaceDocMembersRequestMembers";
import { DeleteWorkspaceDocMembersRequestTenantContext } from "./DeleteWorkspaceDocMembersRequestTenantContext";


export class DeleteWorkspaceDocMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  members?: DeleteWorkspaceDocMembersRequestMembers[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * YRBGv0xxx
   */
  nodeId?: string;
  tenantContext?: DeleteWorkspaceDocMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * YRBGvyxxx
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
      members: { 'type': 'array', 'itemType': DeleteWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: DeleteWorkspaceDocMembersRequestTenantContext,
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

