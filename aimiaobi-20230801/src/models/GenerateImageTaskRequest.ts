// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageTaskRequestParagraphList extends $dara.Model {
  /**
   * @remarks
   * The content of the paragraph.
   * 
   * This parameter is required.
   * 
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @remarks
   * The paragraph ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * > By default, you do not need to specify this parameter. The system automatically generates a task ID. If you specify the same TaskId for subsequent tasks, these tasks are considered part of the same conversation group.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
   * @remarks
   * The current status of the task.
   * 
   * - PENDING: The task is in the queue.
   * 
   * - RUNNING: The task is in progress.
   * 
   * - SUSPENDED: The task is suspended.
   * 
   * - SUCCEEDED: The task was successful.
   * 
   * - FAILED: The task failed.
   * 
   * - UNKNOWN: The task does not exist or its status is unknown.
   * 
   * @example
   * SUCCESSED
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      id: 'Id',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  agentKey?: string;
  /**
   * @remarks
   * The task ID of the article. If you do not have one, you can assign a universally unique identifier (UUID).
   * 
   * This parameter is required.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  articleTaskId?: string;
  /**
   * @remarks
   * The content of the paragraphs.
   * 
   * This parameter is required.
   */
  paragraphList?: GenerateImageTaskRequestParagraphList[];
  /**
   * @remarks
   * The size of the image to generate.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024*1024
   */
  size?: string;
  /**
   * @remarks
   * The style.
   * 
   * This parameter is required.
   * 
   * @example
   * \\"<auto>\\"
   */
  style?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      articleTaskId: 'ArticleTaskId',
      paragraphList: 'ParagraphList',
      size: 'Size',
      style: 'Style',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      articleTaskId: 'string',
      paragraphList: { 'type': 'array', 'itemType': GenerateImageTaskRequestParagraphList },
      size: 'string',
      style: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paragraphList)) {
      $dara.Model.validateArray(this.paragraphList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

