// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * The time when the workspace was created.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-test
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the workspace was last modified.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * sls-project-test-001
   */
  slsProject?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      displayName: 'displayName',
      lastModifyTime: 'lastModifyTime',
      regionId: 'regionId',
      slsProject: 'slsProject',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      lastModifyTime: 'string',
      regionId: 'string',
      slsProject: 'string',
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

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page. Default value: 50. Maximum value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The list of workspaces.
   */
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
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

