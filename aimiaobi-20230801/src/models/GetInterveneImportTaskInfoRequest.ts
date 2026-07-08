// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterveneImportTaskInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The unique identifier of the task.
   * 
   * > This parameter is optional. The system automatically generates a task ID if you do not specify this parameter. Tasks that have the same \\`TaskId\\` belong to the same conversation group.
   * 
   * @example
   * 19162157
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

