// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateImageTaskResponseBodyDataTaskList extends $dara.Model {
  /**
   * @example
   * 一直忧伤的猫
   */
  content?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * e1be065b-adc3-435e-bd01-1c18c5ed75d3
   */
  taskId?: string;
  /**
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
   * @example
   * successful
   */
  code?: string;
  data?: GenerateImageTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * F2F366D6-E9FE-1006-BB70-2C650896AAB5
   */
  requestId?: string;
  /**
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

