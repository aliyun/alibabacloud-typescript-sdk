// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryTaskStatusResponseBodyDataTaskStatusList extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      status: 'string',
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

export class BatchQueryTaskStatusResponseBodyData extends $dara.Model {
  taskStatusList?: BatchQueryTaskStatusResponseBodyDataTaskStatusList[];
  static names(): { [key: string]: string } {
    return {
      taskStatusList: 'taskStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskStatusList: { 'type': 'array', 'itemType': BatchQueryTaskStatusResponseBodyDataTaskStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.taskStatusList)) {
      $dara.Model.validateArray(this.taskStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryTaskStatusResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: BatchQueryTaskStatusResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A1B2C3D4-E5F6-7890-GHIJ-KLMNOPQRST
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: BatchQueryTaskStatusResponseBodyData,
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

