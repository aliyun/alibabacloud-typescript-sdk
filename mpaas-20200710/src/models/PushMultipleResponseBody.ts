// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushMultipleResponseBodyPushResult extends $dara.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleResponseBody extends $dara.Model {
  pushResult?: PushMultipleResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushMultipleResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  validate() {
    if(this.pushResult && typeof (this.pushResult as any).validate === 'function') {
      (this.pushResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

