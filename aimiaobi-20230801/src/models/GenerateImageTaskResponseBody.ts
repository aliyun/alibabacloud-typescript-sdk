// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageTaskResponseBodyDataTaskList extends $dara.Model {
  /**
   * @remarks
   * The content of the paragraph.
   * 
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @remarks
   * The paragraph ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
   * @remarks
   * The current status of the task. Valid values: SUCCEEDED, FAILED, CANCELED, PENDING, SUSPENDED, and RUNNING.
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

export class GenerateImageTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the paragraph tasks. The tasks are associated based on the input paragraph IDs.
   */
  taskList?: GenerateImageTaskResponseBodyDataTaskList[];
  static names(): { [key: string]: string } {
    return {
      taskList: 'TaskList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskList: { 'type': 'array', 'itemType': GenerateImageTaskResponseBodyDataTaskList },
    };
  }

  validate() {
    if(Array.isArray(this.taskList)) {
      $dara.Model.validateArray(this.taskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateImageTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * successful
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GenerateImageTaskResponseBodyData;
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
   * The error description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateImageTaskResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

