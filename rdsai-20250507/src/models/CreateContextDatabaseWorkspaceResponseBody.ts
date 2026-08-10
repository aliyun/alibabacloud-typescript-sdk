// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * ctxdb-*****
   */
  apiKey?: string;
  /**
   * @example
   * default
   */
  apiKeyName?: string;
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * mb-cz51tnnp8****
   */
  memberId?: string;
  /**
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @example
   * owner
   */
  role?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * personal
   */
  type?: string;
  /**
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
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

