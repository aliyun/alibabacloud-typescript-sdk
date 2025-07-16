// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddWorkspaceDocMembersRequestMembers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 012345
   */
  memberId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * USER
   */
  memberType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EDITOR
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

export class AddWorkspaceDocMembersRequestTenantContext extends $dara.Model {
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

