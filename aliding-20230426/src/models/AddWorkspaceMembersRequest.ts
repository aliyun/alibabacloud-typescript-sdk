// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddWorkspaceMembersRequestMembers } from "./AddWorkspaceMembersRequestMembers";
import { AddWorkspaceMembersRequestTenantContext } from "./AddWorkspaceMembersRequestTenantContext";


export class AddWorkspaceMembersRequest extends $dara.Model {
  members?: AddWorkspaceMembersRequestMembers[];
  tenantContext?: AddWorkspaceMembersRequestTenantContext;
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
      members: { 'type': 'array', 'itemType': AddWorkspaceMembersRequestMembers },
      tenantContext: AddWorkspaceMembersRequestTenantContext,
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

