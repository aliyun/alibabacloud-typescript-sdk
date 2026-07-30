// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CheckTuringTaskResponseBodyResult extends $dara.Model {
  failBizCode?: string;
  failCode?: string;
  failMsg?: string;
  status?: string;
  taskId?: string;
  videoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      failBizCode: 'failBizCode',
      failCode: 'failCode',
      failMsg: 'failMsg',
      status: 'status',
      taskId: 'taskId',
      videoUrl: 'videoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failBizCode: 'string',
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
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  result?: CheckTuringTaskResponseBodyResult;
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

