// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plaintext API key. This value is returned only once at creation time. The caller must persist it.
   * 
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the first API key. The value is fixed as default.
   * 
   * @example
   * default
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The time when the workspace was created, in ISO 8601 format.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The ID of the first member.
   * 
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @remarks
   * The name of the first member.
   * 
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * The role of the first member. The value is fixed as owner.
   * 
   * @example
   * owner
   */
  role?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * - Active: running normally.
   * - Locked: locked due to overdue payment or expiration.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The workspace type. Valid values:
   * - personal: individual account.
   * - enterprise: enterprise account.
   * 
   * @example
   * personal
   */
  type?: string;
  /**
   * @remarks
   * The ID of the new workspace.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiKeyName: 'ApiKeyName',
      createdAt: 'CreatedAt',
      memberId: 'MemberId',
      memberName: 'MemberName',
      requestId: 'RequestId',
      role: 'Role',
      status: 'Status',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyName: 'string',
      createdAt: 'string',
      memberId: 'string',
      memberName: 'string',
      requestId: 'string',
      role: 'string',
      status: 'string',
      type: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

