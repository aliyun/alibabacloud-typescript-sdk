// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextDatabaseWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the workspace was created, in ISO-8601 format.
   * 
   * @example
   * 2026-05-28T17:59:55Z
   */
  createdAt?: string;
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
   * The workspace status. The value is fixed as Deleted.
   * 
   * @example
   * Deleted
   */
  status?: string;
  /**
   * @remarks
   * The workspace type.
   * 
   * @example
   * personal
   */
  type?: string;
  /**
   * @remarks
   * The ID of the deleted workspace.
   * 
   * @example
   * ws-as1llqmkol****
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the deleted workspace.
   * 
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

