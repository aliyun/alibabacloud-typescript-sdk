// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspacesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * The creation time.
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
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ssZ
   * 
   * @example
   * 2025-03-11T08:21:58Z
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
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
   * The tags.
   */
  tags?: ListWorkspacesResponseBodyWorkspacesTags[];
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
      resourceGroupId: 'resourceGroupId',
      slsProject: 'slsProject',
      tags: 'tags',
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
      resourceGroupId: 'string',
      slsProject: 'string',
      tags: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspacesTags },
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * Default value:
   * 	50
   * Maximum value:
   * 	50
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
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

