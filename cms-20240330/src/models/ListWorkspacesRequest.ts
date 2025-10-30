// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @remarks
   * Page size
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
   * Pagination Token
   * 
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Region
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
   * Workspace name, fuzzy search
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  /**
   * @remarks
   * Workspace name, exact match
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

