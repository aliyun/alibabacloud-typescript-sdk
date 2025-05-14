// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddWorkspaceDocMembersRequestMembers } from "./AddWorkspaceDocMembersRequestMembers";
import { AddWorkspaceDocMembersRequestTenantContext } from "./AddWorkspaceDocMembersRequestTenantContext";


export class AddWorkspaceDocMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  members?: AddWorkspaceDocMembersRequestMembers[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  nodeId?: string;
  tenantContext?: AddWorkspaceDocMembersRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxx
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
      members: { 'type': 'array', 'itemType': AddWorkspaceDocMembersRequestMembers },
      nodeId: 'string',
      tenantContext: AddWorkspaceDocMembersRequestTenantContext,
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

