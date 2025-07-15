// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * {}
   */
  taskIntermediateResult?: any;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskIntermediateResult: 'TaskIntermediateResult',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskIntermediateResult: 'any',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitAsyncTaskResponseBody extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  code?: string;
  data?: SubmitAsyncTaskResponseBodyData;
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
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
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
      data: SubmitAsyncTaskResponseBodyData,
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

