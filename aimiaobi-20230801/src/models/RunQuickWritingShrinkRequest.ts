// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunQuickWritingShrinkRequest extends $dara.Model {
  articlesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  prompt?: string;
  searchSourcesShrink?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      articlesShrink: 'Articles',
      prompt: 'Prompt',
      searchSourcesShrink: 'SearchSources',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articlesShrink: 'string',
      prompt: 'string',
      searchSourcesShrink: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

