// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContextDatabaseWorkspacesResponseBodyWorkspaces extends $dara.Model {
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
   * The workspace status.
   * 
   * @example
   * Active
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
   * The workspace ID.
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
      createdAt: 'CreatedAt',
      status: 'Status',
      type: 'Type',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
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

export class ListContextDatabaseWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  maxResults?: number;
  /**
   * @remarks
   * This field is empty.
   * 
   * @example
   * (null)
   */
  nextToken?: string;
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
   * The list of workspaces.
   */
  workspaces?: ListContextDatabaseWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      workspaces: { 'type': 'array', 'itemType': ListContextDatabaseWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

