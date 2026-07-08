// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunTextPolishingRequest extends $dara.Model {
  /**
   * @remarks
   * Text content.
   * 
   * This parameter is required.
   * 
   * @example
   * 文本内容
   */
  content?: string;
  /**
   * @remarks
   * Original article.
   * 
   * @example
   * 原始文章内容
   */
  originContent?: string;
  /**
   * @remarks
   * Custom polishing requirements.
   * 
   * @example
   * 自定义的润色要求
   */
  prompt?: string;
  /**
   * @remarks
   * The task ID. The same task ID shares a session. The task timeout is 12 hours.
   * 
   * @example
   * taskld-xxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. Obtain the [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      originContent: 'OriginContent',
      prompt: 'Prompt',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      originContent: 'string',
      prompt: 'string',
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

