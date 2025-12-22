// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVideoCreationTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  estimatedWaitTimeInSeconds?: number;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      estimatedWaitTimeInSeconds: 'estimatedWaitTimeInSeconds',
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimatedWaitTimeInSeconds: 'number',
      requestId: 'string',
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

export class CreateVideoCreationTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  data?: CreateVideoCreationTaskResponseBodyData;
  /**
   * @example
   * 成功
   */
  message?: string;
  retryAble?: boolean;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      retryAble: 'retryAble',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateVideoCreationTaskResponseBodyData,
      message: 'string',
      retryAble: 'boolean',
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

