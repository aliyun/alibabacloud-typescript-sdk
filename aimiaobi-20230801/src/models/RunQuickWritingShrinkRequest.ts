// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunQuickWritingShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Referenced articles
   * 
   * @example
   * 集合
   */
  articlesShrink?: string;
  /**
   * @remarks
   * Other writing parameters. Choose either prompt or writingParams.
   * 
   * This parameter is required.
   * 
   * @example
   * 请按英文输出
   */
  prompt?: string;
  /**
   * @remarks
   * Use the specified search source list.
   */
  searchSourcesShrink?: string;
  /**
   * @remarks
   * Task ID. Reuse the same task ID for multi-turn conversations.
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

