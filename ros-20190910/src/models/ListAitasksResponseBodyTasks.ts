// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAITasksResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The time when the AI task was created. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format.
   * 
   * @example
   * 2023-03-15T03:15:53
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the AI task.
   * 
   * @example
   * Create an ECS instance and deploy the Nginx service.
   */
  prompt?: string;
  /**
   * @remarks
   * The state of the AI task.
   * 
   * *   PENDING
   * *   WAITING
   * *   RUNNING
   * *   SUCCESS
   * *   FAILURE
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The reason why the AI task is in the state.
   * 
   * @example
   * Handler execution unexpected failure
   */
  statusReason?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @remarks
   * The type of the AI task.
   * 
   * *   GenerateTemplate: The AI task is used to generate a template.
   * *   FixTemplate: The AI task is used to fix a template.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  /**
   * @remarks
   * The time when the AI task was updated. The time is displayed in UTC. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format.
   * 
   * @example
   * 2023-11-20T22:00:50
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      prompt: 'Prompt',
      status: 'Status',
      statusReason: 'StatusReason',
      taskId: 'TaskId',
      taskType: 'TaskType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      prompt: 'string',
      status: 'string',
      statusReason: 'string',
      taskId: 'string',
      taskType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

