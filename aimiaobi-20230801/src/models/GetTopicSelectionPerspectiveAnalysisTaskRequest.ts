// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTopicSelectionPerspectiveAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * > This parameter is optional. The system automatically generates a task ID. If subsequent tasks have the same TaskId, they are considered part of the same conversation.
   * 
   * @example
   * c9f226b02cca4f42a84c5e955c39dfd2
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

