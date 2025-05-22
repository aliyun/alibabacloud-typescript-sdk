// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAITaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Forbidden
   */
  code?: string;
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
   * The request ID.
   * 
   * @example
   * 14A07460-EBE7-47CA-9757-12CC4761D47A
   */
  requestId?: string;
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
   * FAILURE
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
   * The ID of the AI task.
   * 
   * @example
   * t-asasas*****
   */
  taskId?: string;
  /**
   * @remarks
   * The outputs of the AI task. The outputs include the template.
   * 
   * *
   * 
   * @example
   * "Result": {
   *     "ROSTemplateFormatVersion": "2015-09-01",
   * }
   */
  taskOutput?: { [key: string]: any };
  /**
   * @remarks
   * The type of the AI task.
   * 
   * *   GenerateTemplate: The AI task is used to generate a template.
   * *   FixTemplate: The AI task is used to fix a template.
   * 
   * This parameter is required.
   * 
   * @example
   * GenerateTemplate
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      statusReason: 'StatusReason',
      success: 'Success',
      taskId: 'TaskId',
      taskOutput: 'TaskOutput',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      status: 'string',
      statusReason: 'string',
      success: 'string',
      taskId: 'string',
      taskOutput: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskType: 'string',
    };
  }

  validate() {
    if(this.taskOutput) {
      $dara.Model.validateMap(this.taskOutput);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

