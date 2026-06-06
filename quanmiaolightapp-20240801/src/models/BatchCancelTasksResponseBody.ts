// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchCancelTasksResponseBodyDataResults extends $dara.Model {
  errorMessage?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * xxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      success: 'success',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
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

export class BatchCancelTasksResponseBodyData extends $dara.Model {
  results?: BatchCancelTasksResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': BatchCancelTasksResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCancelTasksResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: BatchCancelTasksResponseBodyData;
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
      data: BatchCancelTasksResponseBodyData,
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

