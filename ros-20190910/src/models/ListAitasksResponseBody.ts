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

export class ListAITasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not authorized to complete this action.
   */
  message?: string;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * U12WEI6Ro2ol3wA54rBNS3Cltv2VJyA+7hP4GqbIOhmWU5mWU9ZE3cXLgDaH4KSMRfIYcIVrvtHaAzCoyfo7VQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The AI tasks.
   */
  tasks?: ListAITasksResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'string',
      tasks: { 'type': 'array', 'itemType': ListAITasksResponseBodyTasks },
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

