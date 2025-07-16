// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceDocMembersRequestMembers extends $dara.Model {
  /**
   * @example
   * 012345
   */
  memberId?: string;
  /**
   * @example
   * USER
   */
  memberType?: string;
  /**
   * @example
   * ONLY_VIEWER
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceDocMembersRequestTenantContext extends $dara.Model {
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

