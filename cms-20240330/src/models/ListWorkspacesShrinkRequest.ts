// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
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
   * The resource group ID.
   * 
   * @example
   * rg-ae******ey
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The workspace name. Fuzzy match is used.
   * 
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  /**
   * @remarks
   * The workspace name. Exact match is used.
   * 
   * @example
   * workspace-test-001
   * 
   * **if can be null:**
   * true
   */
  workspaceNameListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      region: 'region',
      resourceGroupId: 'resourceGroupId',
      tagsShrink: 'tags',
      workspaceName: 'workspaceName',
      workspaceNameListShrink: 'workspaceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
      workspaceName: 'string',
      workspaceNameListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

