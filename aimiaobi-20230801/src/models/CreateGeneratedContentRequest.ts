// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGeneratedContentRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxx_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The body of the content, in rich text format.
   * 
   * This parameter is required.
   * 
   * @example
   * 杭州亚运会
   */
  content?: string;
  /**
   * @remarks
   * The domain for content generation.
   * 
   * @example
   * government
   */
  contentDomain?: string;
  /**
   * @remarks
   * The body of the content, in plain text format.
   * 
   * @example
   * 杭州亚运会
   */
  contentText?: string;
  /**
   * @remarks
   * The keywords.
   */
  keywords?: string[];
  /**
   * @remarks
   * The last generated prompt.
   * 
   * @example
   * 创作xxx文章
   */
  prompt?: string;
  /**
   * @remarks
   * The unique identifier of the task.
   * 
   * > The system automatically generates a task ID. You do not need to specify this parameter. If you specify the same task ID for multiple tasks, they are grouped into a single conversation.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * 杭州亚运会
   */
  title?: string;
  /**
   * @remarks
   * The traceability UUID.
   * 
   * @example
   * xxxx
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      keywords: { 'type': 'array', 'itemType': 'string' },
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywords)) {
      $dara.Model.validateArray(this.keywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

