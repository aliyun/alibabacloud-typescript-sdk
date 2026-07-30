// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTuringTaskResponseBodyResult extends $dara.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class SubmitTuringTaskResponseBody extends $dara.Model {
  errorCode?: string;
  errorMsg?: string;
  requestId?: string;
  result?: SubmitTuringTaskResponseBodyResult;
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
      result: SubmitTuringTaskResponseBodyResult,
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

