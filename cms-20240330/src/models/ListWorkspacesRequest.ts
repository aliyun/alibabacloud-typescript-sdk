// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequestTags extends $dara.Model {
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

export class ListWorkspacesRequest extends $dara.Model {
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
   * The region.
   * 
   * @example
   * cn-heyuan
   * 
   * **if can be null:**
   * true
   */
  region?: string;
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
   * The tags.
   */
  tags?: ListWorkspacesRequestTags[];
  /**
   * @remarks
   * The workspace name. Fuzzy match is supported.
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  /**
   * @remarks
   * The names of the workspaces. Exact match is supported.
   * 
   * @example
   * workspace-test-001
   * 
   * **if can be null:**
   * true
   */
  workspaceNameList?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      workspaceName: 'workspaceName',
      workspaceNameList: 'workspaceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListWorkspacesRequestTags },
      workspaceName: 'string',
      workspaceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.workspaceNameList)) {
      $dara.Model.validateArray(this.workspaceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

