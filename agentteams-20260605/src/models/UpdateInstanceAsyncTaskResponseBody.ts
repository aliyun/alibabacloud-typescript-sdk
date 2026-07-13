// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceAsyncTaskResponseBodyData extends $dara.Model {
  createdAt?: string;
  currentStep?: string;
  modifiedAt?: string;
  taskCode?: string;
  taskId?: string;
  taskStatus?: string;
  waitingForUserAction?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'CreatedAt',
      currentStep: 'CurrentStep',
      modifiedAt: 'ModifiedAt',
      taskCode: 'TaskCode',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      waitingForUserAction: 'WaitingForUserAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      currentStep: 'string',
      modifiedAt: 'string',
      taskCode: 'string',
      taskId: 'string',
      taskStatus: 'string',
      waitingForUserAction: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceAsyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: UpdateInstanceAsyncTaskResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
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
      data: UpdateInstanceAsyncTaskResponseBodyData,
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

