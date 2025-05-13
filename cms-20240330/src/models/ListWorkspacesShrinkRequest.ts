// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesShrinkRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxxxxxx
   */
  nextToken?: string;
  /**
   * @example
   * cn-heyuan
   * 
   * **if can be null:**
   * true
   */
  region?: string;
  /**
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  /**
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
      workspaceName: 'workspaceName',
      workspaceNameListShrink: 'workspaceNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      region: 'string',
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

