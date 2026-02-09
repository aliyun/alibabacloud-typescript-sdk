// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckTuringTaskResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 500
   */
  failCode?: string;
  failMsg?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 871509423398305792
   */
  taskId?: string;
  /**
   * @example
   * http://order-45-1318180738.cos.ap-beijing.myqcloud.com/2025/06/09/1a4837f81c594e7790073f22a43439bf.mp4
   */
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      failCode: 'failCode',
      failMsg: 'failMsg',
      status: 'status',
      taskId: 'taskId',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      failMsg: 'string',
      status: 'string',
      taskId: 'string',
      videoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckTuringTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 404
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0E8B1746-AE35-5C4B-A3A8-345B274AE32C
   */
  requestId?: string;
  result?: CheckTuringTaskResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      requestId: 'string',
      result: CheckTuringTaskResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

