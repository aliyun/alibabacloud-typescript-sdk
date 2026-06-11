// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50. Maximum value: 50.
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
   * The name of the workspace. This parameter supports fuzzy search.
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  /**
   * @remarks
   * The names of the workspaces. This parameter supports exact search.
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
      workspaceName: 'workspaceName',
      workspaceNameList: 'workspaceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      workspaceName: 'string',
      workspaceNameList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.workspaceNameList)) {
      $dara.Model.validateArray(this.workspaceNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

