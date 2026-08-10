// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
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
      createdAt: 'CreatedAt',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      requestId: 'string',
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

